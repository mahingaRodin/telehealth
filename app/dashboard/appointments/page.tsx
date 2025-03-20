"use client"

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppointmentsPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Today",
      time: "4:00 PM",
      type: "virtual",
      status: "confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Endocrinologist",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "in-person",
      status: "confirmed",
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Neurologist",
      date: "Mar 22",
      time: "2:30 PM",
      type: "virtual",
      status: "pending",
    },
  ]

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: "", isCurrentMonth: false })
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      const isToday = new Date().toDateString() === date.toDateString()
      const hasAppointment = [10, 15, 22].includes(i) // Example days with appointments

      days.push({
        day: i,
        isCurrentMonth: true,
        isToday,
        hasAppointment,
      })
    }

    return days
  }

  const calendarDays = generateCalendarDays()
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <Button>
          <CalendarIcon className="mr-2 h-4 w-4" />
          Schedule New Appointment
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-6">
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            appointment.type === "virtual" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                          }`}
                        >
                          {appointment.type === "virtual" ? (
                            <Video className="h-5 w-5" />
                          ) : (
                            <MapPin className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{appointment.doctor}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {appointment.type === "virtual" ? "Virtual" : "In-person"}
                            </Badge>
                            <Badge
                              variant={appointment.status === "confirmed" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{appointment.date}</p>
                        <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="mt-2 flex justify-end gap-2">
                          {appointment.type === "virtual" && (
                            <Button size="sm" className="h-8 text-xs">
                              Join Call
                            </Button>
                          )}
                          <Button size="sm" variant="outline" className="h-8 text-xs">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-6">
                <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-muted-foreground">No past appointments to display</p>
                </div>
              </TabsContent>

              <TabsContent value="cancelled" className="mt-6">
                <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-muted-foreground">No cancelled appointments to display</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Calendar</CardTitle>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" onClick={prevMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">
                  {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </span>
                <Button variant="ghost" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 text-center">
              {weekdays.map((day) => (
                <div key={day} className="py-1 text-xs font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`relative flex h-9 items-center justify-center rounded-md text-sm ${
                    !day.isCurrentMonth
                      ? "text-muted-foreground/50"
                      : day.isToday
                        ? "bg-primary text-primary-foreground"
                        : day.hasAppointment
                          ? "font-medium"
                          : ""
                  }`}
                >
                  {day.day}
                  {day.hasAppointment && (
                    <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium">Upcoming</p>
              {appointments.slice(0, 2).map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between rounded-md border p-2 text-sm">
                  <div>
                    <p className="font-medium">{appointment.doctor}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>
                        {appointment.date}, {appointment.time}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {appointment.type === "virtual" ? "Virtual" : "In-person"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

