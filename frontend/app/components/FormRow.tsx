export default function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <label className="sm:w-36 text-sm font-medium text-neutral-700">
        {label}
      </label>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}