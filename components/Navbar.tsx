import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function NavBar() {
  return (
    <nav className="flex h-20 items-center justify-between px-12  transition-colors bg-mauve-900 text-white shadow-none border-b-2 border-purple-700 sticky top-0 z-50">
      {/* Hamburger Menu */}
      <button
        className="rounded-full p-2 transition-colors hover:cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-700"
        aria-label="Abrir menu"
      >
        <Menu size={24} />
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold tracking-wide">Portfólio</h1>

      {/* Theme Toggle */}
      <ThemeToggle />
    </nav>
  );
}
