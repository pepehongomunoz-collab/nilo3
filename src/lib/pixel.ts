declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks a Meta Pixel standard or custom event safely.
 * @param event Standard event name (e.g. 'Contact', 'Lead') or custom string
 * @param data Optional parameters payload
 */
export function trackPixelEvent(
  event: 'Contact' | 'Lead' | 'PageView' | string,
  data?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (data) {
        window.fbq('track', event, data);
      } else {
        window.fbq('track', event);
      }
    } catch (err) {
      console.warn('[Meta Pixel] Failed to track event:', event, err);
    }
  }
}
