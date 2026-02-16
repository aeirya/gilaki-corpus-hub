import { Verb } from "@/app/types/verb"

export default function VerbList({
  verbs,
  onSelect,
}: {
  verbs: Verb[];
  onSelect: (inf: string, data: Verb[]) => void;
}) {
  async function openComparison(infinitive: string) {
    const res = await fetch(
      `/api/gilaki/compare/${encodeURIComponent(infinitive)}`
    );
    const data = await res.json();
    onSelect(infinitive, data[infinitive] || []);
  }

  return (
    <section className="space-y-4">
      {verbs.map((v) => (
        <div
          key={v.id}
          onClick={() => openComparison(v.infinitive)}
          className="rounded-2xl bg-white p-4 border border-neutral-200 hover:border-neutral-400 cursor-pointer transition"
        >
          {/* infinitive */}
          <div className="font-semibold text-[15px]">
            {v.infinitive}
          </div>

          {/* stems */}
          <div className="text-sm text-neutral-600">
            {v.pastStem} • {v.presentStem}
          </div>

          {/* example (subtle) */}
          {v.exampleSentence && (
            <div className="text-sm text-neutral-500 mt-1 line-clamp-2">
              {v.exampleSentence}
            </div>
          )}

          {/* glossary (very subtle) */}
          {v.enGloss && (
            <div className="text-xs text-neutral-400 mt-1">
              {v.enGloss}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
