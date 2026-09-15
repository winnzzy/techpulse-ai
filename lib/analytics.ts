export type ConversionEventName =
  | "tool_open"
  | "tool_complete"
  | "article_commercial_click"
  | "affiliate_click"
  | "sponsor_click"
  | "direct_ad_click"
  | "newsletter_cta_click"
  | "newsletter_signup"
  | "lead_cta_click"
  | "lead_submit"
  | "product_cta_click";

export type ConversionEvent = {
  name: ConversionEventName;
  placement?: string;
  partner?: string;
  campaign?: string;
  tool?: string;
  destination?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackConversion({name,...details}: ConversionEvent) {
  if (typeof window === "undefined") return;
  const payload = { event: name, ...details };
  window.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent("techpulse:conversion", { detail: payload }));
}
