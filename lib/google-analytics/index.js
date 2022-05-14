export const pageview = (url) => {
  window.fbq("track", "PageView");
  window.gtag("config", process.env.GOOGLE_ANALYTICS_ID, {
    path_url: url,
  });
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
