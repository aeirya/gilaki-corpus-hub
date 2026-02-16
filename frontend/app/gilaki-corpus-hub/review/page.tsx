"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Review() {
  const [card, setCard] = useState<any>(null);

  async function loadCard() {
    const res = await fetch("/api/gilaki/review");
    const data = await res.json();
    setCard(data);
  }

  async function vote(correct: boolean) {
    await fetch("/api/gilaki/review/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verb_id: card.id,
        correct,
      }),
    });

    loadCard();
  }

  useEffect(() => {
    loadCard();
  }, []);

  if (!card) return <div className="p-6">Loading...</div>;

  const total = card.correct + card.incorrect;
  const disagreement =
    total > 0 &&
    Math.abs(card.correct - card.incorrect) <= total * 0.3;

  const confidence =
    total === 0
      ? "neutral"
      : card.correct > card.incorrect
      ? "correct"
      : "incorrect";



  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
        
      <Link href="/gilaki" className="text-sm underline text-neutral-400">
        ← Back
      </Link>

      <div className="text-center space-y-1">
        <div className="text-2xl font-semibold">
          {card.infinitive}
        </div>
        <div className="text-xs uppercase tracking-wide text-neutral-400">
          {card.dialect}
        </div>
      </div>

      <div className="space-y-2 text-center">
        <div>
          <span className="text-neutral-400">Past:</span>{" "}
          <span className="font-mono">{card.past_stem}</span>
        </div>
        <div>
          <span className="text-neutral-400">Present:</span>{" "}
          <span className="font-mono">{card.present_stem}</span>
        </div>
      </div>

      <div className="flex justify-center gap-6 text-sm">
        <div className="text-red-600 font-medium">
          {/* ✖ */} {card.incorrect}
        </div>
        <div className="text-green-600 font-medium">
          {/* ✔ */} {card.correct}
        </div>
      </div>

      {disagreement && (
        <div className="text-center text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-xl">
          ⚠ Disputed entry
        </div>
      )}

      <div className="flex justify-center gap-6 pt-2">
        <button
          onClick={() => vote(false)}
          className="px-4 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition"
        >
          ✖ Incorrect
        </button>

        <button
          onClick={() => vote(true)}
          className="px-4 py-2 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition"
        >
          ✔ Correct
        </button>
      </div>
    </div>


    </main>
  );
}
