
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveRight, Github, Linkedin, Mail, Download } from "lucide-react";
import RobotCanvas from "@/components/3d/RobotCanvas";
import { TextScramble } from "@/components/TextScramble";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full px-8 grow flex flex-col justify-center">
      <section className="w-full max-w-2xl mx-auto flex justify-center py-4 animate-in fade-in slide-in-from-top-12 duration-700">
        <RobotCanvas />
      </section>

      {/* ════ HERO ════ */}
      <section className="flex flex-col items-center text-center py-16 w-full max-w-2xl mx-auto">

        <div className="animate-in fade-in slide-in-from-top-12 duration-700">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            <TextScramble text={t.home.name} speed={45} />
          </h1>
          <p className="text-sm font-mono text-primary mt-3 tracking-wider uppercase">
            <TextScramble text={t.home.roleSub} speed={30} delay={800} />
          </p>
        </div>

      </section>

      {/* ════ SOBRE MÍ ════ */}
      <section className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-top-16 duration-700">

        <h2 className="mt-8 mb-6 text-lg font-serif font-semibold text-primary tracking-wide">
          {t.home.aboutTitle}
        </h2>

        <div className="space-y-4 border-l border-primary/20 pl-6">
          <p 
            className="text-sm text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.home.aboutP1 }}
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.home.aboutP2}
          </p>
        </div>

        <div className="flex justify-start gap-4 mt-8">
          <Button asChild size="default">
            <Link to="/proyectos">
              {t.home.btnProjects}
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="default" variant="outline">
            <a href={t.home.cvUrl} download>
              <Download className="mr-2 h-4 w-4" /> {t.home.btnCV}
            </a>
          </Button>
        </div>

      </section>

      {/* ════ EXPERIENCIA ════ */}
      <section className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-top-20 duration-700 ">

        <h2 className="mt-16 mb-6 text-lg font-serif font-semibold text-primary tracking-wide">
          {t.home.expTitle}
        </h2>

        <div className="pl-6 space-y-8 border-l border-primary/20">
          {t.experience.map((exp, index) => (
            <div key={index} className="relative pl-4">
              <div className="absolute -left-[calc(0.375rem+1px)] top-1.5 w-1.5 h-1.5 bg-primary" />
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-serif font-semibold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-4">
                  {exp.date}
                </span>
              </div>

              <p 
                className="text-sm text-muted-foreground mt-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: exp.description }}
              />
              
              {exp.technologies && (
                <p className="text-[10px] font-mono text-primary/60 mt-2 uppercase tracking-wider">
                  {exp.technologies}
                </p>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* ════ CONTACTO ════ */}
      <section className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-top-20 duration-700 delay-200 pb-16">

        <h2 className="mt-16 mb-6 text-lg font-serif font-semibold text-primary tracking-wide">
          {t.home.contactTitle}
        </h2>

        <div className="flex justify-start gap-4 pl-6">

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