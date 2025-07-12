
"use client";

import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Phone, Edit, MessageSquare } from "lucide-react";

// Mock data - in a real app, this would come from a database
const users = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', role: 'Admin', status: 'Active', avatar: 'https://placehold.co/100x100.png', hint: 'woman portrait', joined: '2023-01-15', lastLogin: '2024-07-15T10:30:00Z' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100.png', hint: 'man portrait', joined: '2023-02-20', lastLogin: '2024-07-14T18:45:00Z' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', role: 'User', status: 'Inactive', avatar: 'https://placehold.co/100x100.png', hint: 'woman smiling', joined: '2023-03-10', lastLogin: '2024-05-01T11:00:00Z' },
  { name: 'William Kim', email: 'will@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100.png', hint: 'man glasses', joined: '2023-04-05', lastLogin: '2024-07-15T09:00:00Z' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100.png', hint: 'woman professional', joined: '2023-05-25', lastLogin: '2024-07-12T14:20:00Z' },
];

const recentActivity = [
    { action: "Logged in", timestamp: "2024-07-15T10:30:00Z" },
    { action: "Updated profile settings", timestamp: "2024-07-14T11:05:00Z" },
    { action: "Viewed billing page", timestamp: "2024-07-14T09:15:00Z" },
    { action: "Sent a support message", timestamp: "2024-07-13T16:40:00Z" },
];

export default function UserProfilePage({ params }: { params: { email: string } }) {
  const userEmail = decodeURIComponent(params.email);
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


  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">User Profile</h1>
        <div className="flex gap-2">
            <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" /> Message</Button>
            <Button><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
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
                    <CardTitle className="font-headline text-2xl">{user.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>{user.status}</Badge>
                        <Badge variant="outline">{user.role}</Badge>
                    </CardDescription>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Not provided</span>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>A log of the user's most recent actions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Action</TableHead>
                                <TableHead className="text-right">Timestamp</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentActivity.map((activity, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{activity.action}</TableCell>
                                    <TableCell className="text-right text-muted-foreground">{timeSince(activity.timestamp)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
