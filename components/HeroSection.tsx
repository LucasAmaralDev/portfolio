'use client'
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import DigitandoTexto from "./DigitandoTexto";

export default function HeroSection() {
  return (
    <section className="flex h-[670px] w-full items-center justify-around px-6">
      {/* Left: Text + Buttons */}
      <div className="flex flex-col gap-8">
        <DigitandoTexto />

        <div className="flex gap-4">
          {/* Download CV */}
          <a
            href="/cv-lucas-amaral.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <Download size={18} />
            Download CV
          </a>

          {/* Contato */}
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border-2 border-stone-400 px-6 py-3 font-medium text-stone-700 transition-colors hover:border-purple-500 hover:text-purple-500 dark:border-stone-500 dark:text-stone-200 dark:hover:border-purple-400 dark:hover:text-purple-400"
          >
            <Mail size={18} />
            Entrar em contato
          </a>
        </div>
      </div>

      {/* Right: Avatar */}
      <div>
        <img
          src="eu.png"
          alt="Lucas Amaral"
          className="w-[460px] rounded-full border-[16px] border-purple-500"
        />
      </div>
    </section>
  );
}
