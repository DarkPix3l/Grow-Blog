"use client";

import { useSyncExternalStore } from "react";

export function useConditionalRendering(query: string): boolean {
  return useSyncExternalStore(
    //The Subscribe function: Tells React how to listen for changes
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    //The Client Snapshot: How to get the value when on the client
    () => window.matchMedia(query).matches,
    //The Server Snapshot: What value to show during SSR/Hydration
    () => false 
  );
}