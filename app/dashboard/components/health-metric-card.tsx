"use client"

import { ArrowDown, ArrowUp, Info } from "lucide-react"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HealthMetricCardProps {
  title: string
  value: string
  unit: string
  change: string
  status: "normal" | "warning" | "critical"
  data: number[]
}

export function HealthMetricCard({ title, value, unit, change, status, data }: HealthMetricCardProps) {
  const isPositive = change.startsWith("+")

  // Create chart data with dates for the last 7 days
  const chartData = data.map((value, index) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - index))
    return {
      value,
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    }
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Your {title.toLowerCase()} measurements over the past week</p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">
            {value}
            <span className="ml-1 text-sm font-normal text-muted-foreground">{unit}</span>
          </div>
          <div className={`flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            <span className="text-sm">{change}</span>
          </div>
        </div>

        <div className="mt-4 h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value.split(" ")[1]}
              />
              <YAxis hide domain={["auto", "auto"]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                }}
                formatter={(value) => [`${value} ${unit}`, title]}
                labelFormatter={(label) => `${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 3, fill: "hsl(var(--primary))" }}
                activeDot={{ r: 5, fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 flex items-center justify-center rounded-full bg-muted py-1 text-xs font-medium">
          {status === "normal" && <span className="text-green-500">Normal Range</span>}
          {status === "warning" && <span className="text-amber-500">Slightly Elevated</span>}
          {status === "critical" && <span className="text-red-500">Critical - Seek Medical Advice</span>}
        </div>
      </CardContent>
    </Card>
  )
}

