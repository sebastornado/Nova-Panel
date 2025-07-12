
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import { useLanguage } from "@/context/language-context";

const invoices = [
    { id: 'INV-005', date: '2023-10-25', amount: '$59.00', status: 'Paid' },
    { id: 'INV-004', date: '2023-09-25', amount: '$59.00', status: 'Paid' },
    { id: 'INV-003', date: '2023-08-25', amount: '$59.00', status: 'Paid' },
    { id: 'INV-002', date: '2023-07-25', amount: '$59.00', status: 'Overdue' },
    { id: 'INV-001', date: '2023-06-25', amount: '$59.00', status: 'Paid' },
]

export default function BillingPage() {
    const { t } = useLanguage();
    
    const getStatusText = (status: string) => {
        if (status === 'Paid') return t('billing.paidStatus');
        if (status === 'Overdue') return t('billing.overdueStatus');
        return status;
    }

    return (
        <div className="flex flex-col gap-8">
             <div>
                <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('billing.title')}</h1>
                <p className="text-muted-foreground">{t('billing.description')}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('billing.currentPlan')}</CardTitle>
                        <CardDescription>{t('billing.currentPlanDescription')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">$59/month</h3>
                            <p className="text-sm text-muted-foreground">{t('billing.nextPayment')}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">{t('billing.changePlan')}</Button>
                        <Button variant="ghost">{t('billing.cancelSubscription')}</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('billing.paymentMethod')}</CardTitle>
                        <CardDescription>{t('billing.paymentMethodDescription')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="flex items-center gap-4">
                           <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                               <span className="font-mono text-sm">VISA</span>
                           </div>
                           <div>
                               <p className="font-medium">Visa ending in 1234</p>
                               <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                           </div>
                       </div>
                    </CardContent>
                    <CardFooter>
                        <Button>{t('billing.updatePaymentMethod')}</Button>
                    </CardFooter>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('billing.invoiceHistory')}</CardTitle>
                    <CardDescription>{t('billing.invoiceHistoryDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('billing.invoiceColumn')}</TableHead>
                                <TableHead>{t('billing.dateColumn')}</TableHead>
                                <TableHead>{t('billing.amountColumn')}</TableHead>
                                <TableHead>{t('billing.statusColumn')}</TableHead>
                                <TableHead className="text-right">{t('billing.actionColumn')}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium">{invoice.id}</TableCell>
                                    <TableCell>{invoice.date}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                    <TableCell>
                                        <Badge variant={invoice.status === 'Paid' ? 'positive' : 'destructive'}>{getStatusText(invoice.status)}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="icon">
                                            <Download className="h-4 w-4" />
                                            <span className="sr-only">{t('billing.downloadInvoice')}</span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
