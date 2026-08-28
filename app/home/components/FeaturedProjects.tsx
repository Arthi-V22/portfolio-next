import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-100 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-cyan-400">
          
          <div className="grid gap-10 px-8 py-12 md:px-14 md:py-16 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-900/60">
                My Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Learn. Build. Solve. Grow.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-900/70">
                I believe the best way to improve as a developer is to
                continuously learn, build real projects and solve practical
                problems. My goal is to create applications that are simple,
                responsive and useful.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/about"
                className="w-full rounded-full bg-slate-950 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                More About Me
              </Link>

              <Link
                href="/contact"
                className="w-full rounded-full border-2 border-slate-950 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white sm:w-auto"
              >
                Start a Conversation
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}