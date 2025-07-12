
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context";
import { 
    AzureLogo, 
    SalesforceLogo, 
    SlackLogo, 
    ZapierLogo, 
    GoogleAnalyticsLogo, 
    MailchimpLogo, 
    StripeLogo, 
    AutotaskLogo 
} from "@/components/integration-icons";

const integrations = [
    { name: 'Salesforce', description: 'Sync your customer data with Salesforce.', logo: <SalesforceLogo />, hint: 'crm logo' },
    { name: 'Slack', description: 'Get notifications directly in your Slack channels.', logo: <SlackLogo />, hint: 'messaging app' },
    { name: 'Zapier', description: 'Connect with thousands of other apps.', logo: <ZapierLogo />, hint: 'automation tool' },
    { name: 'Google Analytics', description: 'Track user behavior with Google Analytics.', logo: <GoogleAnalyticsLogo />, hint: 'analytics logo' },
    { name: 'Mailchimp', description: 'Sync your contacts with Mailchimp lists.', logo: <MailchimpLogo />, hint: 'email marketing' },
    { name: 'Stripe', description: 'Manage payments and subscriptions with Stripe.', logo: <StripeLogo />, hint: 'payment gateway' },
    { name: 'Azure', description: 'Host your backend services on Microsoft Azure.', logo: <AzureLogo />, hint: 'cloud service' },
    { name: 'Autotask', description: 'Manage your PSA and ticketing with Autotask.', logo: <AutotaskLogo />, hint: 'psa tool' },
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
                           <div className="w-12 h-12 flex items-center justify-center">
                             {integration.logo}
                           </div>
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
