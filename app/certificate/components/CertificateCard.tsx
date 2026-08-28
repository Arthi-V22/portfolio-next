const certificates = [
  {
    title: "Full Stack Java Development with UI/UX Design",
    organization: "Alo Educational Hub",
    date: "Jan 2026 – Jul 2026",
    description:
      "Professional training in Full Stack Java Development and UI/UX Design with hands-on experience in Java, web technologies, MySQL and design tools.",
    file: "/certificates/full-stack-java.pdf",
  },
  {
    title: "Workshop Certificate",
    organization: "Keltron",
    date: "2026",
    description:
      "Participated in a technical workshop conducted by Keltron and gained exposure to industry-oriented technical concepts.",
    file: null,
  },
  {
    title: "C & Java Training Internship Program",
    organization: "Arunachala NextGen Solution Pvt. Ltd.",
    date: "2025",
    description:
      "Completed practical training in C and Java programming with hands-on learning in programming fundamentals and application development.",
    file: null,
  },
  {
    title: "UI/UX Design",
    organization: "Arunachala Technology",
    date: "2024",
    description:
      "Completed UI/UX Design training with practical experience in interface design, wireframing, prototyping and user-centered design.",
    file: null,
  },
  {
    title: "UI/UX Design Internship",
    organization: "AK INFOPARK",
    date: "2023",
    description:
      "Completed an internship focused on creating user-friendly wireframes, prototypes and responsive interfaces using Figma.",
    file: null,
  },
  {
    title: "Higher Diploma in Computer Applications",
    organization: "CSC",
    date: "2022",
    description:
      "Completed the Higher Diploma in Computer Applications, gaining foundational knowledge in computer applications and software tools.",
    file: null,
  },
];

export default function CertificateCard() {
  return (
    <section className="relative overflow-hidden px-6 py-24">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-14 max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Achievements
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Certificates &
            <span className="text-cyan-400"> Achievements.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            A collection of certifications, internships and technical
            achievements that reflect my learning and professional growth.
          </p>

        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-7 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >

              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition duration-300 group-hover:bg-cyan-400/10" />

              <div className="relative mb-8 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-xl text-cyan-400">
                  ✦
                </div>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-400">
                  {certificate.date}
                </span>

              </div>

              <div className="relative flex-1">

                <h3 className="text-xl font-semibold leading-snug text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-cyan-400">
                  {certificate.organization}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {certificate.description}
                </p>

              </div>

             
              {certificate.file ? (
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  View Certificate
                  <span className="text-cyan-400">↗</span>
                </a>
              ) : (
                <span className="relative mt-8 inline-flex w-fit items-center rounded-full border border-slate-800 px-5 py-2.5 text-sm text-slate-500">
                  Certificate Available
                </span>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}