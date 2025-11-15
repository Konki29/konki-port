import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react"; 
import robotSvgUrl from "@/assets/robot.svg";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function HomePage() {
  return (
    <div className="w-full px-8 grow flex flex-col justify-center">
      <section className="w-full max-w-lg mx-auto flex justify-center py-12 animate-in fade-in slide-in-from-top-12 duration-700">
        <img src={robotSvgUrl} alt="Brazo robótico" className="w-48 h-48" />
      </section>

      {/* SECCIÓN SUPERIOR: Foto (Esta se queda como la tienes) */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 w-full max-w-lg mx-auto">
        
        <div className="text-center md:text-left animate-in fade-in slide-in-from-top-12 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter whitespace-nowrap"> 
            Carlos Valladares
          </h1>
          <p className="text-lg text-muted-foreground mt-3">
            Técnico en Robótica (Developer / Artista)
          </p>
        </div> 

        <div className="shrink-0 flex justify-center animate-in fade-in slide-in-from-right-12 duration-700">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img 
              src="/face.jpg"
              alt="Carlos Valladares" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </div> 

      </section>

      {/* SECCIÓN "WORK": (Esta se queda como la tienes) */}
      <section className="w-full max-w-lg mx-auto animate-in fade-in slide-in-from-top-16 duration-700">
        
        <h2 className="mt-8 mb-4 text-sm font-semibold tracking-widest uppercase text-muted-foreground underline underline-offset-4">
          Perfil Profesional
        </h2>

        <p className="text-lg text-muted-foreground mb-8 indent-8 text-justify">
          Estudié el grado de Robótica en la <strong className="text-foreground">USC</strong>, 
          donde adquirí aptitudes en sistemas autónomos, visión artificial y desarrollo 
          de hardware. Aquí puedes ver los proyectos donde aplico esos conocimientos.
        </p>
        
        <div className="flex justify-start gap-4"> 
          <Button asChild size="default"> 
            <Link to="/proyectos">
              Ver mis proyectos
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="default" variant="outline">
            {/* 3. 'href' apunta al PDF en 'public'.
                4. 'download' le dice al navegador que lo descargue.
            */}
            <a href="/CarlosRaulValladares_CV.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Descargar CV
            </a>
          </Button>
        </div>

      </section>

      {/* SECCIÓN EXPERIENCIA: (¡AQUÍ ESTÁN LOS CAMBIOS!) */}
      <section className="w-full max-w-lg mx-auto animate-in fade-in slide-in-from-top-20 duration-700 ">
        
        <h2 className="mt-16 mb-4 text-sm font-semibold tracking-widest uppercase text-muted-foreground underline underline-offset-4">
          Experiencia
        </h2>

        <div className="pl-4">
          <div className="flex justify-between items-baseline">
            
            {/* 1. "Fnatic" ya no es un enlace */}
            <h3 className="text-lg font-semibold text-foreground">
              Fnatic
            </h3>
            
            <span className="text-sm text-muted-foreground">
              Abril 2025
            </span>
          </div>

          {/* 2. El enlace ahora está aquí, en "LEC Roadtrip" */}
          <p className="text-muted-foreground">
            Montaje del Stand de eSports en la <a 
              href="https://lolesports.com/es-ES/news/introducing-lec-roadtrip" 
              target="_blank" 
              rel="noopener noreferrer"
              // 3. Clases para el color rojo y el subrayado en hover
              className="font-semibold text-destructive hover:underline underline-offset-4"
            >
              LEC Roadtrip
            </a> de Madrid 2025, incluyendo
            instalación de hardware, configuración e interacion con el equipo de Fnatic en inglés.
          </p>
        </div>

      </section>

      {/* --- ¡NUEVA SECCIÓN DE CONTACTO! --- */}
      <section className="w-full max-w-lg mx-auto animate-in fade-in slide-in-from-top-20 duration-700 delay-200">
        
        <h2 className="mt-16 mb-4 text-sm font-semibold tracking-widest uppercase text-muted-foreground underline underline-offset-4">
          Contacto
        </h2>

        {/* 3. He movido el botón de Email aquí y he añadido GitHub y LinkedIn */}
        <div className="flex justify-start gap-4 pl-4"> 
          
          <Button asChild size="default" variant="outline">
            <a href="mailto:carlosraulva2010@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>

          <Button asChild size="default" variant="outline">
            {/* Usamos la URL de tu repo de GitHub que me pasaste antes */}
            <a href="https://github.com/Konki29" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>

          <Button asChild size="default" variant="outline">
            {/* ¡Recuerda cambiar 'tu-usuario' por tu URL de LinkedIn! */}
            <a href="https://www.linkedin.com/in/carlos-valladares-892720354/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>

        </div>
      </section>



    </div>
  );
}