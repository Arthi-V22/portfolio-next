import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-20 text-white sm:py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Full Stack Developer
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Building digital experiences that
            <span className="text-cyan-400"> work beautifully.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I&apos;m Arthi V., a developer focused on creating responsive,
            user-friendly and scalable web applications using modern
            technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View My Work
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[480px] w-full max-w-[370px] sm:h-[450px] sm:max-w-[400px]">
            <div className="absolute inset-0 rounded-[2rem] border border-slate-700 bg-slate-900/80 shadow-2xl" />

            <div className="absolute left-2 top-6 z-20 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl sm:-left-5 sm:top-12 sm:px-5">
              <p className="text-xs text-slate-400">Currently</p>

              <p className="text-sm font-semibold text-cyan-400 sm:text-base">
                Building & Learning
              </p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center px-8 pb-16 sm:px-10 sm:pb-0">
              <p className="mb-6 font-mono text-sm text-cyan-400">
                &lt;developer /&gt;
              </p>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Code.
                <br />
                Create.
                <br />
                Improve.
              </h2>

              <div className="mt-8 h-px w-full bg-slate-700" />

              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                Turning ideas into clean, responsive and meaningful web
                experiences.
              </p>
            </div>

            <div className="absolute bottom-3 left-1/2 z-20 w-[calc(100%-32px)] -translate-x-1/2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 shadow-xl sm:-bottom-5 sm:left-auto sm:right-5 sm:w-auto sm:translate-x-0 sm:px-5">
              <p className="text-xs text-slate-400">Focus</p>

              <p className="text-sm font-semibold text-white sm:text-base">
                Web Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}