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
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-12 animate-in fade-in duration-700">
        <p className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          {t.projects.systemProjects}
        </p>
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">
          <TextScramble text={t.projects.title} speed={40} />
        </h1>
        <p className="text-sm font-mono text-muted-foreground mt-3 max-w-2xl mx-auto">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-16 duration-700">
        {t.projects.list.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold">[ {project.title} ]</CardTitle>
                <Badge variant={project.status === "ACTIVO" || project.status === "ACTIVE" ? "default" : "outline"}
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
              {project.link && (
                <Button variant="default" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t.projects.viewMore}
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}