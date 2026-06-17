import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b-2 border-purple-700 bg-mauve-900 px-4 text-white shadow-none transition-colors sm:h-20 sm:px-8 lg:px-12">
      {/* Hamburger Menu */}
      <button
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
  );
}
