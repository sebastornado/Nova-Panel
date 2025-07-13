
"use client";

import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Search,
  Users,
  Moon,
  Sun,
  Languages,
  Palette,
  Briefcase,
  MessageSquare,
  Ticket,
  Rss,
  BookText,
  Puzzle,
  LifeBuoy,
  Settings,
} from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NovaPanelLogo } from "./icons";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const themes = [
    { name: "Indigo", value: "indigo", color: "bg-indigo-500" },
    { name: "Rose", value: "rose", color: "bg-rose-500" },
    { name: "Blue", value: "blue", color: "bg-blue-500" },
    { name: "Green", value: "green", color: "bg-green-500" },
    { name: "Orange", value: "orange", color: "bg-orange-500" },
];

export function DashboardHeader() {
  const { setTheme } = useTheme();
  const { t, setLanguage } = useLanguage();
  const pathname = usePathname();

  const handleColorChange = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  const navItems = [
    { href: "/", icon: Home, label: t("sidebar.overview") },
    { href: "/users", icon: Users, label: t("sidebar.users") },
    { href: "/teams", icon: Briefcase, label: t("sidebar.teams") },
    { href: "/chat", icon: MessageSquare, label: t("sidebar.chat") },
    { href: "/tickets", icon: Ticket, label: t("sidebar.tickets") },
    { href: "/feed", icon: Rss, label: t("sidebar.feed") },
    { href: "/documentation", icon: BookText, label: t("sidebar.documentation") },
    { href: "/billing", icon: Package, label: t("sidebar.billing") },
    { href: "/reports", icon: LineChart, label: t("sidebar.reporting") },
    { href: "/integrations", icon: Puzzle, label: t("sidebar.integrations") },
  ];
  
  const secondaryNavItems = [
      { href: "/resources", icon: LifeBuoy, label: t("sidebar.resources") },
      { href: "/settings", icon: Settings, label: t("sidebar.settings") },
  ];

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <NovaPanelLogo className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-card p-0">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <NovaPanelLogo className="h-6 w-6" />
                    <span className="font-headline text-lg">NovaPanel</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto">
                <nav className="grid items-start p-2 text-base font-medium lg:p-4">
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            pathname === item.href && "bg-muted text-primary"
                        )}
                        >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
             <div className="mt-auto p-4 space-y-4 border-t">
                <nav className="grid items-start px-2 text-base font-medium lg:px-4">
                    {secondaryNavItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            pathname.startsWith(item.href) && "bg-muted text-primary"
                        )}
                        >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('header.searchPlaceholder')}
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Bell className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{t('header.notifications')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t('header.notifications')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t('header.newNotification1')}</DropdownMenuItem>
                <DropdownMenuItem>{t('header.newNotification2')}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

         <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{t('header.changeLanguage')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>{t('header.english')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>{t('header.spanish')}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                     <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">{t('header.toggleTheme')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                {t('header.light')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                {t('header.dark')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                {t('header.system')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Palette className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{t('header.changeColor')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t('header.themeColor')}</DropdownMenuLabel>
                 <DropdownMenuSeparator />
                {themes.map((themeItem) => (
                    <DropdownMenuItem key={themeItem.value} onClick={() => handleColorChange(themeItem.value)}>
                        <div className="flex items-center gap-2">
                           <div className={`h-4 w-4 rounded-full ${themeItem.color}`} />
                           <span>{t(`header.${themeItem.value}`)}</span>
                        </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://placehold.co/100x100/E5E7EB/424242.png?text=AD" alt="Admin" data-ai-hint="user avatar" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{t('header.myAccount')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/settings">
              <DropdownMenuItem>{t('header.settings')}</DropdownMenuItem>
            </Link>
            <Link href="/resources">
              <DropdownMenuItem>{t('header.support')}</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 focus:text-red-500">{t('header.logout')}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
