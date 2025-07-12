
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export const articles = [
  {
    id: 1,
    slug: "resolving-stripe-payment-issues",
    title: "Resolving Stripe Payment Capture Issues",
    description: "A step-by-step guide to diagnose and fix issues where Stripe payments are authorized but not captured, a common problem reported in recent tickets.",
    image: "https://images.stripeassets.com/fzn2n1nzq965/58NYbBfJ51vegLpHbOlh8j/4525935b30b979e70494338d34fd4639/newsroom-news-stripeterminal.jpeg?w=2400&q=80&fm=webp",
    hint: "stripe terminal",
    author: "Admin",
    date: "July 18, 2024",
    content: `
      <h2 class="text-xl font-bold mt-6 mb-4">Introduction</h2>
      <p class="mb-4">Stripe payment capture failures can occur for various reasons, from API misconfigurations to issues with the payment processor. This guide provides a systematic approach to troubleshooting and resolving these problems efficiently.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Step 1: Verify API Keys and Configuration</h2>
      <p class="mb-4">Ensure that the correct Stripe API keys (Publishable and Secret) are being used for the environment (test or live). A common mistake is using test keys in a live environment or vice versa. The payment intent should be created with 'capture_method' set to 'manual' if you intend to capture it later.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Step 2: Check Payment Intent Status</h2>
      <p class="mb-4">Use the Stripe Dashboard to inspect the Payment Intent associated with the failed transaction. Check its status. If the status is 'requires_capture', it means the payment was authorized but not captured. If it's 'canceled' or 'failed', review the error messages provided by the API response for more details.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Step 3: Review Webhook Endpoints</h2>
      <p class="mb-4">Your system might rely on webhooks to trigger the capture process. Verify that your webhook endpoint is receiving events from Stripe correctly. Check the 'Events' section in the Stripe Dashboard for any failed webhook deliveries. Ensure your server is correctly processing the 'payment_intent.succeeded' or 'charge.succeeded' events.</p>
    `
  },
  {
    id: 2,
    slug: "gdpr-user-data-export-best-practices",
    title: "Best Practices for GDPR User Data Export",
    description: "Ensure compliance with GDPR regulations when exporting user data. This guide covers the correct procedures and common pitfalls to avoid.",
    image: "https://images.theconversation.com/files/218904/original/file-20180514-100697-ig8lqn.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
    hint: "data privacy",
    author: "Admin",
    date: "July 15, 2024",
     content: `
      <h2 class="text-xl font-bold mt-6 mb-4">Understanding GDPR Data Portability</h2>
      <p class="mb-4">The General Data Protection Regulation (GDPR) gives individuals the right to data portability. This means you must provide users with their personal data in a structured, commonly used, and machine-readable format upon request.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Step 1: Identify All Personal Data</h2>
      <p class="mb-4">Before exporting, you must identify all personal data associated with the user across all your systems. This includes their profile information, activity logs, support tickets, and any data stored in third-party integrations.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Step 2: Choose a Machine-Readable Format</h2>
      <p class="mb-4">The data must be exported in a format that is easy for another system to process. Common formats include JSON (recommended for structured data), CSV, and XML. Avoid proprietary formats.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Step 3: Securely Deliver the Data</h2>
      <p class="mb-4">Deliver the data export to the user through a secure channel. Do not send sensitive personal data over unencrypted email. Use a secure download link from your application or a password-protected archive.</p>
    `
  },
  {
    id: 3,
    slug: "automating-inactive-user-deactivation",
    title: "Automating Inactive User Deactivation",
    description: "A walkthrough of the script used to automate the deactivation of inactive user accounts, improving system security and performance.",
    image: "https://www.jitterbit.com/wp-content/uploads/blog-workflowAutomation-featured-1560x740-copy-1-1536x729.jpg",
    hint: "automation workflow",
    author: "Admin",
    date: "July 12, 2024",
     content: `
      <h2 class="text-xl font-bold mt-6 mb-4">Why Automate Deactivation?</h2>
      <p class="mb-4">Automating the deactivation of inactive user accounts is a crucial security measure. It reduces the attack surface by limiting the number of stale accounts that could be compromised. It also helps in maintaining a clean user database and can reduce costs associated with user management.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Defining "Inactive"</h2>
      <p class="mb-4">First, establish a clear definition for what constitutes an inactive user. This is typically based on the last login date. A common policy is to consider users inactive after 90 or 180 days without a login.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">The Deactivation Script</h2>
      <p class="mb-4">The automation can be a scheduled script (e.g., a cron job) that runs daily. The script should:
        <ol class="list-decimal list-inside ml-4 space-y-2">
          <li>Query the database for users whose last login date is older than the defined inactivity period.</li>
          <li>Send a warning email to these users a week before deactivation, informing them of the upcoming action and how to prevent it (by logging in).</li>
          <li>On the day of deactivation, change the user's status from 'Active' to 'Inactive' in the database.</li>
          <li>Log the deactivation event for auditing purposes.</li>
        </ol>
      </p>
    `
  },
    {
    id: 4,
    slug: "troubleshooting-common-integration-errors",
    title: "Troubleshooting Common Integration Errors",
    description: "This document covers the top 5 most common errors encountered when setting up new integrations and how to resolve them quickly.",
    image: "https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2020/09/19152244/Troubleshooting-support-1.webp",
    hint: "computer hardware",
    author: "Admin",
    date: "July 10, 2024",
    content: `
      <h2 class="text-xl font-bold mt-6 mb-4">Error 1: Invalid Credentials / API Key</h2>
      <p class="mb-4">This is the most frequent issue. Always double-check that API keys, tokens, and passwords are copied correctly without any leading or trailing spaces. Ensure you are using the correct type of key for the intended environment (e.g., production vs. sandbox).</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Error 2: Insufficient Permissions / Scope</h2>
      <p class="mb-4">Many integrations use OAuth and require specific permissions (scopes) to be granted. If the integration fails to perform an action, review the permissions granted during the authorization step. You may need to re-authenticate and grant additional scopes.</p>
      <h2 class="text-xl font-bold mt-6 mb-4">Error 3: Incorrect Webhook URL or Firewall Issues</h2>
      <p class="mb-4">If the integration relies on webhooks, ensure the URL is publicly accessible and correctly configured in the source application. Firewalls or network policies can block incoming requests from the service, so check your server's access logs.</p>
    `
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
          <Link key={article.slug} href={`/documentation/${article.slug}`}>
            <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
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
          </Link>
        ))}
      </div>
    </div>
  );
}

