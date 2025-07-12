import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

const invoices = [
    { id: 'INV-005', date: '2023-10-25', amount: '$59.00', status: 'Paid' },
    { id: 'INV-004', date: '2023-09-25', amount: '$59.00', status: 'Paid' },
    { id: 'INV-003', date: '2023-08-25', amount: '$59.00', status: 'Paid' },
    { id: 'INV-002', date: '2023-07-25', amount: '$59.00', status: 'Overdue' },
    { id: 'INV-001', date: '2023-06-25', amount: '$59.00', status: 'Paid' },
]

export default function BillingPage() {
    return (
        <div className="flex flex-col gap-8">
             <div>
                <h1 className="text-lg font-semibold md:text-2xl font-headline">Billing</h1>
                <p className="text-muted-foreground">Manage your subscription, payment methods, and view your invoice history.</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Current Plan</CardTitle>
                        <CardDescription>You are on the Pro plan.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">$59/month</h3>
                            <p className="text-sm text-muted-foreground">Billed monthly. Your next payment is on November 25, 2023.</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="ghost">Cancel Subscription</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Payment Method</CardTitle>
                        <CardDescription>The card that will be charged for your subscription.</CardDescription>
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
                        <Button>Update Payment Method</Button>
                    </CardFooter>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Invoice History</CardTitle>
                    <CardDescription>View and download your past invoices.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium">{invoice.id}</TableCell>
                                    <TableCell>{invoice.date}</TableCell>
                                    <TableCell>{invoice.amount}</TableCell>
                                    <TableCell>
                                        <Badge variant={invoice.status === 'Paid' ? 'default' : 'destructive'}>{invoice.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="icon">
                                            <Download className="h-4 w-4" />
                                            <span className="sr-only">Download invoice</span>
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
