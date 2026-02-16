import DialectSelect from "./DialectSelect";

type Props = {
  dialect: string;
  setDialect: (v: string) => void;
  orthography: string;
  setOrthography: (v: string) => void;
};

export default function SettingsBar({
  dialect,
  setDialect,
  orthography,
  setOrthography,
}: Props) {
  return (
    <div className="w-full border-b border-neutral-100 bg-natural-200">

      <div className="mx-auto max-w-6xl px-6 py-3 flex flex-wrap items-center gap-6 text-sm">

        <DialectSelect
          value={dialect}
          onChange={setDialect}
          label="Default dialect"
        />

        <div className="flex items-center gap-2">
          <span className="text-neutral-700">Script</span>
          <select
            value={orthography}
            onChange={(e) => setOrthography(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-1 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-300"
          >
            <option value="latin">Latin</option>
            <option value="perso_arabic">Perso-Arabic</option>
          </select>
        </div>

        <a
          href="/gilaki/guide"
          className="ml-auto text-neutral-500 hover:text-neutral-900"
        >
          Writing guide
        </a>

      </div>
    </div>
  );
}
