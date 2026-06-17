'use client'
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import DigitandoTexto from "./DigitandoTexto";

export default function HeroSection() {
  return (
    <section id="topo" className="flex min-h-[60dvh] w-full flex-col-reverse items-center justify-center gap-10 px-4 py-12 md:flex-row md:justify-around md:px-6 md:py-0">
      {/* Left: Text + Buttons */}
      <div className="flex flex-col items-center gap-8 md:items-start">
        <DigitandoTexto />

        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          {/* Download CV */}
          <a
            href="/cv-lucas-amaral.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 sm:px-6 sm:py-3 sm:text-base"
          >
            <Download size={18} />
            Download CV
          </a>

          {/* Contato */}
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border-2 border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-purple-500 hover:text-purple-500 dark:border-stone-500 dark:text-stone-200 dark:hover:border-purple-400 dark:hover:text-purple-400 sm:px-6 sm:py-3 sm:text-base"
          >
            <Mail size={18} />
            Entrar em contato
          </a>
        </div>
      </div>

      {/* Right: Avatar */}
      <div className="flex-shrink-0">
        <img
          src="eu.png"
          alt="Lucas Amaral"
          className="w-[200px] rounded-full border-[8px] border-purple-500 sm:w-[320px] sm:border-[12px] md:w-[400px] md:border-[16px] lg:w-[460px]"
        />
      </div>
    </section>
  );
}
