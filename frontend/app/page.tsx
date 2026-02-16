"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import VerbForm from "./components/VerbForm";
import VerbList from "./components/VerbList";
import ComparisonModal from "./components/ComparisonModal";
import { useVerbs } from "./hooks/useVerbs";
import SettingsBar from "./components/SettingsBar";
import { Verb } from "@/app/types/verb"

export default function Page() {
  const { verbs, loadVerbs } = useVerbs();
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);
  const [comparison, setComparison] = useState<any[]>([]);
  const [dialect, setDialect] = useState("unspecified");
  const [orthography, setOrthography] = useState("latin");

  const [editingVerb, setEditingVerb] = useState<Verb | null>(null);


  useEffect(() => {
    const d = document.cookie.match(/dialect=([^;]+)/)?.[1];
    const o = document.cookie.match(/orthography=([^;]+)/)?.[1];
    if (d) setDialect(d);
    if (o) setOrthography(o);
  }, []);

  function handleDialectChange(v: string) {
    setDialect(v);
    document.cookie = `dialect=${v}; path=/`;
  }

  function handleOrthographyChange(v: string) {
    setOrthography(v);
    document.cookie = `orthography=${v}; path=/`;
  }

  return (
    <main className="min-h-screen bg-neutral-300 text-neutral-900">

      <div className='bg-neutral-100'>

      <SettingsBar
        dialect={dialect}
        setDialect={handleDialectChange}
        orthography={orthography}
        setOrthography={handleOrthographyChange}
        />
        </div>

      <div className="mx-auto max-w-2xl px-10 py-12">

        <Header />

        <div className="mt-4">

          <VerbForm
            onSaved={() => {
              loadVerbs();
              setEditingVerb(null);
            }}
            dialect={dialect}
            orthography={orthography}
            editData={editingVerb}
            />
        </div>

        <VerbList
          verbs={verbs}
          onSelect={(inf, data) => {
            setSelectedVerb(inf);
            setComparison(data);
          }}
        />

        <ComparisonModal
          verb={selectedVerb}
          comparison={comparison}
          onClose={() => setSelectedVerb(null)}
          onEdit={(row) => {
            setEditingVerb({ ...row });
            setSelectedVerb(null);
          }}
          onDeleted={loadVerbs}
        />

      </div>
    </main>
  );
}
