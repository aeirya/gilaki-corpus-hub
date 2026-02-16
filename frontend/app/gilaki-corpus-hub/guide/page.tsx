import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      <div className="mx-auto max-w-3xl p-6 space-y-10">

        <div>
          <Link
            href="/gilaki"
            className="text-sm text-neutral-500 underline hover:text-neutral-800"
          >
            ← Back to main
          </Link>
        </div>

        <h1 className="text-2xl font-semibold">
          Gilaki Writing & Phonology Guidelines
        </h1>

        {/* ================= VOWELS ================= */}

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Vowel System (9 phonemes)</h2>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium">Front</p>
              <p>i, ī</p>
              <p>e</p>
            </div>

            <div>
              <p className="font-medium">Central</p>
              <p>ə</p>
              <p>a</p>
            </div>

            <div>
              <p className="font-medium">Back</p>
              <p>u, ū</p>
              <p>o</p>
              <p>â</p>
            </div>
          </div>

          <p className="text-xs text-neutral-500">
            Gilaki has contrastive vowel length in high vowels (i/ī, u/ū).
          </p>
        </section>

        {/* ================= CONSONANTS ================= */}

        {/* <section className="space-y-4">
          <h2 className="text-lg font-semibold">Consonant Inventory</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-300">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="border p-2 text-left"> </th>
                  <th className="border p-2">Bilabial</th>
                  <th className="border p-2">Dental/Alveolar</th>
                  <th className="border p-2">Postalveolar</th>
                  <th className="border p-2">Velar</th>
                  <th className="border p-2">Glottal</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-2 font-medium">Stops</td>
                  <td className="border p-2">p b</td>
                  <td className="border p-2">t d</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">k g</td>
                  <td className="border p-2"></td>
                </tr>

                <tr>
                  <td className="border p-2 font-medium">Affricates</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2">č ǰ</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                <tr>
                  <td className="border p-2 font-medium">Nasals</td>
                  <td className="border p-2">m</td>
                  <td className="border p-2">n</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                <tr>
                  <td className="border p-2 font-medium">Fricatives</td>
                  <td className="border p-2">f v</td>
                  <td className="border p-2">s z</td>
                  <td className="border p-2">š ž</td>
                  <td className="border p-2">x ɣ</td>
                  <td className="border p-2">h</td>
                </tr>

                <tr>
                  <td className="border p-2 font-medium">Approximants</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">l r</td>
                  <td className="border p-2">y</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Consonant Inventory</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-300">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="border p-2"></th>
                  <th className="border p-2"></th>
                  <th className="border p-2">bilabial</th>
                  <th className="border p-2">labio-dental</th>
                  <th className="border p-2">front-lingual</th>
                  <th className="border p-2">mid-lingual</th>
                  <th className="border p-2">back-lingual</th>
                  <th className="border p-2">uvular</th>
                  <th className="border p-2">pharyngeal</th>
                </tr>
              </thead>

              <tbody>
                {/* OCCLUSIVES */}
                <tr>
                  <td className="border p-2 font-semibold" rowSpan={3}>occlusives</td>
                  <td className="border p-2">pure</td>
                  <td className="border p-2">p b</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">t d</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">k g</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                <tr>
                  <td className="border p-2">affricate</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2">č ǰ</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                <tr>
                  <td className="border p-2">nasal</td>
                  <td className="border p-2">m</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">n</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                {/* FRICATIVES */}
                <tr>
                  <td className="border p-2 font-semibold" rowSpan={4}>fricatives</td>
                  <td className="border p-2"><b>single focus</b> — flat glottis</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">f v</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">y</td>
                  <td className="border p-2">x ɣ</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">h</td>
                </tr>

                <tr>
                  <td className="border p-2"><b>single focus</b> — round glottis</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2">s z</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                <tr>
                  <td className="border p-2">bifocal</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2">š ž</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                <tr>
                  <td className="border p-2">lateral</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2">l</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

                {/* TREMULOUS */}
                <tr>
                  <td className="border p-2 font-semibold">tremulous</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2">r</td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>



        {/* ================= ORTHOGRAPHY ================= */}

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Orthography (Latin)</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>ə</strong> — mid central vowel</li>
            <li><strong>å</strong> — low back vowel</li>
            <li><strong>č</strong> — /t͡ʃ/</li>
            <li><strong>ǰ</strong> — /d͡ʒ/</li>
            <li><strong>š</strong> — /ʃ/</li>
            <li><strong>ž</strong> — /ʒ/</li>
            <li><strong>x</strong> — voiceless velar fricative</li>
            <li><strong>ɣ</strong> — voiced velar fricative</li>
            <li><strong>y</strong> — palatal approximant</li>
          </ul>
        </section>

        {/* ================= STEM RULES ================= */}

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Stem Conventions</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>No trailing hyphen (-) required in stored stems.</li>
            <li>Always also include canonical stem form in database.</li>
          </ul>
        </section>

        {/* ================= DIALECT ================= */}

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Dialect Annotation</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Western — Biah Pas (e.g., Rashti)</li>
            <li>Eastern — Biah Pish (e.g., Lahijani)</li>
            <li>If uncertain: "Unspecified"</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
