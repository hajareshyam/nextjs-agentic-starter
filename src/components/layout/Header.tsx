import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-100">
          Next Boilerplate
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-sm text-slate-300">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#getting-started" className="hover:text-white">
                Getting Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
