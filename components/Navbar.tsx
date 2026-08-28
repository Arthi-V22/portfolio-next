"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certificates & Courses", href: "/certificate" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        <Link
          href="/home"
          className="text-xl font-bold tracking-tight text-white"
          onClick={() => setIsOpen(false)}
        >
          ARTHI<span className="text-cyan-400">.</span>
        </Link>

  
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}

        </div>

  
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>

      </nav>

   
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">

          <div className="flex flex-col">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-800 py-4 text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>
      )}

    </header>
  );
}