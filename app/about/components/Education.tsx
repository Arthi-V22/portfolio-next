export default function Education() {
  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Education
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Academic Background
        </h2>

        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/60 p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">
                B.Tech – Artificial Intelligence and Data Science
              </h3>

              <p className="mt-2 text-slate-400">
                Arunachala College of Engineering for Women
              </p>

              <p className="mt-1 text-slate-400">
                Nagercoil
              </p>
            </div>

            <span className="h-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
              2022 – 2026
            </span>
          </div>

          <div className="mt-6 border-t border-slate-700 pt-6">
            <p className="text-slate-300">
              My academic journey has given me a strong foundation in
              programming, databases, software development, data structures
              and modern technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}