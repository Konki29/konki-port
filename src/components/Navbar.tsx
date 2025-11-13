import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b w-full">
      <div className="w-full max-w-6xl mx-auto px-8 flex items-center justify-between p-4">
        
        <Link 
          to="/" 
          className="font-bold text-lg flex items-center gap-2"
        >
          {/* 1. 'span' es el "hitbox". Es un 'group'.
            2. 'p-2' crea un "colchón" invisible a su alrededor.
            3. '-m-2' es un truco de margen negativo para que ese 
               colchón extra no desplace tu nombre.
          */}
          <span className="group p-2 -m-2"> 
            {/* 4. El icono 'Bot' se anima cuando el 'group' (el hitbox) 
                 esté en hover.
            */}
            <Bot className="h-5 w-5 group-hover:animate-bounce" /> 
          </span>
          
          Carlos Valladares
        </Link>

        {/* --- Links de Navegación --- */}
        <div className="flex gap-4">
          <Button asChild variant="ghost">
            <Link to="/">Inicio</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/proyectos">Proyectos</Link>
          </Button>
        </div>
        
      </div>
    </nav>
  );
}