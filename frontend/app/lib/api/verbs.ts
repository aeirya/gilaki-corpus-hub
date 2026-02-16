import type { Verb } from "@/app/types/verb";

function normalizeVerb(row: any): Verb {
  return {
    id: row.id,
    infinitive: row.infinitive,
    pastStem: row.past_stem,
    presentStem: row.present_stem,
    exampleSentence: row.example_sentence,
    enGloss: row.en_gloss,
    dialect: row.dialect,
    orthography: row.orthography,
  };
}

export async function createVerb(payload: Partial<Verb>) {
  return fetch("/api/gilaki/verbs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  // return normalizeVerb(data);
}

export async function updateVerb(
  id: number,
  payload: Partial<Verb>
) {
  return fetch(`/api/gilaki/verbs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  // return normalizeVerb(data);
}
