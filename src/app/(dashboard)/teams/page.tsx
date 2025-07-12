
"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SendHorizonal, Briefcase, Users, Paperclip, Mic, Image as ImageIcon, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';

const teamsData = [
    {
        id: 1,
        name: 'Tier 1 Support',
        description: 'General customer inquiries',
        members: [
            { name: 'Admin', avatar: 'https://placehold.co/100x100.png', hint: 'user avatar' },
            { name: 'Olivia Martin', avatar: 'https://placehold.co/100x100/A8D8B9/424242.png', hint: 'woman portrait' },
            { name: 'Jackson Lee', avatar: 'https://placehold.co/100x100/E6B3A3/424242.png', hint: 'man portrait' },
        ],
        messages: [
            { id: 1, text: 'Team, new ticket TKT-003 about a password reset is in progress.', sender: 'Admin', time: '10:30 AM' },
            { id: 2, text: 'I can take that one, looks straightforward.', sender: 'Olivia Martin', time: '10:31 AM' },
            { id: 3, text: 'Thanks Olivia! Let me know if you need help.', sender: 'Admin', time: '10:32 AM' },
        ],
    },
    {
        id: 2,
        name: 'Billing Specialists',
        description: 'Payment and subscription issues',
        members: [
            { name: 'Admin', avatar: 'https://placehold.co/100x100.png', hint: 'user avatar' },
            { name: 'Sofia Davis', avatar: 'https://placehold.co/100x100/D4B4E4/424242.png', hint: 'woman professional' },
        ],
        messages: [
            { id: 1, text: 'We have a billing dispute on INV-002, can someone look into it?', sender: 'Admin', time: 'Yesterday' },
            { id: 2, text: 'On it. Checking the Stripe logs now.', sender: 'Sofia Davis', time: 'Yesterday' },
        ],
    },
    {
        id: 3,
        name: 'Integration Experts',
        description: 'API and third-party integrations',
        members: [
            { name: 'Admin', avatar: 'https://placehold.co/100x100.png', hint: 'user avatar' },
            { name: 'William Kim', avatar: 'https://placehold.co/100x100/B3E0F2/424242.png', hint: 'man glasses' },
            { name: 'Isabella Nguyen', avatar: 'https://placehold.co/100x100/F0E68C/424242.png', hint: 'woman smiling' },
        ],
        messages: [
            { id: 1, text: 'Has anyone seen the new Zapier integration docs?', sender: 'William Kim', time: 'Tuesday' },
            { id: 2, text: 'Yes, just shared them in the documentation section.', sender: 'Isabella Nguyen', time: 'Tuesday' },
        ],
    },
];

type Team = typeof teamsData[0];
type Message = Team['messages'][0];

export default function TeamsPage() {
    const { t } = useLanguage();
    const [selectedTeam, setSelectedTeam] = useState<Team>(teamsData[0]);
    const [messages, setMessages] = useState<Message[]>(selectedTeam.messages);
    const [newMessage, setNewMessage] = useState('');

    const handleSelectTeam = (team: Team) => {
        setSelectedTeam(team);
        setMessages(team.messages);
    }

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        const message: Message = {
            id: messages.length + 1,
            text: newMessage,
            sender: 'Admin', // Assuming the current user is always 'Admin'
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, message]);
        setNewMessage('');
    };


    return (
        <div className="flex flex-col h-[calc(100vh-80px)]">
             <div>
                <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('teams.title')}</h1>
                <p className="text-muted-foreground">{t('teams.description')}</p>
            </div>
            <Card className="mt-4 grid flex-1 grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] p-0">
                <div className="flex flex-col border-r">
                    <div className="p-4 border-b">
                         <h2 className="text-lg font-semibold flex items-center gap-2">
                           <Briefcase className="h-5 w-5"/> {t('teams.myTeams')}
                         </h2>
                    </div>
                    <ScrollArea className="flex-1">
                        {teamsData.map((team) => (
                            <div key={team.id} 
                                 className={cn("flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50", selectedTeam.id === team.id && "bg-muted")}
                                 onClick={() => handleSelectTeam(team)}>
                                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-muted text-muted-foreground">
                                   <Users className="h-5 w-5" />
                                </div>
                                <div className="flex-1 truncate">
                                    <p className="font-semibold">{team.name}</p>
                                    <p className="text-sm text-muted-foreground truncate">{team.description}</p>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </div>

                <div className="flex flex-col">
                    {selectedTeam ? (
                        <>
                        <div className="p-4 border-b">
                             <h2 className="text-xl font-semibold">{selectedTeam.name}</h2>
                             <p className="text-sm text-muted-foreground">{t('teams.teamChat')}</p>
                        </div>
                        <div className="flex flex-1 overflow-hidden">
                            <div className="flex-1 flex flex-col">
                                <ScrollArea className="flex-1 p-6 space-y-4">
                                    {messages.map((message) => (
                                        <div key={message.id} className="flex items-start gap-3">
                                            <Avatar className="h-8 w-8 border">
                                                 <AvatarImage src={selectedTeam.members.find(m => m.name === message.sender)?.avatar} alt={message.sender} data-ai-hint={selectedTeam.members.find(m => m.name === message.sender)?.hint} />
                                                <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-2">
                                                    <p className="font-semibold">{message.sender}</p>
                                                    <p className="text-xs text-muted-foreground">{message.time}</p>
                                                </div>
                                                <div className="mt-1 text-sm text-foreground/90 bg-muted p-3 rounded-lg w-fit">
                                                    {message.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </ScrollArea>
                                <div className="p-4 border-t bg-background">
                                    <div className="flex items-center gap-2">
                                        <Textarea
                                            placeholder={t('teams.typeMessagePlaceholder')}
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSendMessage();
                                                }
                                            }}
                                            rows={1}
                                            className="flex-1 resize-none bg-muted border-0 focus-visible:ring-1 focus-visible:ring-ring"
                                        />
                                        <Button variant="ghost" size="icon">
                                            <Paperclip className="h-5 w-5" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Mic className="h-5 w-5" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <ImageIcon className="h-5 w-5" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Smile className="h-5 w-5" />
                                        </Button>
                                        <Button size="icon" onClick={handleSendMessage} disabled={!newMessage.trim()}>
                                            <SendHorizonal className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[250px] border-l flex flex-col">
                                <div className="p-4 border-b">
                                    <h3 className="font-semibold">{t('teams.members')} ({selectedTeam.members.length})</h3>
                                </div>
                                <ScrollArea className="flex-1">
                                    <div className="p-4 space-y-4">
                                    {selectedTeam.members.map(member => (
                                        <div key={member.name} className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint}/>
                                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium text-sm">{member.name}</span>
                                        </div>
                                    ))}
                                    </div>
                                </ScrollArea>
                            </div>
                        </div>

                        </>
                    ) : (
                        <div className="flex flex-1 items-center justify-center">
                            <p className="text-muted-foreground">{t('teams.selectTeam')}</p>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
