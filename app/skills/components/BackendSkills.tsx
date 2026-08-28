export default function BackendSkills() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-cyan-400" />

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            02 / Backend
          </p>
        </div>

        <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Backend & Database
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I have experience working with Java and Spring Boot for
              backend development and SQL for managing application data.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-[#07111f] p-7 transition hover:border-cyan-400">
              <p className="text-sm text-cyan-400">01</p>

              <h3 className="mt-5 text-2xl font-semibold">
                Java
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Developing application logic and object-oriented
                programs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#07111f] p-7 transition hover:border-cyan-400">
              <p className="text-sm text-cyan-400">02</p>

              <h3 className="mt-5 text-2xl font-semibold">
                Spring Boot
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Building backend applications and REST APIs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#07111f] p-7 transition hover:border-cyan-400 sm:col-span-2">
              <p className="text-sm text-cyan-400">03</p>

              <h3 className="mt-5 text-2xl font-semibold">
                SQL
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Working with relational databases, queries and
                application data.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}