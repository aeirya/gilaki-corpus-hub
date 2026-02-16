"use client";

import { useState, useEffect } from "react";
import type { Verb } from "@/app/types/verb";
import { getEmptyVerb } from "@/app/types/verb";
import { validateVerb, buildPayload } from "@/app/lib/verbUtils";
import { createVerb, updateVerb } from "@/app/lib/api/verbs";


export function useVerbForm({
  dialect,
  orthography,
  editData,
  onSaved,
}: {
  dialect: string;
  orthography: string;
  editData?: Verb | null;
  onSaved: () => void;
}) {
  const [verb, setVerb] = useState(getEmptyVerb());
  const [editingId, setEditingId] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("editData changed:", editData);
  }, [editData]);

  useEffect(() => {
    if (!editData) return;
    setVerb(editData);
    setEditingId(editData.id ?? null);
  }, [editData?.id]);

  function update<K extends keyof Verb>(key: K, value: Verb[K]) {
    setVerb((prev) => ({ ...prev, [key]: value }));
  }

  async function submit() {
    if (!validateVerb(verb)) {
      setStatus("Fill required fields.");
      return;
    }

    const payload = buildPayload(verb, dialect, orthography);

    if (editingId) {
        await updateVerb(editingId, payload);
    } else {
        await createVerb(payload);
    }

    setVerb(getEmptyVerb());
    setEditingId(null);
    setStatus(editingId ? "Updated ✅" : "Saved ✅");
    onSaved();
  }

  return { 
    verb, 
    setVerb, 
    update,
    submit, 
    editingId, 
    status
  };
}
