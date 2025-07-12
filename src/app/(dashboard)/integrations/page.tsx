
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/context/language-context";

const AzureLogo = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-lg">
        <path d="M13.2539 3.88281L6.00001 15.8281H10.1914L13.2539 10.9336V3.88281Z" fill="#0078D4"/>
        <path d="M14.0352 10.1367L10.1875 15.8281H18L14.0352 10.1367Z" fill="#0078D4"/>
        <path d="M9.42188 16.6172L13.2539 20.1172V11.7148L9.42188 16.6172Z" fill="#50E6FF"/>
    </svg>
)

const integrations = [
    { name: 'Salesforce', description: 'Sync your customer data with Salesforce.', logo: 'https://placehold.co/48x48.png', hint: 'crm logo' },
    { name: 'Slack', description: 'Get notifications directly in your Slack channels.', logo: 'https://placehold.co/48x48.png', hint: 'messaging app' },
    { name: 'Zapier', description: 'Connect with thousands of other apps.', logo: 'https://placehold.co/48x48.png', hint: 'automation tool' },
    { name: 'Google Analytics', description: 'Track user behavior with Google Analytics.', logo: 'https://placehold.co/48x48.png', hint: 'analytics logo' },
    { name: 'Mailchimp', description: 'Sync your contacts with Mailchimp lists.', logo: 'https://placehold.co/48x48.png', hint: 'email marketing' },
    { name: 'Stripe', description: 'Manage payments and subscriptions with Stripe.', logo: 'https://placehold.co/48x48.png', hint: 'payment gateway' },
    { name: 'Azure', description: 'Host your backend services on Microsoft Azure.', logo: <AzureLogo />, hint: 'cloud service' },
    { name: 'Autotask', description: 'Manage your PSA and ticketing with Autotask.', logo: 'https://placehold.co/48x48.png', hint: 'psa tool' },
]

export default function IntegrationsPage() {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('integrations.title')}</h1>
                <p className="text-muted-foreground">{t('integrations.description')}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {integrations.map((integration) => (
                    <Card key={integration.name}>
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                            {typeof integration.logo === 'string' ? (
                                <Image src={integration.logo} alt={`${integration.name} logo`} width={48} height={48} className="rounded-lg" data-ai-hint={integration.hint} />
                            ) : (
                                integration.logo
                            )}
                            <div className="flex-1">
                                <CardTitle>{integration.name}</CardTitle>
                                <CardDescription>{integration.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full">{t('integrations.connect')}</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
