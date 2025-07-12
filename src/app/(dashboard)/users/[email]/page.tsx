
"use client";

import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Phone, Edit, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/language-context";

// Mock data - in a real app, this would come from a database
const users = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', role: 'Admin', status: 'Active', avatar: 'https://placehold.co/100x100/A8D8B9/424242.png?text=OM', hint: 'woman portrait', joined: '2023-01-15', lastLogin: '2024-07-15T10:30:00Z' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100/E6B3A3/424242.png?text=JL', hint: 'man portrait', joined: '2023-02-20', lastLogin: '2024-07-14T18:45:00Z' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', role: 'User', status: 'Inactive', avatar: 'https://placehold.co/100x100/F0E68C/424242.png?text=IN', hint: 'woman smiling', joined: '2023-03-10', lastLogin: '2024-05-01T11:00:00Z' },
  { name: 'William Kim', email: 'will@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100/B3E0F2/424242.png?text=WK', hint: 'man glasses', joined: '2023-04-05', lastLogin: '2024-07-15T09:00:00Z' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100/D4B4E4/424242.png?text=SD', hint: 'woman professional', joined: '2023-05-25', lastLogin: '2024-07-12T14:20:00Z' },
];

const recentActivityData = [
    { actionKey: "loggedInAction", timestamp: "2024-07-15T10:30:00Z" },
    { actionKey: "updatedProfileAction", timestamp: "2024-07-14T11:05:00Z" },
    { actionKey: "viewedBillingAction", timestamp: "2024-07-14T09:15:00Z" },
    { actionKey: "sentSupportMessageAction", timestamp: "2024-07-13T16:40:00Z" },
];

const supportTicketsData = [
    { id: 'TKT-001', subjectKey: 'ticketSubjectBilling', status: 'Open', lastUpdated: '2024-07-15T12:00:00Z' },
    { id: 'TKT-002', subjectKey: 'ticketSubjectFeature', status: 'Closed', lastUpdated: '2024-07-10T09:30:00Z' },
    { id: 'TKT-003', subjectKey: 'ticketSubjectPassword', status: 'In Progress', lastUpdated: '2024-07-16T08:00:00Z' },
];


export default function UserProfilePage({ params: { email } }: { params: { email: string } }) {
  const { t } = useLanguage();
  const userEmail = decodeURIComponent(email);
  const user = users.find((u) => u.email === userEmail);

  if (!user) {
    notFound();
  }
  
  const timeSince = (date: string) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
  };

  const getTicketBadgeVariant = (status: string): "destructive" | "positive" | "default" | "secondary" | "outline" | null | undefined => {
    switch (status) {
        case 'Open': return 'destructive';
        case 'In Progress': return 'default';
        case 'Closed': return 'positive';
        default: return 'outline';
    }
  }

  const getTicketStatusKey = (status: string) => {
    switch (status) {
        case 'Open': return 'statusOpen';
        case 'In Progress': return 'statusInProgress';
        case 'Closed': return 'statusClosed';
        default: return 'statusOpen';
    }
  }


  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('userProfile.title')}</h1>
        <div className="flex gap-2">
            <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" /> {t('userProfile.message')}</Button>
            <Button><Edit className="mr-2 h-4 w-4" /> {t('userProfile.editProfile')}</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 flex flex-col gap-8">
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.hint}/>
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                        <Badge variant={user.status === 'Active' ? 'positive' : 'secondary'}>{t(`users.${user.status.toLowerCase()}Status`)}</Badge>
                        <Badge variant="outline">{t(`users.${user.role.toLowerCase()}Role`)}</Badge>
                    </CardDescription>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>{t('userProfile.contactInfo')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{t('userProfile.notProvided')}</span>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2">
            <Tabs defaultValue="activity">
                <TabsList>
                    <TabsTrigger value="activity">{t('userProfile.recentActivityTab')}</TabsTrigger>
                    <TabsTrigger value="tickets">{t('userProfile.supportTicketsTab')}</TabsTrigger>
                </TabsList>
                <TabsContent value="activity">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('userProfile.activityLog')}</CardTitle>
                            <CardDescription>{t('userProfile.activityLogDescription')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('userProfile.actionColumn')}</TableHead>
                                        <TableHead className="text-right">{t('userProfile.timestampColumn')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentActivityData.map((activity, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{t(`userProfile.${activity.actionKey}`)}</TableCell>
                                            <TableCell className="text-right text-muted-foreground">{timeSince(activity.timestamp)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="tickets">
                     <Card>
                        <CardHeader>
                            <CardTitle>{t('userProfile.supportTickets')}</CardTitle>
                            <CardDescription>{t('userProfile.supportTicketsDescription')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('userProfile.ticketIdColumn')}</TableHead>
                                        <TableHead>{t('userProfile.subjectColumn')}</TableHead>
                                        <TableHead>{t('userProfile.statusColumn')}</TableHead>
                                        <TableHead className="text-right">{t('userProfile.lastUpdatedColumn')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {supportTicketsData.map((ticket) => (
                                        <TableRow key={ticket.id}>
                                            <TableCell className="font-mono text-xs">{ticket.id}</TableCell>
                                            <TableCell className="font-medium">{t(`userProfile.${ticket.subjectKey}`)}</TableCell>
                                            <TableCell>
                                                <Badge variant={getTicketBadgeVariant(ticket.status)}>{t(`userProfile.${getTicketStatusKey(ticket.status)}`)}</Badge>
                                            </TableCell>
                                            <TableCell className="text-right text-muted-foreground">{timeSince(ticket.lastUpdated)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

      </div>
    </div>
  );
}
