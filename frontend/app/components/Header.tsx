import Link from "next/link";

export default function Header() {
  return (
   <header className="mb-1 space-y-3">
        <div className="space-y-3 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
            Gilaki Corpus Collector
        </h1>
        <p className="text-neutral-500">
            Verb entry tool for corpus building.
        </p>
        </div>

        <div className="flex items-center justify-between">
            <nav className="flex gap-8 text-sm mt-5 border-b border-neutral-400 pb-1">
            <Link href="/gilaki" className="font-medium text-neutral-900">
                Verb stems
            </Link>
            <Link href="/gilaki/review" className="text-neutral-500 hover:text-neutral-800">
                Review
            </Link>
            <Link href="/gilaki/review" className="text-neutral-500 hover:text-neutral-800">
                Submit text
            </Link>
            {/* <Link href="/gilaki/guide" className="text-neutral-500 hover:text-neutral-800">
                Writing Guide
            </Link> */}
            </nav>
        </div>

        </header>

  );
}
