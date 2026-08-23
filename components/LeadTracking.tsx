"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, destination: string) {
  window.gtag?.("event", eventName, {
    event_category: "lead",
    destination,
    page_path: window.location.pathname,
  });
}

export function LeadTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a") : null;
      const href = target?.getAttribute("href") ?? "";

      if (href.includes("wa.me")) track("whatsapp_click", href);
      if (href.startsWith("tel:")) track("phone_click", href);
      if (href.startsWith("mailto:")) track("email_click", href);
      if (href === "/book-free-session") track("consultation_start", href);
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      const eventName = form.dataset.leadEvent;
      if (eventName) track(eventName, form.action || "whatsapp");
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
