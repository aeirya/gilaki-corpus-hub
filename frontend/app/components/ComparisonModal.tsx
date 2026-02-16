import { Verb } from "@/app/types/verb"

export default function ComparisonModal({
  verb,
  comparison,
  onClose,
  onEdit,
  onDeleted,
}: {
  verb: string | null;
  comparison: Verb[];
  onClose: () => void;
  onEdit: (row: Verb) => void;
  onDeleted: () => void;
}) {

  if (!verb) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6 tracking-tight">
          {verb}
        </h2>

        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
              <tr>
                <th className="px-4 py-3 text-left">Dialect</th>
                <th className="px-4 py-3 text-left">Past</th>
                <th className="px-4 py-3 text-left">Present</th>
                <th className="px-4 py-3 text-right"> </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-100">
              {comparison.map((row) => (
                <tr
                  key={row.dialect}
                  onClick={() => onEdit(row)}
                  className="cursor-pointer hover:bg-neutral-50 transition"
                >
                  <td className="px-4 py-3 font-medium ${row.dialect === 'unspecified' ? 'text-neutral-400 italic' : 'text-neutral-800'}">
                    {row.dialect}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">
                    {row.pastStem}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">
                    {row.presentStem}
                  </td>
                   <td className="px-4 py-3 text-right">
                    <button
                      onClick={async (e) => {
                        e.stopPropagation();
                        await fetch(`/api/gilaki/verbs/${row.id}`, {
                          method: "DELETE",
                        });
                        onDeleted();
                        onClose();
                      }}
                      className="text-red-500 text-xs hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-neutral-400 mt-4">
          Click a row to edit
        </p>
      </div>
    </div>
  );
}
