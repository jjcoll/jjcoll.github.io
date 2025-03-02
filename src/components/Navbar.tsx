import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface NavItemProps {
  number: number;
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

// Desktop Navigation Item
const DesktopNavItem = ({ number, label, href, className }: NavItemProps) => (
  <ScrollLink
    to={href.replace("#", "")}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    className={cn(
      "group relative flex items-center font-mono text-sm tracking-wide cursor-pointer",
      "transition-colors hover:text-foreground/80",
      className
    )}
  >
    <div className="flex items-end">
      <span className="mr-1 text-primary text-xs">{number}.</span>
      {label}
    </div>
  </ScrollLink>
);

// Mobile Navigation Item
const MobileNavItem = ({
  number,
  label,
  href,
  className,
  onClick,
}: NavItemProps) => (
  <ScrollLink
    to={href.replace("#", "")}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    className={cn(
      "flex w-full items-center font-mono text-base tracking-wide cursor-pointer",
      "transition-colors hover:text-foreground/80",
      className
    )}
    onClick={onClick}
  >
    <span className="mr-2 text-primary">{number}.</span>
    {label}
  </ScrollLink>
);

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { number: 0, label: "projects", href: "projects" },
    { number: 1, label: "work", href: "work" },
    { number: 2, label: "about", href: "about" },
    { number: 3, label: "contact", href: "contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between">
        <RouterLink
          to="/"
          className="flex items-center font-mono text-xl font-bold"
        >
          jjcoll
        </RouterLink>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.number}>
                <NavigationMenuLink asChild>
                  <DesktopNavItem
                    number={item.number}
                    label={item.label}
                    href={item.href}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[280px]">
            <RouterLink
              to="/"
              className="flex items-center font-mono text-xl font-bold mb-8 mt-4"
              onClick={() => setIsOpen(false)}
            >
              jjcoll
            </RouterLink>
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.number}
                  {...item}
                  className="py-1"
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
