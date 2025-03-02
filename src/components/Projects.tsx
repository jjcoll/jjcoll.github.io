import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useProjects } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanity";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectCard: React.FC<{
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}> = ({ title, description, slug, imageUrl }) => {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Link
          to={`/project/${slug}`}
          className="font-mono text-sm text-primary hover:underline flex items-center"
        >
          View project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const ProjectCardSkeleton = () => (
  <div className="overflow-hidden rounded-lg border">
    <Skeleton className="aspect-video w-full" />
    <div className="p-6">
      <Skeleton className="mb-2 h-6 w-2/3" />
      <Skeleton className="mb-4 h-20 w-full" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  </div>
);

export function Projects() {
  const { projects, isLoading, error } = useProjects();

  return (
    <section className="py-12" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary">0. Projects</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        {error && (
          <p className="text-destructive">
            There was an error loading projects. Please try again later.
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? // Display skeletons while loading
              Array(3)
                .fill(0)
                .map((_, index) => <ProjectCardSkeleton key={index} />)
            : // Display actual projects
              projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  description={project.description}
                  slug={project.slug.current}
                  imageUrl={urlFor(project.mainImage)
                    .width(800)
                    .height(450)
                    .url()}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
