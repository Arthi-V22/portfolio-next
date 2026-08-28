export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 text-white sm:px-10 lg:px-20">

  
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-cyan-400" />

          <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            About / 01
          </span>
        </div>

        <div className="mt-10 max-w-5xl">
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            I build
            <span className="text-slate-500"> digital</span>
            <br />
            experiences
            <span className="text-cyan-400"> that matter.</span>
          </h1>
        </div>

  
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_380px]">

        
          <div>
            <p className="max-w-3xl text-xl leading-9 text-slate-300">
              I'm Arthi V., a developer passionate about creating
              modern web applications that combine clean code,
              thoughtful design and a smooth user experience.
            </p>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-500">
              I work with technologies such as Java, React, Springboot,
              JavaScript and SQL. I enjoy taking an idea from its
              initial concept and turning it into a functional,
              responsive application.
            </p>

            <div className="mt-12">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Java",
                  "React",
                  "Javascript",
                  "Springboot",
                //   "Tailwind CSS",
                  "SQL",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="border border-slate-700 px-5 py-2.5
                               text-sm text-slate-300
                               transition duration-300
                               hover:border-cyan-400
                               hover:text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

         
          <div className="border border-slate-800 bg-[#0b1728]">

           
            <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />

              <span className="ml-auto text-xs text-slate-600">
                developer.js
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-8">

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">developer</span>{" "}
                =
              </p>

              <p className="pl-5">
                {"{"}
              </p>

              <p className="pl-10">
                <span className="text-slate-500">name:</span>{" "}
                <span className="text-green-400">
                  "Arthi V."
                </span>,
              </p>

              <p className="pl-10">
                <span className="text-slate-500">role:</span>{" "}
                <span className="text-green-400">
                  "Developer"
                </span>,
              </p>

              <p className="pl-10">
                <span className="text-slate-500">focus:</span>{" "}
                <span className="text-green-400">
                  "Web Development"
                </span>,
              </p>

              <p className="pl-10">
                <span className="text-slate-500">learning:</span>{" "}
                <span className="text-green-400">
                  true
                </span>,
              </p>

              <p className="pl-5">
                {"}"}
              </p>

            </div>
            <div className="border-t border-slate-800 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />

                <span className="text-sm text-slate-400">
                  Available for opportunities
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-20 grid border-y border-slate-800 sm:grid-cols-3">

          <div className="border-b border-slate-800 px-6 py-8 sm:border-b-0 sm:border-r">
            <p className="text-sm text-cyan-400">01</p>

            <h3 className="mt-4 text-xl font-semibold">
              Problem Solver
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              I approach challenges by breaking complex problems
              into simple and practical solutions.
            </p>
          </div>

          <div className="border-b border-slate-800 px-6 py-8 sm:border-b-0 sm:border-r">
            <p className="text-sm text-cyan-400">02</p>

            <h3 className="mt-4 text-xl font-semibold">
              User Focused
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              I care about creating interfaces that are intuitive,
              responsive and easy to use.
            </p>
          </div>

          <div className="px-6 py-8">
            <p className="text-sm text-cyan-400">03</p>

            <h3 className="mt-4 text-xl font-semibold">
              Always Learning
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              I continuously explore new technologies and improve
              my development skills through projects.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}