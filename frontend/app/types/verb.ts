export type Verb = {
  id: number
  createdAt: string

  infinitive: string
  pastStem: string
  presentStem: string
  exampleSentence?: string | null
  enGloss?: string | null
  dialect?: string | null
  orthography?: string | null
}

export function getEmptyVerb(): Partial<Verb> {
  return {
    infinitive: "",
    pastStem: "",
    presentStem: "",
    exampleSentence: "",
    enGloss: "",
  };
}
