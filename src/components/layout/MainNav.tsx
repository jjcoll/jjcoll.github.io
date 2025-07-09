import { Link } from "react-scroll";
import { cn } from "@/lib/utils";

interface NavItemProps {
  number: number;
  label: string;
  href: string;
  className?: string;
}

const NavItem = ({ number, label, href, className }: NavItemProps) => (
  <Link
    to={href}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    className={cn(
      "group relative flex items-center font-mono text-sm tracking-wide cursor-pointer",
      "transition-colors hover:text-foreground/80",
      className
    )}
    activeClass="text-primary"
  >
    <span className="mr-1 text-primary">{number}.</span>
    {label}
  </Link>
);

export function MainNav() {
  const navItems = [
    { number: 0, label: "projects", href: "projects" },
    { number: 1, label: "work", href: "work" },
    { number: 2, label: "articles", href: "articles" },
    { number: 3, label: "about", href: "about" },
    { number: 4, label: "contact", href: "contact" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <NavItem key={item.number} {...item} />
      ))}
    </nav>
  );
}
