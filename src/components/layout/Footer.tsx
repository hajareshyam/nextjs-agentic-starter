export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto w-full max-w-5xl px-6 py-4 text-sm text-slate-400">
        <p>© {year} Next Boilerplate. All rights reserved.</p>
      </div>
    </footer>
  );
}
