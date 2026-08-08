"use client";

import { useState } from "react";
import { navLinks, negocio } from "@/lib/data";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-vg-black/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-heading text-xl font-bold tracking-tight text-foreground"
          onClick={() => setMenuAbierto(false)}
        >
          Vital<span className="text-vg-red">Gym</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-vg-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={negocio.urlApp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-md bg-vg-red px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 md:inline-block"
        >
          Inscríbete
        </a>

        <button
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded={menuAbierto}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${
              menuAbierto ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity ${
              menuAbierto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${
              menuAbierto ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuAbierto && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-vg-black px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-vg-red"
                onClick={() => setMenuAbierto(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={negocio.urlApp}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md bg-vg-red px-5 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMenuAbierto(false)}
            >
              Inscríbete
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
