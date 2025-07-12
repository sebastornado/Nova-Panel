
"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  PlusCircle,
  Search,
  Ticket,
  Send,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/context/language-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const ticketsData = [
  {
    id: 'TKT-001',
    customer: { name: 'Olivia Martin', email: 'olivia.martin@email.com', avatar: 'https://placehold.co/100x100.png', hint: 'woman portrait' },
    subject: 'Issue with billing',
    status: 'Open',
    priority: 'High',
    lastUpdated: '2024-07-18T10:00:00Z',
    messages: [
        { sender: 'Olivia Martin', text: 'I received an invoice for a service I already cancelled. Can you please check?', time: '2 days ago' },
        { sender: 'Admin', text: 'Hi Olivia, I\'m looking into this for you right now.', time: '2 days ago' },
    ]
  },
  {
    id: 'TKT-002',
    customer: { name: 'Jackson Lee', email: 'jackson.lee@email.com', avatar: 'https://placehold.co/100x100.png', hint: 'man portrait' },
    subject: 'Feature request: Dark mode',
    status: 'In Progress',
    priority: 'Medium',
    lastUpdated: '2024-07-18T11:30:00Z',
    messages: [
        { sender: 'Jackson Lee', text: 'Hey team, I would love to see a dark mode option in the dashboard. Is that on the roadmap?', time: '1 day ago' }
    ]
  },
  {
    id: 'TKT-003',
    customer: { name: 'William Kim', email: 'will@email.com', avatar: 'https://placehold.co/100x100.png', hint: 'man glasses' },
    subject: 'Cannot reset password',
    status: 'On Hold',
    priority: 'High',
    lastUpdated: '2024-07-17T14:00:00Z',
    messages: [
        { sender: 'William Kim', text: 'The password reset link seems to be broken. I click it but nothing happens.', time: '3 days ago' }
    ]
  },
  {
    id: 'TKT-004',
    customer: { name: 'Sofia Davis', email: 'sofia.davis@email.com', avatar: 'https://placehold.co/100x100.png', hint: 'woman professional' },
    subject: 'API integration question',
    status: 'Completed',
    priority: 'Low',
    lastUpdated: '2024-07-15T09:00:00Z',
     messages: [
        { sender: 'Sofia Davis', text: 'Just a quick question about the API rate limits.', time: '5 days ago' },
        { sender: 'Admin', text: 'Hi Sofia, the rate limit is 100 requests per minute. Let me know if you need more!', time: '5 days ago' },
        { sender: 'Sofia Davis', text: 'That\'s perfect, thank you!', time: '5 days ago' }
    ]
  },
];

type Ticket = typeof ticketsData[0];

export default function TicketsPage() {
    const { t } = useLanguage();
    const [tickets, setTickets] = useState(ticketsData);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [isTicketOpen, setIsTicketOpen] = useState(false);
    const [replyMessage, setReplyMessage] = useState("");

    const handleViewTicket = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setIsTicketOpen(true);
    }

    const handleSendReply = () => {
        if (!replyMessage.trim() || !selectedTicket) return;

        const newReply = {
            sender: 'Admin',
            text: replyMessage,
            time: 'Just now'
        };

        const updatedTicket = {
            ...selectedTicket,
            messages: [...selectedTicket.messages, newReply],
            lastUpdated: new Date().toISOString(),
        };
        
        // Also update status to 'In Progress' if it was 'Open'
        if(updatedTicket.status === 'Open') {
            updatedTicket.status = 'In Progress';
        }

        setSelectedTicket(updatedTicket);
        setTickets(tickets.map(t => t.id === updatedTicket.id ? updatedTicket : t));
        setReplyMessage("");
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

    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Open': return 'destructive';
            case 'In Progress': return 'default';
            case 'On Hold': return 'secondary';
            case 'Completed': return 'positive';
            default: return 'outline';
        }
    }
    
    const getPriorityVariant = (priority: string) => {
         switch (priority) {
            case 'High': return 'destructive';
            case 'Medium': return 'secondary';
            case 'Low': return 'outline';
            default: return 'outline';
        }
    }

    const inProgressTickets = tickets.filter(t => t.status !== 'Completed');
    const completedTickets = tickets.filter(t => t.status === 'Completed');

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('tickets.title')}</h1>
        <p className="text-muted-foreground">{t('tickets.description')}</p>
      </div>
      <Tabs defaultValue="in-progress">
        <div className="flex items-center">
            <TabsList>
                <TabsTrigger value="in-progress">{t('tickets.inProgressTab')} ({inProgressTickets.length})</TabsTrigger>
                <TabsTrigger value="completed">{t('tickets.completedTab')} ({completedTickets.length})</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
                 <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Search className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        {t('tickets.search')}
                    </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        {t('tickets.newTicket')}
                    </span>
                </Button>
            </div>
        </div>
        <TabsContent value="in-progress">
            <Card>
                <CardContent className="pt-6">
                   <TicketTable tickets={inProgressTickets} onRowClick={handleViewTicket} timeSince={timeSince} getStatusVariant={getStatusVariant} getPriorityVariant={getPriorityVariant} t={t} />
                </CardContent>
            </Card>
        </TabsContent>
         <TabsContent value="completed">
            <Card>
                <CardContent className="pt-6">
                    <TicketTable tickets={completedTickets} onRowClick={handleViewTicket} timeSince={timeSince} getStatusVariant={getStatusVariant} getPriorityVariant={getPriorityVariant} t={t} />
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>

      {selectedTicket && (
        <Dialog open={isTicketOpen} onOpenChange={setIsTicketOpen}>
            <DialogContent className="sm:max-w-[625px] flex flex-col h-[calc(100vh-4rem)]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Ticket className="h-5 w-5" />
                        <span>{t('tickets.ticket')}: {selectedTicket.id}</span>
                    </DialogTitle>
                    <DialogDescription>{selectedTicket.subject}</DialogDescription>
                </DialogHeader>

                <div className="flex items-center gap-4 py-2">
                     <Avatar>
                        <AvatarImage src={selectedTicket.customer.avatar} alt={selectedTicket.customer.name} data-ai-hint={selectedTicket.customer.hint} />
                        <AvatarFallback>{selectedTicket.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{selectedTicket.customer.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedTicket.customer.email}</p>
                    </div>
                </div>

                <Separator />
                
                <ScrollArea className="flex-1 -mx-6 px-6">
                    <div className="space-y-6 pr-2">
                    {selectedTicket.messages.map((message, index) => (
                         <div key={index} className={cn("flex items-start gap-3", message.sender === 'Admin' ? 'justify-end' : 'justify-start')}>
                             {message.sender !== 'Admin' && (
                                <Avatar className="h-8 w-8 border">
                                    <AvatarImage src={selectedTicket.customer.avatar} alt={selectedTicket.customer.name} data-ai-hint={selectedTicket.customer.hint} />
                                    <AvatarFallback>{selectedTicket.customer.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                             )}
                            <div className="flex flex-col gap-1 items-end">
                                <div className={cn("max-w-md rounded-lg px-3 py-2", message.sender === 'Admin' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                                    <p className="text-sm">{message.text}</p>
                                </div>
                                <p className="text-xs text-muted-foreground">{message.sender} &middot; {message.time}</p>
                            </div>
                             {message.sender === 'Admin' && (
                                <Avatar className="h-8 w-8 border">
                                     <AvatarImage src="https://placehold.co/100x100.png" alt="Admin" data-ai-hint="user avatar" />
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                             )}
                        </div>
                    ))}
                    </div>
                </ScrollArea>
                
                <Separator />
                
                <DialogFooter className="!flex-col sm:!flex-col gap-2 pt-2">
                   <Textarea 
                    placeholder={t('tickets.typeReplyPlaceholder')}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                   />
                   <Button onClick={handleSendReply} className="self-end">
                        <Send className="mr-2 h-4 w-4" />
                        {t('tickets.sendReply')}
                   </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
      )}
    </div>
  )
}


function TicketTable({ tickets, onRowClick, timeSince, getStatusVariant, getPriorityVariant, t }: { tickets: Ticket[], onRowClick: (ticket: Ticket) => void, timeSince: (date: string) => string, getStatusVariant: (status: string) => any, getPriorityVariant: (priority: string) => any, t: (key: string) => string }) {
    return (
         <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden sm:table-cell">{t('tickets.idColumn')}</TableHead>
                <TableHead>{t('tickets.customerColumn')}</TableHead>
                <TableHead>{t('tickets.subjectColumn')}</TableHead>
                <TableHead className="hidden md:table-cell">{t('tickets.statusColumn')}</TableHead>
                <TableHead className="hidden lg:table-cell">{t('tickets.priorityColumn')}</TableHead>
                <TableHead className="text-right">{t('tickets.lastUpdatedColumn')}</TableHead>
                <TableHead><span className="sr-only">{t('users.actionsColumn')}</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map(ticket => (
                <TableRow key={ticket.id} className="cursor-pointer" onClick={() => onRowClick(ticket)}>
                    <TableCell className="font-mono text-xs hidden sm:table-cell">{ticket.id}</TableCell>
                    <TableCell>
                         <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} data-ai-hint={ticket.customer.hint} />
                                <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{ticket.customer.name}</div>
                                <div className="text-sm text-muted-foreground">{ticket.customer.email}</div>
                            </div>
                        </div>
                    </TableCell>
                  <TableCell className="font-medium">{ticket.subject}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant={getStatusVariant(ticket.status)}>{t(`tickets.status${ticket.status.replace(/\s/g, '')}`)}</Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <Badge variant={getPriorityVariant(ticket.priority)}>{t(`tickets.priority${ticket.priority}`)}</Badge>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">{timeSince(ticket.lastUpdated)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">{t('users.actionsColumn')}</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{t('users.actionsColumn')}</DropdownMenuLabel>
                        <DropdownMenuItem onClick={(e) => {e.stopPropagation(); onRowClick(ticket)}}>{t('tickets.viewTicket')}</DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>{t('tickets.closeTicket')}</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    );
}

