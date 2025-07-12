
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const articles = [
  {
    id: 1,
    title: "Resolving Stripe Payment Capture Issues",
    description: "A step-by-step guide to diagnose and fix issues where Stripe payments are authorized but not captured, a common problem reported in recent tickets.",
    image: "https://images.stripeassets.com/fzn2n1nzq965/58NYbBfJ51vegLpHbOlh8j/4525935b30b979e70494338d34fd4639/newsroom-news-stripeterminal.jpeg?w=2400&q=80&fm=webp",
    hint: "stripe terminal",
    author: "Admin",
    date: "July 18, 2024",
  },
  {
    id: 2,
    title: "Best Practices for GDPR User Data Export",
    description: "Ensure compliance with GDPR regulations when exporting user data. This guide covers the correct procedures and common pitfalls to avoid.",
    image: "https://placehold.co/600x400/00BCD4/FFFFFF.png",
    hint: "data security",
    author: "Admin",
    date: "July 15, 2024",
  },
  {
    id: 3,
    title: "Automating Inactive User Deactivation",
    description: "A walkthrough of the script used to automate the deactivation of inactive user accounts, improving system security and performance.",
    image: "https://placehold.co/600x400/4CAF50/FFFFFF.png",
    hint: "code screen",
    author: "Admin",
    date: "July 12, 2024",
  },
    {
    id: 4,
    title: "Troubleshooting Common Integration Errors",
    description: "This document covers the top 5 most common errors encountered when setting up new integrations and how to resolve them quickly.",
    image: "https://placehold.co/600x400/FFC107/FFFFFF.png",
    hint: "computer hardware",
    author: "Admin",
    date: "July 10, 2024",
  },
];

export default function DocumentationPage() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('documentation.title')}</h1>
          <p className="text-muted-foreground">{t('documentation.description')}</p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            {t('documentation.newArticleButton')}
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader className="p-0">
               <Image src={article.image} alt={article.title} width={600} height={400} className="rounded-t-lg object-cover aspect-[3/2]" data-ai-hint={article.hint}/>
            </CardHeader>
            <CardContent className="flex-1 pt-6">
                <CardTitle className="mb-2 text-lg">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <span>By {article.author}</span>
                <span>{article.date}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
