'use client';

/**
 * Minimal, consent-gated analytics event helper.
 *
 * Pushes to window.dataLayer (GTM-compatible) only after the visitor has
 * accepted analytics cookies via the consent banner. No PII or clinical
 * detail should ever be passed in `detail` — appointment *type labels* are
 * fine (e.g. "routine"), symptoms or personal identifiers are not.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsEvent =
  | 'hero_booking_cta_click'
  | 'header_booking_cta_click'
  | 'sticky_mobile_booking_cta_click'
  | 'telephone_link_click'
  | 'appointment_type_selected'
  | 'booking_started'
  | 'booking_datetime_selected'
  | 'booking_contact_stage_reached'
  | 'booking_validation_error'
  | 'booking_completed'
  | 'booking_abandoned'
  | 'directions_click'
  | 'testimonial_link_click';

const CONSENT_KEY = 'setton-cookie-consent';

export function getConsent(): 'accepted' | 'declined' | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === 'accepted' || value === 'declined' ? value : null;
}

export function setConsent(value: 'accepted' | 'declined') {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent('setton-consent-change', { detail: value }));
}

export function trackEvent(name: AnalyticsEvent, detail?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;
  if (getConsent() !== 'accepted') return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: name,
    ...detail,
  });
}
