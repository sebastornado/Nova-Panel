
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Package,
  LineChart,
  Settings,
  Puzzle,
  MessageSquare,
  LifeBuoy,
  Rss,
  BookText,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { NovaPanelLogo } from "./icons";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/context/language-context";

export function DashboardSidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", icon: Home, label: t("sidebar.overview") },
    { href: "/users", icon: Users, label: t("sidebar.users") },
    { href: "/chat", icon: MessageSquare, label: t("sidebar.chat") },
    { href: "/feed", icon: Rss, label: t("sidebar.feed") },
    { href: "/documentation", icon: BookText, label: t("sidebar.documentation") },
    { href: "/billing", icon: Package, label: t("sidebar.billing") },
    { href: "/reports", icon: LineChart, label: t("sidebar.reporting") },
    { href: "/integrations", icon: Puzzle, label: t("sidebar.integrations") },
  ];
  
  const secondaryNavItems = [
      { href: "/resources", icon: LifeBuoy, label: t("sidebar.resources") },
      { href: "/settings", icon: Settings, label: t("sidebar.settings") },
  ]

  return (
    <div className="hidden border-r bg-card md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <NovaPanelLogo className="h-6 w-6" />
            <span className="font-headline text-lg">NovaPanel</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
        <div className="mt-auto p-4 space-y-4">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
      </div>
    </div>
  );
}
