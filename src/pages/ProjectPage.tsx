import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useProject } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { Skeleton } from "@/components/ui/skeleton";
import { PortableText } from "@/components/PortableText";

export default function ProjectPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const { project, isLoading, error } = useProject(projectSlug || "");

  // Loading state
  if (isLoading) {
    return (
      <div className="container py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="mb-8">
          <Skeleton className="h-[400px] w-full rounded-lg" />
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-10 w-1/4" />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 rounded-full" />
            ))}
        </div>

        <div className="space-y-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className="container py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">Project Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          {error
            ? "An error occurred while loading the project."
            : "The project you're looking for doesn't exist or has been moved."}
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Link
        to="/"
        className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <div className="mb-8 overflow-hidden rounded-lg">
        <img
          src={urlFor(project.mainImage).width(1200).height(600).url()}
          alt={project.title}
          className="w-full object-cover"
        />
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold md:text-4xl">{project.title}</h1>

        <div className="flex gap-4">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
          )}

          {project.liveUrl && (
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-secondary px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="prose max-w-none dark:prose-invert">
        {/* This is a simple rendering of the description */}
        <p className="mb-4 text-lg">{project.description}</p>

        {/* Render full content using Portable Text */}
        {project.fullDescription && (
          <div className="mt-8">
            <PortableText value={project.fullDescription} />
          </div>
        )}
      </div>
    </div>
  );
}
