
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, ArrowDown, MessageSquare, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/language-context";

const initialPosts = [
  {
    id: 1,
    author: {
      name: "Admin",
      avatar: "https://placehold.co/100x100.png",
      hint: "user avatar"
    },
    timestamp: "2 hours ago",
    content: "Has anyone encountered an issue with the Stripe integration where payments are being authorized but not captured? Seeing a few tickets about this.",
    votes: 12,
    comments: 4,
  },
  {
    id: 2,
    author: {
      name: "Olivia Martin",
      avatar: "https://placehold.co/100x100/A8D8B9/424242.png?text=OM",
      hint: "woman portrait"
    },
    timestamp: "1 day ago",
    content: "Quick question: what's the best practice for exporting user data for a GDPR request? Need to make sure I'm following the correct procedure.",
    votes: 5,
    comments: 2,
  },
  {
    id: 3,
    author: {
      name: "Jackson Lee",
      avatar: "https://placehold.co/100x100/E6B3A3/424242.png?text=JL",
      hint: "man portrait"
    },
    timestamp: "3 days ago",
    content: "I've created a small script to automate the process of de-activating inactive users. Happy to share if anyone is interested.",
    votes: 28,
    comments: 9,
  },
];


export default function FeedPage() {
    const { t } = useLanguage();
    const [posts, setPosts] = useState(initialPosts);
    const [newPostContent, setNewPostContent] = useState("");

    const handlePostSubmit = () => {
        if (!newPostContent.trim()) return;

        const newPost = {
            id: posts.length + 1,
            author: {
                name: "Admin",
                avatar: "https://placehold.co/100x100.png",
                hint: "user avatar",
            },
            timestamp: "Just now",
            content: newPostContent,
            votes: 0,
            comments: 0,
        };

        setPosts([newPost, ...posts]);
        setNewPostContent("");
    }

  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('feed.title')}</h1>
        <p className="text-muted-foreground">{t('feed.description')}</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <Avatar>
                <AvatarImage src="https://placehold.co/100x100.png" alt="Admin" data-ai-hint="user avatar" />
                <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                 <Textarea
                    placeholder={t('feed.newPostPlaceholder')}
                    className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-ring"
                    rows={3}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end">
            <Button onClick={handlePostSubmit}>
                <Send className="mr-2 h-4 w-4" />
                {t('feed.postButton')}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        {posts.map((post) => (
            <Card key={post.id}>
                <CardContent className="p-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                                <ArrowUp className="h-5 w-5" />
                            </Button>
                            <span className="font-bold text-lg">{post.votes}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ArrowDown className="h-5 w-5 text-muted-foreground" />
                            </Button>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src={post.author.avatar} alt={post.author.name} data-ai-hint={post.author.hint} />
                                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium text-foreground">{post.author.name}</span>
                                <span>&middot;</span>
                                <span>{post.timestamp}</span>
                            </div>
                            <p className="mt-4 text-base text-foreground/90">{post.content}</p>

                             <div className="flex items-center gap-4 mt-4">
                                <Button variant="ghost" className="text-muted-foreground">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    {post.comments} {t('feed.comments')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        ))}
      </div>

    </div>
  );
}
