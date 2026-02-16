"use client";

import { symbols } from "../hooks/useSymbols";

export default function SymbolBar({
  onInsert,
  showHints,
}: {
  onInsert: (char: string) => void;
  showHints: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-x-1 gap-y-2">
      {symbols.map((s) => (
        <div
          key={s.char}
          className="flex flex-col items-center"
        >
          <button
            type="button"
            tabIndex={-1}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onInsert(s.char)}
            className="h-8 w-8 flex items-center justify-center rounded-md 
                       bg-white border border-neutral-300 
                       hover:bg-neutral-200 text-md transition"
          >
            {s.char}
          </button>

          {/* Reserved hint space */}
          <div className="h-3 mt-0.5 text-[9px] text-neutral-500">
            <span
              className={`transition-opacity duration-150 ${
                showHints ? "opacity-100" : "opacity-0"
              }`}
            >
              Ctrl+{s.key}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
