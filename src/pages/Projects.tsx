import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/TextScramble";

const projectsData = [
  {
    title: "Portfolio Personal",
    status: "ACTIVO",
    description:
      "Mi propio espacio digital para mostrar mi trayectoria y proyectos. Construido con tecnologías web modernas, enfocado en un diseño limpio y una experiencia de usuario fluida.",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite", "Three.js"],
    link: "https://github.com/Konki29/konki-port",
  },
  {
    title: "Stand de eSports para Fnatic",
    status: "COMPLETADO",
    description:
      "Colaboración en el montaje del stand para la LEC Roadtrip en Madrid. Mis\u00A0responsabilidades incluyeron la instalación de hardware, configuración de equipos y la interacción técnica con el equipo de Fnatic.",
    tags: ["Hardware", "Networking", "Soporte Técnico", "Inglés Avanzado"],
  },

  {
    title: "sanchoGPT(nanoGPT)",
    status: "COMPLETADO",
    description:
      "Creación de un modelo basado en nanoGPT para entrenar una IA que pueda generar texto al estilo de cervantes.",
    tags: ["IA", "Python", "Machine Learning", "Deep Learning", "nanoGPT"],
    link: "https://github.com/Konki29/sanchoGPT",
  },
];

export function ProjectsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-12 animate-in fade-in duration-700">
        <p className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          SISTEMA · PROYECTOS
        </p>
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">
          <TextScramble text="Proyectos de Sistema" speed={40} />
        </h1>
        <p className="text-sm font-mono text-muted-foreground mt-3 max-w-2xl mx-auto">
          Una selección de proyectos donde he aplicado mis conocimientos en
          robótica, desarrollo y más.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-16 duration-700">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold">[ {project.title} ]</CardTitle>
                <Badge variant={project.status === "ACTIVO" ? "default" : "outline"}
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="pt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="grow" />
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              {project.link && <Button variant="default" size="sm" asChild><a href={project.link} target="_blank" rel="noopener noreferrer">Ver más</a></Button>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}