import { Resend } from 'resend';

// El contenido viene del usuario: se escapa antes de meterlo en el HTML del mail
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function handler(event: { httpMethod: string; body?: string }) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, service, message, website } = JSON.parse(event.body || '{}');

    // Honeypot: los bots completan el campo oculto; se responde OK sin enviar nada
    if (website) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true }),
      };
    }

    // El formulario de la home manda email + mensaje; el de la landing, teléfono
    if (!name || (!email && !phone) || (!message && !phone)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Faltan campos requeridos en el formulario.' }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'RESEND_API_KEY no está configurada en el servidor.' }),
      };
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.RESEND_TO_EMAIL || 'desarrollos@nilotech.com.ar';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'NiloTech Web <notificaciones@nilotech.com.ar>';

    const validEmail = typeof email === 'string' && EMAIL_RE.test(email) ? email : null;
    const phoneDigits = typeof phone === 'string' ? phone.replace(/\D/g, '') : '';
    const subjectName = String(name).replace(/[\r\n]+/g, ' ').slice(0, 80);
    const subjectService = String(service || 'General').replace(/[\r\n]+/g, ' ').slice(0, 60);

    const response = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      ...(validEmail ? { replyTo: validEmail } : {}),
      subject: `Nueva consulta de ${subjectName} - ${subjectService}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #111;">Nueva consulta desde la web NiloTech</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          ${validEmail ? `<p><strong>Email de contacto:</strong> <a href="mailto:${escapeHtml(validEmail)}">${escapeHtml(validEmail)}</a></p>` : ''}
          ${phoneDigits ? `<p><strong>WhatsApp:</strong> <a href="https://wa.me/${phoneDigits}">${escapeHtml(phone)}</a></p>` : ''}
          <p><strong>Servicio solicitado:</strong> ${escapeHtml(service || 'No especificado')}</p>
          ${message ? `<p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>` : ''}
        </div>
      `,
    });

    if (response.error) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: response.error.message }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, data: response.data }),
    };
  } catch (error: any) {
    console.error('Error enviando correo con Resend:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Error interno al enviar el correo.' }),
    };
  }
}
