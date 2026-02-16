"use client";

import { useRef } from "react";
import type { Verb } from "@/app/types/verb";

export function useSymbolInsertion(update) {
  const activeRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  function insertSymbol(symbol: string) {
    const el = activeRef.current;
    if (!el) return;

    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? el.value.length;

    const newValue =
      el.value.slice(0, start) + symbol + el.value.slice(end);

    update(
        el.id as keyof Verb, 
        newValue as any
    );

    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + 1, start + 1);
    });
  }

  return { activeRef, insertSymbol };
}
