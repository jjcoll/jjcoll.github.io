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
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border bg-background overflow-hidden">
            <img src={logoUrl} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-2">
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
              {location && (
                <span className="hidden sm:inline">·</span>
              )}
              {location && <span>{location}</span>}
            </div>
          </div>
        </div>
        <div className="font-mono text-sm text-muted-foreground whitespace-nowrap">
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
        "Developing and maintaining web and desktop applications, handling both frontend and backend development. Managing feature development, system maintenance, and deployment processes while working across multiple platforms and technologies.",
      skills: [
        "Problem Solving",
        "Startup",
        "TypeScript",
        "Vue.js",
        "Electron",
        "Firebase",
        "Google Cloud",
        "CI/CD",
        "System Architecture",
        "React",
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
