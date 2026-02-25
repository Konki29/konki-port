import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import robotSvgUrl from "@/assets/robot.svg";

export function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="border-b border-primary/15 w-full bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto px-8 flex items-center justify-between p-4">

        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2.5"
        >
          <img
            src={robotSvgUrl}
            alt="Robot"
            className="w-7 h-7 opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert"
          />
          Carlos Valladares
        </Link>

        {/* Nav Links + Theme Toggle */}
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" className="font-mono text-xs uppercase tracking-[0.15em]">[ Inicio ]</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/proyectos" className="font-mono text-xs uppercase tracking-[0.15em]">[ Proyectos ]</Link>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="ml-2"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

      </div>
    </nav>
  );
}