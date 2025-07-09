import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaMedium } from "react-icons/fa";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
    aria-label={label}
  >
    {icon}
  </a>
);

export function HeroSection() {
  return (
    <section className="container mx-auto max-w-6xl py-12 md:py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-center justify-between">
        <div className="flex flex-col space-y-4 md:w-3/5">
          <p className="font-mono text-sm text-primary">Hi, my name is:</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Jordi Coll
          </h1>
          <h2 className="text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl md:text-6xl">
            I build things for the web
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I'm a(n aspiring) software engineer specializing in fullstack web
            application development.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-center">
          <div className="aspect-square w-40 md:w-48 overflow-hidden rounded-md border bg-muted">
            <img
              src="/me.webp"
              alt="Jordi Coll"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex space-x-4">
            <SocialLink
              href="https://github.com/jjcoll"
              icon={<SiGithub className="h-5 w-5" />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/jjcoll"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://medium.com/@jjordicoll"
              icon={<FaMedium className="h-5 w-5" />}
              label="Medium"
            />
          </div>

          <Button className="w-full md:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
