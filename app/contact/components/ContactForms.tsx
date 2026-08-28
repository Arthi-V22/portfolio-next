"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailto = `mailto:arthi2262004@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-14 max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something
            <span className="text-cyan-400"> meaningful.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a project idea, job opportunity, or simply want to connect?
            Feel free to send me a message.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">

            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contact Information
            </p>

            <div className="space-y-7">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-cyan-400">
                  @
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:arthi22@gmail.com"
                    className="mt-1 block text-white transition hover:text-cyan-400"
                  >
                    arthi22@gmail.com
                  </a>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-cyan-400">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <a
                    href="tel:+919984438919"
                    className="mt-1 block text-white transition hover:text-cyan-400"
                  >
                    +91 99844 38919
                  </a>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-cyan-400">
                  ●
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-white">
                    Kanyakumari, Tamil Nadu
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-10 border-t border-slate-800 pt-8">

              <p className="mb-4 text-sm text-slate-500">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="#"
                  className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Behance
                </a>

                <a
                  href="#"
                  className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">

            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Send a Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}