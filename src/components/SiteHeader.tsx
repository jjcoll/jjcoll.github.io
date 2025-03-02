import { MainNav } from "@/components/layout/MainNav";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center font-mono text-xl font-bold">
          jjcoll
        </div>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
