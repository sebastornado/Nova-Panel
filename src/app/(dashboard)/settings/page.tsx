
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLanguage } from "@/context/language-context";

export default function SettingsPage() {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('settings.title')}</h1>
                <p className="text-muted-foreground">{t('settings.description')}</p>
            </div>
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="profile">{t('settings.profileTab')}</TabsTrigger>
                    <TabsTrigger value="workspace">{t('settings.workspaceTab')}</TabsTrigger>
                    <TabsTrigger value="api">{t('settings.apiTab')}</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('settings.myProfile')}</CardTitle>
                            <CardDescription>
                                {t('settings.myProfileDescription')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <div className="flex items-center gap-4">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src="https://placehold.co/100x100/E5E7EB/424242.png?text=AD" alt="Admin" data-ai-hint="user avatar" />
                                    <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                                <Button variant="outline">{t('settings.changeAvatar')}</Button>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name">{t('settings.nameLabel')}</Label>
                                <Input id="name" defaultValue="Admin" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">{t('settings.emailLabel')}</Label>
                                <Input id="email" type="email" defaultValue="admin@novapanel.io" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>{t('settings.saveChanges')}</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="workspace">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('settings.workspace')}</CardTitle>
                            <CardDescription>
                                {t('settings.workspaceDescription')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="workspace-name">{t('settings.workspaceNameLabel')}</Label>
                                <Input id="workspace-name" defaultValue="Nova Inc." />
                            </div>
                        </CardContent>
                         <CardFooter>
                            <Button>{t('settings.saveChanges')}</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="api">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('settings.apiKeys')}</CardTitle>
                            <CardDescription>
                                {t('settings.apiKeysDescription')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="api-key">{t('settings.publicKeyLabel')}</Label>
                                <Input id="api-key" defaultValue="pk_test_************************" readOnly/>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="secret-key">{t('settings.secretKeyLabel')}</Label>
                                <Input id="secret-key" type="password" defaultValue="sk_test_************************" readOnly/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>{t('settings.generateNewKey')}</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
