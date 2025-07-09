import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  program?: string;
  period: {
    from: string;
    to: string;
  };
  description: string;
  icon?: React.ReactNode;
}

const EducationCard: React.FC<{ education: EducationItem }> = ({
  education,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        {education.icon || <GraduationCap className="h-5 w-5" />}
      </div>

      <div>
        <h3 className="font-bold">{education.institution}</h3>
        <div className="mb-1 text-sm text-muted-foreground">
          {education.degree}{" "}
          {education.program && <span>• {education.program}</span>}
        </div>
        <div className="mb-2 font-mono text-xs text-muted-foreground">
          {education.period.from} - {education.period.to}
        </div>
        <p className="text-sm text-muted-foreground">{education.description}</p>
      </div>
    </div>
  );
};

export function About() {
  const educationItems: EducationItem[] = [
    {
      institution: "Fontys University of Applied Sciences",
      degree: "Bachelor of ICT",
      program: "Open Learning (Software Focus)",
      period: { from: "Feb 2024", to: "Should finish on Feb 2028" },
      description:
        "Enrolled in the Excellence programme called Delta, focusing on software development through the Open Learning path. The program emphasizes hands-on projects, industry collaboration, and self-directed learning.",
      icon: <BookOpen className="h-5 w-5" />,
    },
    // {
    //   institution: "Delta Excellence Program",
    //   degree: "Specialization",
    //   period: { from: "Feb 2024", to: "Present" },
    //   description:
    //     "Selected for the Delta Excellence Program, which offers advanced training and mentorship for promising ICT students. Participating in specialized workshops and collaborative projects with industry partners.",
    //   icon: <Award className="h-5 w-5" />,
    // },
  ];

  return (
    <section className="py-12" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary">3. About</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Jordi Coll, a software developer with a passion for solving
                real world challenges in the web application world. Currently I
                am studying in the Netherlands, and working on the side as a
                Software Developer at wesmile, I'm focused on building reliable
                applications that blend creativity with technical excellence.
              </p>
              <p>
                {" "}
                I have been into web development for a couple of years now. When
                I'm not coding, you can find me exploring business oportunities,
                like my{" "}
                <a className="underline text-black" href="https://pokerot.com">
                  pokerot
                </a>{" "}
                business or exploring the new AI trends! I am always open for a
                conversation about anything interesting that you might have
                going on.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Education</h3>
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <EducationCard key={index} education={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
