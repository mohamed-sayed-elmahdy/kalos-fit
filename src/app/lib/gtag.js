// lib/gtag.js

export const GA_TRACKING_ID = 'G-VN6GK3Y0ZV'; // Replace with your actual tracking ID

// Log page views
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    debug_mode: true, // Enable Debug mode for all page views
  });
};

// Log events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    debug_mode: true, // Enable Debug mode for all events
  });
};
