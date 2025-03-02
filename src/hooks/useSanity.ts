import { useState, useEffect } from "react";
import { SanityProject, getProjects, getProjectBySlug } from "@/lib/sanity";

// Hook for fetching all projects
export function useProjects() {
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("An error occurred while fetching projects")
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
}

// Hook for fetching a single project by slug
export function useProject(slug: string) {
  const [project, setProject] = useState<SanityProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProject() {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("An error occurred while fetching the project")
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  return { project, isLoading, error };
}
