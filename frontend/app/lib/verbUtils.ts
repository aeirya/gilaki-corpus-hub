import type { Verb } from "@/app/types/verb";

export function validateVerb(v: Partial<Verb>) {
  return !!(v.infinitive && v.pastStem && v.presentStem);
}

export function buildPayload(
  verb: Partial<Verb>,
  dialect: string,
  orthography: string
) {
  return {
    ...verb,
    dialect:
      verb.dialect === "default" ? dialect : verb.dialect,
    orthography,
  };
}
