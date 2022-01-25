export type GTagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
};

export const pageView = (url: URL): void => {
  window.gtag('config', process.env.GOOGLE_ANALYTICS_ID as string, {
    page_path: url,
  });
};

export const event = (action: string, params: GTagEventParams): void => {
  window.gtag('event', action, params);
};