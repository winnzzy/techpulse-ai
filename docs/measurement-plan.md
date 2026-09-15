# TechPulse AI Measurement Plan

## Principle
Measure actions that help improve reader usefulness and commercial performance without collecting sensitive form contents or inventing metrics. The event layer is provider-agnostic so GA4, another analytics platform, or a first-party endpoint can be connected later.

## Core events

| Event | Purpose | Useful dimensions |
| --- | --- | --- |
| `tool_open` | Understand tool discovery | tool, placement |
| `tool_complete` | Measure whether a tool gets used to an answer | tool |
| `article_commercial_click` | Measure article-to-commercial funnel | placement, destination |
| `affiliate_click` | Measure disclosed affiliate intent | partner, placement, campaign, destination |
| `sponsor_click` | Measure sponsored placement traffic | partner, placement, campaign |
| `direct_ad_click` | Measure direct-paid advertising traffic | partner, placement, campaign |
| `newsletter_cta_click` | Measure newsletter intent | placement, campaign |
| `newsletter_signup` | Measure confirmed newsletter conversion after provider integration | campaign |
| `lead_cta_click` | Measure B2B/service intent | placement, campaign |
| `lead_submit` | Measure successful future lead-form submission without sending form contents | campaign |
| `product_cta_click` | Measure TechPulse-owned digital product intent | placement, campaign, destination |

Click events and successful conversion events are deliberately separate. A CTA click must never be counted as a newsletter signup, lead submission, sale, or other completed outcome.

## Funnel views

1. Search/social/direct -> article -> related article/tool -> newsletter or commercial CTA.
2. Search -> TechPulse Labs tool -> result -> buying guide/comparison -> disclosed partner click.
3. Article/tool -> newsletter -> repeat visit -> premium product or partner conversion.
4. High-intent business page -> lead CTA -> future qualified inquiry.

## Privacy rules

- Never send email addresses, names, prompts, uploaded documents, form contents, IP addresses or other sensitive user data as event parameters.
- Keep event names stable and dimensions low-cardinality where practical.
- Add consent controls before enabling analytics/advertising technologies where required.
- Do not activate advertising or affiliate destinations until real accounts and disclosures are in place.

## Activation checklist

When an analytics provider is selected, connect the provider to `lib/analytics.ts`, configure consent, verify events in a test environment, then create reporting for acquisition, tool engagement, newsletter intent and commercial clicks. Revenue reporting should use actual partner/network data rather than estimated commissions.
