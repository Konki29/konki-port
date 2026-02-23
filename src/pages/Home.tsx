
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import RobotCanvas from "@/components/3d/RobotCanvas";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function HomePage() {
  return (
    <div className="w-full px-8 grow flex flex-col justify-center">
      <section className="w-full max-w-2xl mx-auto flex justify-center py-4 animate-in fade-in slide-in-from-top-12 duration-700">
        <RobotCanvas />
      </section>

      {/* SECCIÓN SUPERIOR: Foto */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 w-full max-w-2xl mx-auto">

        <div className="text-center md:text-left animate-in fade-in slide-in-from-top-12 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter whitespace-nowrap">
            Carlos Valladares
          </h1>
          <p className="text-lg text-muted-foreground mt-3">
            Ingeniero en Robótica (Developer / Artista)
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

      {/* SECCIÓN "WORK" */}
      <section className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-top-16 duration-700">

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
            <a href="/CV_Carlos-Valladares.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Descargar CV
            </a>
          </Button>
        </div>

      </section>

      {/* SECCIÓN EXPERIENCIA */}
      <section className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-top-20 duration-700 ">

        <h2 className="mt-16 mb-4 text-sm font-semibold tracking-widest uppercase text-muted-foreground underline underline-offset-4">
          Experiencia
        </h2>

        <div className="pl-4 space-y-6">

          {/* Prácticas en la USC */}
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-foreground">
                USC — Investigador en Prácticas (I+D)
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                Feb. – Jun. 2025
              </span>
            </div>

            <p className="text-muted-foreground mt-1">
              Contrato de prácticas en la{" "}
              <strong className="text-foreground">Universidad de Santiago de Compostela</strong>.
              Participación en estudio biomecánico para el desarrollo de modelos de fatiga muscular,
              adquisición y procesamiento de bioseñales mediante sensores{" "}
              <strong className="text-foreground">EMG</strong> y captura de datos de movimiento con
              sensores inerciales (<strong className="text-foreground">IMUs</strong>).
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Python · MATLAB · Sensores Biomédicos · Procesamiento de Señales
            </p>
          </div>

          {/* Fnatic */}
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-foreground">
                Fnatic
              </h3>
              <span className="text-sm text-muted-foreground">
                Abril 2025
              </span>
            </div>

            <p className="text-muted-foreground mt-1">
              Montaje del Stand de eSports en la <a
                href="https://lolesports.com/es-ES/news/introducing-lec-roadtrip"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-destructive hover:underline underline-offset-4"
              >
                LEC Roadtrip
              </a> de Madrid 2025, incluyendo
              instalación de hardware, configuración e interacción con el equipo de Fnatic en inglés.
            </p>
          </div>

        </div>

      </section>

      {/* SECCIÓN DE CONTACTO */}
      <section className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-top-20 duration-700 delay-200">

        <h2 className="mt-16 mb-4 text-sm font-semibold tracking-widest uppercase text-muted-foreground underline underline-offset-4">
          Contacto
        </h2>

        <div className="flex justify-start gap-4 pl-4">

          <Button asChild size="default" variant="outline">
            <a href="mailto:carlosraulva2010@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>

          <Button asChild size="default" variant="outline">
            <a href="https://github.com/Konki29" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>

          <Button asChild size="default" variant="outline">
            <a href="https://www.linkedin.com/in/carlos-v-892720354/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>

        </div>
      </section>



    </div>
  );
}