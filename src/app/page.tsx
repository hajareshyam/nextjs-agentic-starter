import { Footer, Header } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 py-12">
        <section
          id="getting-started"
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl"
        >
          <h1 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Build Faster with Next.js Boilerplate
          </h1>
          <p className="m-0 max-w-2xl leading-7 text-slate-300">
            A clean starter with Tailwind CSS, CI workflows, agent conventions, and testing
            structure so you can ship features quickly.
          </p>
          <div id="features" className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-lg font-medium text-slate-100">Modern App Router</h2>
              <p className="mt-2 text-sm text-slate-300">
                Organized `src/app` structure for scalable routing and layouts.
              </p>
            </article>
            <article className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
              <h2 className="text-lg font-medium text-slate-100">Testing Ready</h2>
              <p className="mt-2 text-sm text-slate-300">
                Vitest and Testing Library configured for unit tests.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
