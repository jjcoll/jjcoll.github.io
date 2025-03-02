import React from "react";
import { PortableText as SanityPortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

// Define components for the Portable Text renderer
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 overflow-hidden rounded-lg">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            className="w-full"
          />
          {value.caption && (
            <div className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
        <pre className="my-6 overflow-x-auto rounded-lg bg-secondary p-4 text-sm">
          {value.filename && (
            <div className="mb-2 text-xs text-muted-foreground">
              {value.filename}
            </div>
          )}
          <code>{value.code}</code>
        </pre>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={rel ? "_blank" : undefined}
          className="text-primary underline hover:text-primary/80"
        >
          {children}
        </a>
      );
    },
    code: ({ children }: any) => {
      return (
        <code className="rounded bg-secondary px-1 py-0.5 font-mono text-sm">
          {children}
        </code>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mt-6 mb-2 text-lg font-bold tracking-tight">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
};

interface PortableTextProps {
  value: any;
}

export const PortableText: React.FC<PortableTextProps> = ({ value }) => {
  if (!value) {
    return null;
  }

  return <SanityPortableText value={value} components={components} />;
};
