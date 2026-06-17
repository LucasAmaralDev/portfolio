"use client";

import { Briefcase, Code2, Home, Mail, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const secoes = [
  { id: "topo", label: "Início", icone: Home },
  { id: "sobre-mim", label: "Sobre mim", icone: User },
  { id: "experiencia", label: "Experiência", icone: Briefcase },
  { id: "projetos", label: "Projetos", icone: Code2 },
  { id: "contato", label: "Contato", icone: Mail },
];

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu ao pressionar Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuAberto(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuAberto]);

  function scrollPara(id: string) {
    setMenuAberto(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b-2 border-purple-700 bg-mauve-900 px-4 text-white shadow-none transition-colors sm:h-20 sm:px-8 lg:px-12">
        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuAberto(true)}
          className="rounded-full p-2 transition-colors hover:cursor-pointer hover:bg-white/10"
          aria-label="Abrir menu"
        >
          <Menu size={20} className="sm:size-6" />
        </button>

        {/* Title */}
        <h1 className="text-lg font-semibold tracking-wide sm:text-2xl">Portfólio</h1>

        {/* Theme Toggle */}
        <ThemeToggle />
      </nav>

      {/* Overlay */}
      {menuAberto && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuAberto(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-[70] w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-mauve-900 dark:shadow-black/40 ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4 dark:border-stone-700">
          <span className="text-lg font-semibold text-stone-800 dark:text-white">
            Navegação
          </span>
          <button
            onClick={() => setMenuAberto(false)}
            className="rounded-full p-1.5 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Lista de seções */}
        <nav className="flex flex-col gap-1 px-3 py-4">
          {secoes.map(({ id, label, icone: Icone }) => (
            <button
              key={id}
              onClick={() => scrollPara(id)}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-stone-700 transition-colors hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-white/10"
            >
              <Icone size={20} className="text-purple-500" />
              <span className="text-base font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
