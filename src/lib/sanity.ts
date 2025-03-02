import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Initialize the Sanity client
export const client = createClient({
  projectId: "divxsuit", // Replace with your Sanity project ID
  dataset: "production",
  useCdn: true, // Use the Content Delivery Network for faster image loading
  apiVersion: "2023-05-03", // Use the current date in YYYY-MM-DD format
});

// Set up image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs from Sanity images
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Type definition for projects
export interface SanityProject {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  fullDescription: any[]; // Portable Text format
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  publishedAt: string;
}

// Fetch all projects
export async function getProjects(): Promise<SanityProject[]> {
  return await client.fetch(`
    *[_type == "project"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      description,
      technologies,
      githubUrl,
      liveUrl,
      publishedAt
    }
  `);
}

// Fetch a single project by slug
export async function getProjectBySlug(slug: string): Promise<SanityProject> {
  return await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      description,
      fullDescription,
      technologies,
      githubUrl,
      liveUrl,
      publishedAt
    }
  `,
    { slug }
  );
}
