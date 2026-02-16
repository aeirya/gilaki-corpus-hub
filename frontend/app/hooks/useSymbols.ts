import { useEffect, useState } from "react";

export const symbols = [
  { char: "ə", key: "e" },
  { char: "å", key: "a" },
  { char: "ī", key: "i" },
  { char: "ū", key: "u" },
  { char: "č", key: "c" },
  { char: "ɣ", key: "g" },
  { char: "š", key: "s" },
  { char: "ž", key: "z" },
  { char: "ǰ", key: "j" },
];

export function useSymbolShortcuts(
  insert: (char: string) => void
) {
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Control") {
        setShowHints(true);
      }

      if (e.ctrlKey) {
        const match = symbols.find(s => s.key === e.key);
        if (match) {
          e.preventDefault();
          insert(match.char);
        }
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "Control") {
        setShowHints(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [insert]);

  return { showHints };
}
