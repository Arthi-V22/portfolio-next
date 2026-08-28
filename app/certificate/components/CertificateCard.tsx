import Link from "next/link";
import { certificates } from "../../data/certificates";

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

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
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
              key={certificate.slug}
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

              {/* View Certificate */}
              <Link
                href={
                  certificate.file
                    ? certificate.file
                    : `/certificates/${certificate.slug}`
                }
                target={certificate.file ? "_blank" : undefined}
                rel={certificate.file ? "noopener noreferrer" : undefined}
                className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Certificate
                <span className="text-cyan-400">↗</span>
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
