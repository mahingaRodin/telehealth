"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for heart rate over a month
const heartRateData = [
  { date: "Mar 1", value: 68, min: 60, max: 75 },
  { date: "Mar 2", value: 70, min: 62, max: 78 },
  { date: "Mar 3", value: 72, min: 65, max: 80 },
  { date: "Mar 4", value: 69, min: 63, max: 76 },
  { date: "Mar 5", value: 71, min: 64, max: 79 },
  { date: "Mar 6", value: 73, min: 66, max: 82 },
  { date: "Mar 7", value: 72, min: 65, max: 80 },
  { date: "Mar 8", value: 70, min: 63, max: 78 },
  { date: "Mar 9", value: 69, min: 62, max: 77 },
  { date: "Mar 10", value: 71, min: 64, max: 79 },
  { date: "Mar 11", value: 74, min: 67, max: 83 },
  { date: "Mar 12", value: 73, min: 66, max: 82 },
  { date: "Mar 13", value: 72, min: 65, max: 80 },
  { date: "Mar 14", value: 70, min: 63, max: 78 },
  { date: "Mar 15", value: 69, min: 62, max: 77 },
  { date: "Mar 16", value: 71, min: 64, max: 79 },
  { date: "Mar 17", value: 72, min: 65, max: 80 },
  { date: "Mar 18", value: 73, min: 66, max: 82 },
  { date: "Mar 19", value: 72, min: 65, max: 80 },
]

// Sample data for blood pressure over a month
const bloodPressureData = [
  { date: "Mar 1", systolic: 118, diastolic: 78 },
  { date: "Mar 2", systolic: 120, diastolic: 80 },
  { date: "Mar 3", systolic: 122, diastolic: 82 },
  { date: "Mar 4", systolic: 119, diastolic: 79 },
  { date: "Mar 5", systolic: 121, diastolic: 81 },
  { date: "Mar 6", systolic: 123, diastolic: 83 },
  { date: "Mar 7", systolic: 122, diastolic: 82 },
  { date: "Mar 8", systolic: 120, diastolic: 80 },
  { date: "Mar 9", systolic: 119, diastolic: 79 },
  { date: "Mar 10", systolic: 121, diastolic: 81 },
  { date: "Mar 11", systolic: 124, diastolic: 84 },
  { date: "Mar 12", systolic: 123, diastolic: 83 },
  { date: "Mar 13", systolic: 122, diastolic: 82 },
  { date: "Mar 14", systolic: 120, diastolic: 80 },
  { date: "Mar 15", systolic: 119, diastolic: 79 },
  { date: "Mar 16", systolic: 121, diastolic: 81 },
  { date: "Mar 17", systolic: 122, diastolic: 82 },
  { date: "Mar 18", systolic: 123, diastolic: 83 },
  { date: "Mar 19", systolic: 120, diastolic: 80 },
]

// Sample data for glucose over a month
const glucoseData = [
  { date: "Mar 1", fasting: 92, afterMeal: 120 },
  { date: "Mar 2", fasting: 94, afterMeal: 125 },
  { date: "Mar 3", fasting: 93, afterMeal: 122 },
  { date: "Mar 4", fasting: 95, afterMeal: 128 },
  { date: "Mar 5", fasting: 94, afterMeal: 126 },
  { date: "Mar 6", fasting: 93, afterMeal: 124 },
  { date: "Mar 7", fasting: 92, afterMeal: 121 },
  { date: "Mar 8", fasting: 94, afterMeal: 125 },
  { date: "Mar 9", fasting: 93, afterMeal: 123 },
  { date: "Mar 10", fasting: 95, afterMeal: 127 },
  { date: "Mar 11", fasting: 96, afterMeal: 130 },
  { date: "Mar 12", fasting: 95, afterMeal: 128 },
  { date: "Mar 13", fasting: 94, afterMeal: 126 },
  { date: "Mar 14", fasting: 93, afterMeal: 124 },
  { date: "Mar 15", fasting: 92, afterMeal: 122 },
  { date: "Mar 16", fasting: 94, afterMeal: 125 },
  { date: "Mar 17", fasting: 93, afterMeal: 123 },
  { date: "Mar 18", fasting: 95, afterMeal: 127 },
  { date: "Mar 19", fasting: 94, afterMeal: 126 },
]

type TimeRange = "week" | "month" | "year"
type ChartType = "heartRate" | "bloodPressure" | "glucose"

interface HealthChartProps {
  type: ChartType
  className?: string
}

export function HealthChart({ type, className }: HealthChartProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>("week")

  const getTimeRangeLabel = (range: TimeRange) => {
    switch (range) {
      case "week":
        return "This Week"
      case "month":
        return "This Month"
      case "year":
        return "This Year"
    }
  }

  const renderHeartRateChart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={heartRateData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} domain={[50, 100]} width={30} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
          }}
        />
        <Legend />
        <ReferenceLine
          y={60}
          stroke="#4ecdc4"
          strokeDasharray="3 3"
          label={{ value: "Min Normal", position: "insideBottomLeft", fontSize: 10 }}
        />
        <ReferenceLine
          y={90}
          stroke="#ff6b6b"
          strokeDasharray="3 3"
          label={{ value: "Max Normal", position: "insideTopLeft", fontSize: 10 }}
        />
        <Line
          type="monotone"
          dataKey="value"
          name="Heart Rate (BPM)"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 3, fill: "hsl(var(--primary))" }}
          activeDot={{ r: 5, fill: "hsl(var(--primary))" }}
        />
        <Line
          type="monotone"
          dataKey="min"
          name="Min Rate"
          stroke="#4ecdc4"
          strokeWidth={1}
          strokeDasharray="5 5"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="max"
          name="Max Rate"
          stroke="#ff6b6b"
          strokeWidth={1}
          strokeDasharray="5 5"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )

  const renderBloodPressureChart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={bloodPressureData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} domain={[60, 140]} width={30} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
          }}
        />
        <Legend />
        <ReferenceLine
          y={120}
          stroke="#ff6b6b"
          strokeDasharray="3 3"
          label={{ value: "Systolic Normal", position: "insideTopLeft", fontSize: 10 }}
        />
        <ReferenceLine
          y={80}
          stroke="#4ecdc4"
          strokeDasharray="3 3"
          label={{ value: "Diastolic Normal", position: "insideBottomLeft", fontSize: 10 }}
        />
        <Line
          type="monotone"
          dataKey="systolic"
          name="Systolic (mmHg)"
          stroke="#ff6b6b"
          strokeWidth={2}
          dot={{ r: 3, fill: "#ff6b6b" }}
          activeDot={{ r: 5, fill: "#ff6b6b" }}
        />
        <Line
          type="monotone"
          dataKey="diastolic"
          name="Diastolic (mmHg)"
          stroke="#4ecdc4"
          strokeWidth={2}
          dot={{ r: 3, fill: "#4ecdc4" }}
          activeDot={{ r: 5, fill: "#4ecdc4" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )

  const renderGlucoseChart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={glucoseData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} domain={[70, 150]} width={30} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
          }}
        />
        <Legend />
        <ReferenceLine
          y={100}
          stroke="#ff6b6b"
          strokeDasharray="3 3"
          label={{ value: "Fasting Normal", position: "insideTopLeft", fontSize: 10 }}
        />
        <ReferenceLine
          y={140}
          stroke="#ff9e7d"
          strokeDasharray="3 3"
          label={{ value: "After Meal Normal", position: "insideTopRight", fontSize: 10 }}
        />
        <Line
          type="monotone"
          dataKey="fasting"
          name="Fasting (mg/dL)"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 3, fill: "hsl(var(--primary))" }}
          activeDot={{ r: 5, fill: "hsl(var(--primary))" }}
        />
        <Line
          type="monotone"
          dataKey="afterMeal"
          name="After Meal (mg/dL)"
          stroke="#ff9e7d"
          strokeWidth={2}
          dot={{ r: 3, fill: "#ff9e7d" }}
          activeDot={{ r: 5, fill: "#ff9e7d" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )

  const renderChart = () => {
    switch (type) {
      case "heartRate":
        return renderHeartRateChart()
      case "bloodPressure":
        return renderBloodPressureChart()
      case "glucose":
        return renderGlucoseChart()
      default:
        return renderHeartRateChart()
    }
  }

  return (
    <div className={className}>
      <div className="mb-4 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {getTimeRangeLabel(timeRange)}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTimeRange("week")}>This Week</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeRange("month")}>This Month</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeRange("year")}>This Year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-[300px]">{renderChart()}</div>
    </div>
  )
}

