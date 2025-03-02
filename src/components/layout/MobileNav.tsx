import { useState } from "react";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItemProps {
  number: number;
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

const MobileNavItem = ({
  number,
  label,
  href,
  className,
  onClick,
}: NavItemProps) => (
  <Link
    to={href}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    className={cn(
      "flex w-full items-center py-2 font-mono text-base tracking-wide cursor-pointer",
      "transition-colors hover:bg-gray-100 px-4",
      className
    )}
    onClick={onClick}
  >
    <span className="mr-2 text-primary">{number}.</span>
    {label}
  </Link>
);

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { number: 0, label: "projects", href: "projects" },
    { number: 1, label: "work", href: "work" },
    { number: 2, label: "about", href: "about" },
    { number: 3, label: "contact", href: "contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[280px]">
        {/* <div className="flex font-mono text-xl font-bold mb-6 mt-2">jjcoll</div> */}
        <nav className="flex flex-col space-y-4 mt-16">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.number}
              {...item}
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
