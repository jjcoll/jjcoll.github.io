import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkExperienceProps {
  title: string;
  company: string;
  companyUrl?: string;
  logoUrl?: string;
  location?: string;
  period: {
    from: string;
    to: string;
  };
  description: string;
  skills?: string[];
  className?: string;
}

export function WorkExperienceItem({
  title,
  company,
  companyUrl,
  logoUrl,
  location,
  period,
  description,
  skills,
  className,
}: WorkExperienceProps) {
  return (
    <div
      className={cn("group relative mb-12 rounded-lg border p-6", className)}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
            <img src={logoUrl} alt="" className="rounded-lg" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center text-muted-foreground">
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary"
                >
                  {company}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              ) : (
                <span>{company}</span>
              )}
              {location && <span className="ml-2">· {location}</span>}
            </div>
          </div>
        </div>
        <div className="font-mono text-sm text-muted-foreground">
          {period.from} - {period.to}
        </div>
      </div>
      <p className="mb-4 text-muted-foreground">{description}</p>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function WorkExperience() {
  const experiences = [
    {
      title: "Lead Software Developer",
      company: "WeSMILE",
      companyUrl: "https://wesmilebooth.nl",
      logoUrl: "/wesmile.png",
      period: { from: "Nov 2024", to: "Present" },
      location: "Amsterdam, Netherlands",
      description:
        "Leading the development of an AI-powered photobooth application, implementing robust error handling, event mode features, and improving storage systems. Responsible for CI/CD pipelines, Google Drive integration, and designing software architecture to ensure reliability during live events.",
      skills: [
        "TypeScript",
        "Vue.js",
        "Electron",
        "Firebase",
        "Google Cloud",
        "CI/CD",
        "Error Handling",
        "System Architecture",
      ],
    },
  ];

  return (
    <section className="py-12" id="work">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary">1. Work</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <WorkExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
