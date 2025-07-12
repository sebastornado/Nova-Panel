
"use client";

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, RadialBar, RadialBarChart, PolarGrid } from "recharts"
import Link from "next/link"
import { useLanguage } from "@/context/language-context";

const ticketResolutionData = [
  { day: "Mon", tickets: 8 },
  { day: "Tue", tickets: 12 },
  { day: "Wed", tickets: 15 },
  { day: "Thu", tickets: 7 },
  { day: "Fri", tickets: 11 },
  { day: "Sat", tickets: 4 },
  { day: "Sun", tickets: 2 },
];

const ticketResolutionConfig = {
  tickets: {
    label: "Tickets",
    color: "hsl(var(--primary))",
  },
};

const responseTimeData = [
  { name: 'Over 8h', value: 10, fill: "hsl(var(--destructive))" },
  { name: '4-8h', value: 15, fill: "hsl(var(--secondary))" },
  { name: '1-4h', value: 25, fill: "hsl(var(--accent))" },
  { name: 'Under 1h', value: 50, fill: "hsl(var(--primary))" },
];

export default function OverviewPage() {
  const { t } = useLanguage();
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t('overview.totalRevenue')}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+20.1%</span> {t('overview.fromLastMonth')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t('overview.subscriptions')}
            </CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+180.1%</span> {t('overview.fromLastMonth')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('overview.sales')}</CardTitle>
            <CreditCard className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+19%</span> {t('overview.fromLastMonth')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('overview.activeNow')}</CardTitle>
            <Activity className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+201</span> {t('overview.sinceLastHour')}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">{t('overview.recentTickets')}</CardTitle>
            <CardDescription>
              {t('overview.recentTicketsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('overview.customer')}</TableHead>
                  <TableHead className="hidden xl:table-column">
                    {t('overview.subject')}
                  </TableHead>
                  <TableHead className="hidden xl:table-column">
                    {t('overview.status')}
                  </TableHead>
                  <TableHead className="hidden xl:table-column">
                    {t('overview.date')}
                  </TableHead>
                  <TableHead className="text-right">{t('overview.priority')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    {t('overview.subjectBilling')}
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge variant="default">
                      {t('overview.statusInProgress')}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">{t('overview.priorityHigh')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                     {t('overview.subjectPassword')}
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge variant="positive">
                      {t('overview.statusResolved')}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-24
                  </TableCell>
                  <TableCell className="text-right">{t('overview.priorityMedium')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    {t('overview.subjectApi')}
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                     <Badge variant="destructive">
                      {t('overview.statusOpen')}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-25
                  </TableCell>
                  <TableCell className="text-right">{t('overview.priorityHigh')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{t('overview.ticketsResolved')}</CardTitle>
              <CardDescription>{t('overview.ticketsResolvedDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={ticketResolutionConfig} className="h-[200px] w-full">
                <BarChart accessibilityLayer data={ticketResolutionData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="tickets" fill="var(--color-tickets)" radius={8} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">{t('overview.responseTime')}</CardTitle>
              <CardDescription>{t('overview.responseTimeDescription')}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
               <ChartContainer
                config={{
                    "Under 1h": { label: t('overview.legendUnder1h'), color: "hsl(var(--primary))" },
                    "1-4h": { label: t('overview.legend1to4h'), color: "hsl(var(--accent))" },
                    "4-8h": { label: t('overview.legend4to8h'), color: "hsl(var(--secondary))" },
                    "Over 8h": { label: t('overview.legendOver8h'), color: "hsl(var(--destructive))" },
                }}
                className="mx-auto aspect-square h-[250px]"
              >
                <RadialBarChart
                  data={responseTimeData}
                  startAngle={-90}
                  endAngle={270}
                  innerRadius={80}
                  outerRadius={110}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="fill-muted"
                  />
                  <RadialBar dataKey="value" background cornerRadius={10} />
                  <ChartLegend
                    content={<ChartLegendContent nameKey="name" className="flex-wrap" />}
                    className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
