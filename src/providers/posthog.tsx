// app/providers.jsx
"use client";
import { ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
interface Props {
  children: ReactNode;
}
export function PostHogProvider({ children }: Props) {
  useEffect(() => {
    const enabled = Boolean(
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
        process.env.NEXT_PUBLIC_POSTHOG_HOST
    );

    if (!enabled) return;
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      autocapture: true,
      capture_pageview: true, // optional, ensures page views get recorded
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
