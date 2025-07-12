
"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/app/(dashboard)/documentation/page";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronLeft, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const getHeadings = (content: string) => {
    const headingRegex = /<h2[^>]*>(.*?)<\/h2>/g;
    const headings = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push(match[1]);
    }
    return headings;
  };

  const headings = getHeadings(article.content);

  return (
    <div className="flex flex-col gap-8">
       <div className="flex items-center justify-start">
        <Button variant="outline" asChild>
          <Link href="/documentation">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12">
        <article className="lg:col-span-3">
          <header className="mb-8">
            <h1 className="text-3xl font-bold font-headline md:text-4xl mb-4">{article.title}</h1>
            <p className="text-muted-foreground">
              By {article.author} on {article.date}
            </p>
          </header>

          <Image 
            src={article.image} 
            alt={article.title} 
            width={1200} 
            height={600} 
            className="rounded-lg object-cover aspect-video mb-8" 
            data-ai-hint={article.hint}
          />

          <div 
            className="prose dark:prose-invert max-w-none" 
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
        </article>

        <aside className="lg:col-span-1 mt-8 lg:mt-0">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <List className="h-5 w-5"/>
                        In this article
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {headings.map((heading, index) => (
                           <li key={index}>
                             <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {heading}
                             </a>
                           </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </aside>
      </div>
    </div>
  );
}
