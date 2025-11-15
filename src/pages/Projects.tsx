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

// 1. Definimos los datos de los proyectos en un array.
// Así es más fácil añadir, quitar o modificar proyectos en el futuro.
const projectsData = [
  {
    title: "Portfolio Personal",
    status: "Working on it",
    description:
      "Mi propio espacio digital para mostrar mi trayectoria y proyectos. Construido con tecnologías web modernas, enfocado en un diseño limpio y una experiencia de usuario fluida.",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
    link: "https://github.com/Konki29/konki-port", 
  },
  {
    title: "Stand de eSports para Fnatic",
    status: "Abril 2025",
    description:
      "Colaboración en el montaje del stand para la LEC Roadtrip en Madrid. Mis\u00A0responsabilidades incluyeron la instalación de hardware, configuración de equipos y la interacción técnica con el equipo de Fnatic.",
    tags: ["Hardware", "Networking", "Soporte Técnico","Inglés Avanzado"],
  },
  // Puedes añadir más proyectos aquí en el futuro
  // {
  //   title: "Otro Proyecto",
  //   status: "Finalizado",
  //   description: "Descripción de otro de tus increíbles proyectos.",
  //   tags: ["Python", "Visión Artificial"],
  //   link: "#"
  // },
];

export function ProjectsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-12 animate-in fade-in duration-700">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Proyectos 
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          Una selección de trabajos donde he aplicado mis conocimientos en
          robótica, desarrollo y más.
        </p>
      </div>

      {/* 2. Usamos un grid para mostrar las tarjetas de proyecto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-16 duration-700">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                {/* 1. CORRECCIÓN: El componente Badge espera un 'variant' específico.
                    Aquí nos aseguramos de que el valor sea 'default' u 'outline',
                    que son los que Badge espera, y no un booleano.
                */}
                <Badge variant={project.status === "En curso" ? "default" : "outline"}
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="pt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="grow" /> {/* Para empujar el footer hacia abajo */}
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              {/* 2. CORRECCIÓN: El componente Button con 'asChild' espera un único
                  hijo que sea un componente de React válido, no una etiqueta <a>.
                  Al quitar 'asChild', el botón funcionará como un enlace por sí mismo.
              */}
              {project.link && <Button variant="default" size="sm" asChild><a href={project.link} target="_blank" rel="noopener noreferrer">Ver más</a></Button>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}