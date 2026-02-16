type DialectSelectProps = {
  value: string;
  onChange: (v: string) => void;
  label?: string;
  className?: string;
};

export default function DialectSelect({
  value,
  onChange,
  label,
  className = "",
}: DialectSelectProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {label && (
        <span className="text-neutral-700 text-sm">
          {label}
        </span>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-400"
      >
        <option value="unspecified">Unspecified</option>
        <option value="western">Western</option>
        <option value="eastern">Eastern</option>
      </select>
    </div>
  );
}
