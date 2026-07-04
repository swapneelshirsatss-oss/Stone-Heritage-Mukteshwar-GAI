import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

function sendToDataLayer({ name, delta, id }: Metric) {
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({
    event: 'web-vitals',
    event_category: 'Web Vitals',
    event_action: name,
    event_value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    event_label: id,
  });
}

export function reportWebVitals() {
  onCLS(sendToDataLayer);
  onLCP(sendToDataLayer);
  onFCP(sendToDataLayer);
  onTTFB(sendToDataLayer);
  onINP(sendToDataLayer);
}
