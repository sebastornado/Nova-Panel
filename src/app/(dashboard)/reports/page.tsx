
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/context/language-context";

const chartData = [
  { month: "January", users: 186 },
  { month: "February", users: 305 },
  { month: "March", users: 237 },
  { month: "April", users: 273 },
  { month: "May", users: 209 },
  { month: "June", users: 214 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--primary))",
  },
}

export default function ReportsPage() {
  const { t } = useLanguage();
  return (
    <Tabs defaultValue="user_activity">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('reports.title')}</h1>
        <div className="ml-auto flex items-center gap-2">
          <TabsList>
            <TabsTrigger value="user_activity">{t('reports.userActivityTab')}</TabsTrigger>
            <TabsTrigger value="product_usage">{t('reports.productUsageTab')}</TabsTrigger>
            <TabsTrigger value="revenue">{t('reports.revenueTab')}</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <TabsContent value="user_activity" className="mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{t('reports.newSignups')}</CardTitle>
              <CardDescription>{t('reports.newSignupsDescription')}</CardDescription>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('reports.last6Months')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6m">{t('reports.last6Months')}</SelectItem>
                <SelectItem value="3m">{t('reports.last3Months')}</SelectItem>
                <SelectItem value="1m">{t('reports.last30Days')}</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
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
                <Bar dataKey="users" fill="var(--color-users)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="product_usage">
        <div className="flex items-center justify-center h-96">
            <p className="text-muted-foreground">{t('reports.productUsageComingSoon')}</p>
        </div>
      </TabsContent>
      <TabsContent value="revenue">
      <div className="flex items-center justify-center h-96">
            <p className="text-muted-foreground">{t('reports.revenueComingSoon')}</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
