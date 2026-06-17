"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/store/useTheme";

export default function ThemeToggle() {
  const theme = useTheme((s) => s.theme);
  const toggle = useTheme((s) => s.toggle);
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      className="relative flex h-7 w-14 items-center rounded-full bg-stone-300 transition-colors hover:bg-stone-400 dark:bg-stone-500 dark:hover:bg-stone-400"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {/* Sun (left) and Moon (right) icons */}
      <span className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun
          size={13}
          className={isDark ? "text-stone-200" : "text-yellow-500"}
        />
        <Moon
          size={13}
          className={isDark ? "text-white" : "text-stone-600"}
        />
      </span>

      {/* Sliding thumb */}
      <span
        className={`relative z-10 ml-0.5 flex h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
}
