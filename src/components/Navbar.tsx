import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b border-primary/15 w-full bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto px-8 flex items-center justify-between p-4">

        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Carlos Valladares
        </Link>

        {/* Nav Links — wrapped in [ ] brackets */}
        <div className="flex gap-1">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" className="font-mono text-xs uppercase tracking-[0.15em]">[ Inicio ]</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/proyectos" className="font-mono text-xs uppercase tracking-[0.15em]">[ Proyectos ]</Link>
          </Button>
        </div>

      </div>
    </nav>
  );
}