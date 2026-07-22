import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { Resend } from 'resend';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'resend-dev-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send-email', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const { name, email, service, message } = JSON.parse(body || '{}');

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Faltan campos requeridos en el formulario.' }));
                  return;
                }

                const apiKey = env.VITE_RESEND_API_KEY || env.RESEND_API_KEY || process.env.RESEND_API_KEY;
                if (!apiKey) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Falta configurar RESEND_API_KEY en el archivo .env' }));
                  return;
                }

                const resend = new Resend(apiKey);
                const toEmail = env.RESEND_TO_EMAIL || process.env.RESEND_TO_EMAIL || 'contacto@nilotech.cl';
                const fromEmail = env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'NiloTech Web <onboarding@resend.dev>';

                const response = await resend.emails.send({
                  from: fromEmail,
                  to: [toEmail],
                  replyTo: email,
                  subject: `Nueva consulta de ${name} - ${service || 'General'}`,
                  html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                      <h2 style="color: #111;">Nueva consulta desde la web NiloTech</h2>
                      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                      <p><strong>Nombre:</strong> ${name}</p>
                      <p><strong>Email de contacto:</strong> <a href="mailto:${email}">${email}</a></p>
                      <p><strong>Servicio solicitado:</strong> ${service || 'No especificado'}</p>
                      <p><strong>Mensaje:</strong></p>
                      <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
                    </div>
                  `,
                });

                if (response.error) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: response.error.message }));
                  return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, data: response.data }));
              } catch (err: any) {
                console.error('Error enviando correo en dev server:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Error al procesar la solicitud' }));
              }
            });
          });
        },
      },
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/three/') || id.includes('node_modules/@react-three/')) {
              return 'vendor-three';
            }
            if (id.includes('node_modules/framer-motion/') || id.includes('node_modules/gsap/')) {
              return 'vendor-animation';
            }
            if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/')) {
              return 'vendor-react';
            }
          },
        },
      },
    },
  };
});
