
"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, SendHorizonal, Paperclip, Mic, Image as ImageIcon, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { Textarea } from '@/components/ui/textarea';

const users = [
    {
        id: 1,
        name: 'Olivia Martin',
        avatar: 'https://placehold.co/100x100/A8D8B9/424242.png?text=OM',
        hint: 'woman portrait',
        lastMessage: 'Hey, how are you?',
        lastMessageTime: '10:40 AM',
        online: true,
        messages: [
            { id: 1, text: 'Hi there!', sender: 'user', time: '10:30 AM' },
            { id: 2, text: 'Hello! How can I help you today?', sender: 'admin', time: '10:31 AM' },
            { id: 3, text: "I have a question about my subscription.", sender: 'user', time: '10:32 AM' },
            { id: 4, text: "Sure, what is it?", sender: 'admin', time: '10:33 AM' },
            { id: 5, text: 'Hey, how are you?', sender: 'user', time: '10:40 AM' },
        ],
    },
    {
        id: 2,
        name: 'Jackson Lee',
        avatar: 'https://placehold.co/100x100/E6B3A3/424242.png?text=JL',
        hint: 'man portrait',
        lastMessage: 'Thanks for the help!',
        lastMessageTime: 'Yesterday',
        online: false,
        messages: [
            { id: 1, text: 'I need some assistance with the new feature.', sender: 'user', time: 'Yesterday' },
            { id: 2, text: 'Of course, I am here to help.', sender: 'admin', time: 'Yesterday' },
            { id: 3, text: 'Thanks for the help!', sender: 'user', time: 'Yesterday' },
        ],
    },
    {
        id: 3,
        name: 'Isabella Nguyen',
        avatar: 'https://placehold.co/100x100/F0E68C/424242.png?text=IN',
        hint: 'woman smiling',
        lastMessage: 'Got it, thanks!',
        lastMessageTime: 'Tuesday',
        online: true,
         messages: [
            { id: 1, text: 'Got it, thanks!', sender: 'user', time: 'Tuesday' },
        ],
    },
    {
        id: 4,
        name: 'William Kim',
        avatar: 'https://placehold.co/100x100/B3E0F2/424242.png?text=WK',
        hint: 'man glasses',
        lastMessage: 'See you later.',
        lastMessageTime: 'Monday',
        online: false,
         messages: [
            { id: 1, text: 'See you later.', sender: 'user', time: 'Monday' },
        ],
    },
];

type User = typeof users[0];
type Message = User['messages'][0];

export default function ChatPage() {
    const { t } = useLanguage();
    const [selectedUser, setSelectedUser] = useState<User>(users[0]);
    const [messages, setMessages] = useState<Message[]>(selectedUser.messages);
    const [newMessage, setNewMessage] = useState('');

    const handleSelectUser = (user: User) => {
        setSelectedUser(user);
        setMessages(user.messages);
    }

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        const message: Message = {
            id: messages.length + 1,
            text: newMessage,
            sender: 'admin',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, message]);
        setNewMessage('');
    };


    return (
        <div className="flex flex-col h-[calc(100vh-80px)]">
             <div>
                <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('chat.title')}</h1>
                <p className="text-muted-foreground">{t('chat.description')}</p>
            </div>
            <Card className="mt-4 grid flex-1 grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] p-0">
                <div className="flex flex-col border-r">
                    <div className="p-4 border-b">
                         <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder={t('chat.searchPlaceholder')} className="pl-8" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {users.map((user) => (
                            <div key={user.id} 
                                 className={cn("flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50", selectedUser.id === user.id && "bg-muted")}
                                 onClick={() => handleSelectUser(user)}>
                                <Avatar className="h-12 w-12 border">
                                    <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.hint} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    {user.online && <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />}
                                </Avatar>
                                <div className="flex-1 truncate">
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="text-sm text-muted-foreground truncate">{user.lastMessage}</p>
                                </div>
                                <p className="text-xs text-muted-foreground">{user.lastMessageTime}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    {selectedUser ? (
                        <>
                        <div className="flex items-center gap-4 p-4 border-b">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} data-ai-hint={selectedUser.hint}/>
                                <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                                 {selectedUser.online && <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-background" />}
                            </Avatar>
                            <div>
                                <p className="font-semibold">{selectedUser.name}</p>
                                <p className="text-xs text-muted-foreground">{selectedUser.online ? <span className="text-green-500">{t('chat.online')}</span> : t('chat.offline')}</p>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((message) => (
                                <div key={message.id} className={cn("flex items-end gap-2", message.sender === 'admin' ? 'justify-end' : 'justify-start')}>
                                     {message.sender === 'user' && (
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} data-ai-hint={selectedUser.hint} />
                                            <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                     )}
                                    <div className={cn("max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2", message.sender === 'admin' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                                        <p className="text-sm">{message.text}</p>
                                        <p className="text-xs text-right mt-1 opacity-70">{message.time}</p>
                                    </div>
                                    {message.sender === 'admin' && (
                                        <Avatar className="h-8 w-8">
                                             <AvatarImage src="https://placehold.co/100x100/E5E7EB/424242.png?text=AD" alt="Admin" data-ai-hint="user avatar" />
                                            <AvatarFallback>AD</AvatarFallback>
                                        </Avatar>
                                     )}
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t bg-background">
                            <div className="flex items-center gap-2">
                                <Textarea
                                    placeholder={t('chat.typeMessagePlaceholder')}
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
                        </>
                    ) : (
                        <div className="flex flex-1 items-center justify-center">
                            <p className="text-muted-foreground">{t('chat.selectConversation')}</p>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
