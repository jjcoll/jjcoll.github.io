import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-24">
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <h2 className="mt-2 text-xl font-semibold">Page Not Found</h2>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Go back home</Link>
      </Button>
    </div>
  );
}
