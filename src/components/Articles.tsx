import { useState, useEffect } from "react";
import { ExternalLink, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories?: string[];
}

export function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jjordicoll`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();

        if (data.status === "ok") {
          setArticles(data.items.slice(0, 6)); // Show latest 6 articles
        } else {
          throw new Error("RSS feed error");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load articles"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getReadingTime = (description: string) => {
    const words = description.replace(/<[^>]*>/g, "").split(" ").length;
    const readingTime = Math.ceil(words / 200); // Average reading speed
    return readingTime;
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "").substring(0, 150) + "...";
  };

  if (loading) {
    return (
      <section className="py-12" id="articles">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="font-mono text-sm text-primary">2. Articles</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Articles
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2 mt-2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-3 bg-muted rounded w-full mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12" id="articles">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="font-mono text-sm text-primary">2. Articles</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest Articles
            </h2>
          </div>
          <Card className="text-center py-8">
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Unable to load articles at the moment.
              </p>
              <Button asChild variant="outline">
                <a
                  href="https://medium.com/@jjordicoll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Medium Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12" id="articles">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary">2. Articles</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Articles
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find out more about my approach to software development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex-none">
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(article.pubDate)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {getReadingTime(article.description)} min read
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="flex-1 line-clamp-3">
                  {stripHtml(article.description)}
                </CardDescription>
                <Button asChild variant="outline" className="w-full mt-4">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://medium.com/@jjordicoll"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Articles
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
