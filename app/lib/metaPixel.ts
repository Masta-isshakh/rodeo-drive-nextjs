"use client";

export type MetaPixelParams = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function canTrack() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

export function trackMetaEvent(eventName: string, params?: MetaPixelParams) {
  if (!canTrack()) return;
  if (params) {
    window.fbq!("track", eventName, params);
    return;
  }
  window.fbq!("track", eventName);
}

export function trackLead(params?: MetaPixelParams) {
  trackMetaEvent("Lead", params);
}

export function trackContact(params?: MetaPixelParams) {
  trackMetaEvent("Contact", params);
}

export function trackCompleteRegistration(params?: MetaPixelParams) {
  trackMetaEvent("CompleteRegistration", params);
}
