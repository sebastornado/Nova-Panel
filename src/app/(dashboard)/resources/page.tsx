"use client"

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqData = [
  {
    question: "How do I reset a user's password?",
    answer: "Navigate to the user's profile page, click on 'Edit Profile', and you will find an option to send a password reset link to the user's registered email address."
  },
  {
    question: "What do the different user statuses mean?",
    answer: "'Active' means the user can log in and use the service. 'Inactive' means the account is temporarily disabled. 'Suspended' means the account has been banned due to a violation of terms."
  },
  {
    question: "How do I handle a billing dispute?",
    answer: "First, review the user's payment history in their profile. Then, check the Stripe or relevant payment gateway for transaction details. If you need to issue a refund, you can do so from the billing page."
  },
  {
    question: "Where can I find a user's API keys?",
    answer: "API keys are managed by the users themselves in their own account settings. For security reasons, admins cannot view or manage user-specific API keys."
  },
  {
    question: "How do I add a new integration?",
    answer: "Go to the 'Integrations' page and click 'Connect' on the desired application. You will be prompted to enter the necessary credentials or authorize the connection via OAuth."
  },
  {
    question: "Can I export user data?",
    answer: "Yes, on the 'Users' page, there is an 'Export' button that allows you to download a CSV file of all users. This feature is restricted to Admin roles only."
  }
];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Resources & FAQs</h1>
        <p className="text-muted-foreground">Find guides and answers to frequently asked questions.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search resources..."
          className="pl-10 text-base py-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Accordion type="single" collapsible className="w-full">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:no-underline text-base">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filteredFaqs.length === 0 && (
        <div className="text-center text-muted-foreground py-10">
          <p>No results found for "{searchTerm}"</p>
          <p className="text-sm">Try searching for a different keyword.</p>
        </div>
      )}

    </div>
  );
}
