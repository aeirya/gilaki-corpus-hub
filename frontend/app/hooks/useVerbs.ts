import { useEffect, useState } from "react";
import type { normalizeVerb } from "@/app/lib/api/verbs";

const API = "/api/gilaki";

export function useVerbs() {
  const [verbs, setVerbs] = useState<any[]>([]);

  async function loadVerbs() {
    const res = await fetch(`${API}/verbs`);
    const data = await res.json();

    // setVerbs(data.map(normalizeVerb));
    setVerbs(data);
  }

  useEffect(() => {
    loadVerbs();
  }, []);

  return { verbs, loadVerbs };
}
