"use client";

import SymbolBar from "./SymbolBar";
import FormRow from "./FormRow";

import { useVerbForm } from "@/app/hooks/useVerbForm"; 
import { useSymbolShortcuts } from "@/app/hooks/useSymbols";
import { useSymbolInsertion } from "@/app/hooks/useSymbolInsertion";

const inputBase = "w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition";

export default function VerbForm(props) {
  const { 
    // verb, setVerb, submit, editingId, status
    verb, setVerb, update, submit, editingId, status
  } = useVerbForm(props);
  
  const { activeRef, insertSymbol } = useSymbolInsertion(update);
  const { showHints } = useSymbolShortcuts(insertSymbol);

  return (
    <section className="relative mx-auto max-w-xl bg-neutral-100 rounded-2xl shadow-sm p-8 mb-12">
      <div className="flex gap-6">
        <div className="flex-1">
          <form onSubmit={submit} className="space-y-3">

            <FormRow label="Infinitive">
              <input
                id="infinitive"
                value={verb.infinitive ?? ""}
                onChange={(e) =>
                  setVerb({ ...verb, infinitive: e.target.value })
                }
                onFocus={(e) => (activeRef.current = e.target)}
                className={inputBase}
              />
            </FormRow>

            <FormRow label="Past stem">
              <input
                id="pastStem"
                value={verb.pastStem ?? ""}
                onChange={(e) =>
                  setVerb({ ...verb, pastStem: e.target.value })
                }
                onFocus={(e) => (activeRef.current = e.target)}
                className={inputBase}
              />
            </FormRow>

            <FormRow label="Present stem">
              <input
                id="presentStem"
                value={verb.presentStem ?? ""}
                onChange={(e) =>
                  setVerb({ ...verb, presentStem: e.target.value })
                }
                onFocus={(e) => (activeRef.current = e.target)}
                className={inputBase}
              />
            </FormRow>

            <FormRow label="Example sentence (optional)">
              <textarea
                id="exampleSentence"
                value={verb.exampleSentence ?? "ha?"}
                onChange={(e) =>
                  setVerb({ ...verb, exampleSentence: e.target.value })
                }
                onFocus={(e) => (activeRef.current = e.target)}
                rows={2}
                className={inputBase}
              />
            </FormRow>

            <FormRow label="English glossary (optional)">
              <input
                id="enGloss"
                value={verb.enGloss ?? ""}
                onChange={(e) =>
                  setVerb({ ...verb, enGloss: e.target.value })
                }
                onFocus={(e) => (activeRef.current = e.target)}
                className={inputBase}
              />
            </FormRow>

            <button
              type="submit"
              className="w-full rounded-xl bg-neutral-900 py-3 text-white font-medium transition"
            >
              {editingId ? "Update" : "Save"}
            </button>

            {status && (
              <div className="text-sm text-neutral-500">{status}</div>
            )}
          </form>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-4 border-l border-neutral-300 pl-8">
          <SymbolBar onInsert={insertSymbol} showHints={showHints} />
        </div>
      </div>
    </section>
  );
}
