import { Mail, MessageSquare, Linkedin } from "lucide-react";

import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Contact() {
  const contactMethods = [
    {
      title: "Email",
      description:
        "Send me an email to discuss opportunities or collaborations.",
      icon: <Mail className="h-6 w-6" />,
      action: {
        text: "Send Email",
        href: "mailto:contact@jjcoll.dev",
      },
    },
    {
      title: "LinkedIn",
      description: "Connect with me on LinkedIn for professional networking.",
      icon: <Linkedin className="h-6 w-6" />,
      action: {
        text: "Connect",
        href: "https://linkedin.com/in/jjcoll",
      },
    },
    {
      title: "GitHub",
      description: "Check out my code and projects on GitHub.",
      icon: <SiGithub className="h-6 w-6" />,
      action: {
        text: "Follow",
        href: "https://github.com/jjcoll",
      },
    },
    {
      title: "Twitter",
      description: "Follow me on Twitter for updates and thoughts on tech.",
      icon: <SiX className="h-6 w-6" />,
      action: {
        text: "Follow",
        href: "https://twitter.com/jjcoll",
      },
    },
  ];

  return (
    <section className="py-12" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary">3. Contact</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <div className="text-primary">{method.icon}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {method.description}
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={method.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.action.text}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-secondary p-4">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 text-xl font-bold">Open for Opportunities</h3>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            I'm currently open to freelance projects, collaborations, and
            part-time opportunities in software development.
          </p>
        </div>
      </div>
    </section>
  );
}
