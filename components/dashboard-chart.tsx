"use client"

import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { ChevronDown } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for the past week
const data = [
  { date: "Mar 13", heartRate: 68, bloodPressureSys: 118, bloodPressureDia: 78, glucose: 92 },
  { date: "Mar 14", heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, glucose: 94 },
  { date: "Mar 15", heartRate: 70, bloodPressureSys: 119, bloodPressureDia: 79, glucose: 93 },
  { date: "Mar 16", heartRate: 69, bloodPressureSys: 121, bloodPressureDia: 81, glucose: 95 },
  { date: "Mar 17", heartRate: 71, bloodPressureSys: 122, bloodPressureDia: 82, glucose: 94 },
  { date: "Mar 18", heartRate: 73, bloodPressureSys: 120, bloodPressureDia: 80, glucose: 93 },
  { date: "Mar 19", heartRate: 72, bloodPressureSys: 120, bloodPressureDia: 80, glucose: 95 },
]

type TimeRange = "7days" | "30days" | "90days"
type MetricType = "heartRate" | "bloodPressure" | "glucose" | "all"

interface DashboardChartProps {
  className?: string
}

export function DashboardChart({ className }: DashboardChartProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>("7days")
  const [metricType, setMetricType] = useState<MetricType>("all")

  const getTimeRangeLabel = (range: TimeRange) => {
    switch (range) {
      case "7days":
        return "Last 7 Days"
      case "30days":
        return "Last 30 Days"
      case "90days":
        return "Last 90 Days"
    }
  }

  const getMetricTypeLabel = (type: MetricType) => {
    switch (type) {
      case "heartRate":
        return "Heart Rate"
      case "bloodPressure":
        return "Blood Pressure"
      case "glucose":
        return "Glucose Level"
      case "all":
        return "All Metrics"
    }
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Health Trends</CardTitle>
          <CardDescription>Track your vital signs over time</CardDescription>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {getMetricTypeLabel(metricType)}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setMetricType("all")}>All Metrics</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setMetricType("heartRate")}>Heart Rate</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setMetricType("bloodPressure")}>Blood Pressure</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setMetricType("glucose")}>Glucose Level</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {getTimeRangeLabel(timeRange)}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTimeRange("7days")}>Last 7 Days</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeRange("30days")}>Last 30 Days</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeRange("90days")}>Last 90 Days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHeartRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorBloodPressureSys" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorBloodPressureDia" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff9e7d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff9e7d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorGlucose" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ecdc4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4ecdc4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={30} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                }}
              />
              <Legend />

              {(metricType === "heartRate" || metricType === "all") && (
                <Area
                  type="monotone"
                  dataKey="heartRate"
                  name="Heart Rate (BPM)"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorHeartRate)"
                />
              )}

              {(metricType === "bloodPressure" || metricType === "all") && (
                <>
                  <Area
                    type="monotone"
                    dataKey="bloodPressureSys"
                    name="Systolic (mmHg)"
                    stroke="#ff6b6b"
                    fillOpacity={1}
                    fill="url(#colorBloodPressureSys)"
                  />
                  <Area
                    type="monotone"
                    dataKey="bloodPressureDia"
                    name="Diastolic (mmHg)"
                    stroke="#ff9e7d"
                    fillOpacity={1}
                    fill="url(#colorBloodPressureDia)"
                  />
                </>
              )}

              {(metricType === "glucose" || metricType === "all") && (
                <Area
                  type="monotone"
                  dataKey="glucose"
                  name="Glucose (mg/dL)"
                  stroke="#4ecdc4"
                  fillOpacity={1}
                  fill="url(#colorGlucose)"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

