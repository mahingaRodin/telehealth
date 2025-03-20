"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Bell,
  Calendar,
  ChevronDown,
  Heart,
  Home,
  LineChart,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { HealthMetricCard } from "./components/health-metric-card";
import { NotificationCard } from "./components/notification-card";
import { DashboardChart } from "../components/dashboard-chart";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const user = {
    name: "John Doe",
    avatar: "/placeholder.svg?height=128&width=128",
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50/50 to-green-50/50">
        <Sidebar className="bg-white border-r">
          <SidebarHeader className="flex items-center gap-2 px-4">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              HealthHub
            </span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "overview"}>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    <span>Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={activeTab === "health-tracking"}
                >
                  <Link href="/dashboard/health-tracking">
                    <Activity className="h-5 w-5 text-emerald-500" />
                    <span>Health Tracking</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={activeTab === "consultations"}
                >
                  <Link href="/dashboard/consultations">
                    <Users className="h-5 w-5 text-indigo-500" />
                    <span>Consultations</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={activeTab === "appointments"}
                >
                  <Link href="/dashboard/appointments">
                    <Calendar className="h-5 w-5 text-violet-500" />
                    <span>Appointments</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "messages"}>
                  <Link href="/dashboard/messages">
                    <MessageSquare className="h-5 w-5 text-blue-500" />
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "profile"}>
                  <Link href="/dashboard/profile">
                    <User className="h-5 w-5 text-amber-500" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={activeTab === "settings"}>
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5 text-gray-500" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button>
                    <LogOut className="h-5 w-5 text-red-500" />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white/90 backdrop-blur-sm px-6">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-[10px] text-white">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="flex items-center justify-between p-4">
                    <span className="text-sm font-medium">Notifications</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-xs text-primary"
                    >
                      Mark all as read
                    </Button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="border-t px-4 py-3 hover:bg-muted/50"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-primary">
                            <Bell className="h-4 w-4" />
                          </span>
                          <div className="grid gap-1">
                            <p className="text-sm font-medium">
                              Appointment Reminder
                            </p>
                            <p className="text-xs text-muted-foreground">
                              You have an appointment with Dr. Smith tomorrow at
                              10:00 AM.
                            </p>
                            <p className="text-xs text-muted-foreground">
                              2 hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t p-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-center"
                    >
                      View all notifications
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Avatar className="h-8 w-8 border-2 border-primary/20">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-100 to-green-100">
                        {user?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{user?.name}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full bg-white/80 backdrop-blur-sm border-blue-100 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Welcome back, {user?.name}!
                  </CardTitle>
                  <CardDescription>
                    Here&apos;s a summary of your health metrics
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Last 7 Days
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Today</DropdownMenuItem>
                    <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                    <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                    <DropdownMenuItem>Last 90 Days</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-4 rounded-lg border border-blue-100 p-4 bg-gradient-to-br from-blue-50 to-blue-100/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                      <Activity className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Steps Today
                      </p>
                      <p className="text-2xl font-bold text-blue-700">8,742</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border border-green-100 p-4 bg-gradient-to-br from-green-50 to-green-100/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                      <Heart className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Avg. Heart Rate
                      </p>
                      <p className="text-2xl font-bold text-green-700">
                        72 BPM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border border-purple-100 p-4 bg-gradient-to-br from-purple-50 to-purple-100/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                      <LineChart className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Blood Pressure
                      </p>
                      <p className="text-2xl font-bold text-purple-700">
                        120/80
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <DashboardChart className="col-span-full bg-white/80 backdrop-blur-sm border-blue-100 shadow-md" />

            <HealthMetricCard
              title="Heart Rate"
              value="72"
              unit="BPM"
              change="+3"
              status="normal"
              data={[65, 68, 70, 72, 69, 72, 72]}
            />

            <HealthMetricCard
              title="Blood Pressure"
              value="120/80"
              unit="mmHg"
              change="-5"
              status="normal"
              data={[125, 122, 118, 120, 119, 121, 120]}
            />

            <HealthMetricCard
              title="Glucose Level"
              value="95"
              unit="mg/dL"
              change="+2"
              status="normal"
              data={[92, 94, 93, 95, 94, 93, 95]}
            />

            <Card className="col-span-full lg:col-span-2 bg-white/80 backdrop-blur-sm border-blue-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-indigo-700">
                  Upcoming Appointments
                </CardTitle>
                <CardDescription>
                  Your scheduled appointments for the next 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-indigo-100 p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                          <Calendar className="h-6 w-6 text-indigo-500" />
                        </div>
                        <div>
                          <p className="font-medium text-indigo-700">
                            Dr. Sarah Smith
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Cardiology Consultation
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Tomorrow, 10:00 AM</p>
                        <Badge
                          variant="outline"
                          className="mt-1 bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                        >
                          Virtual
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                >
                  View All Appointments
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-teal-700">Notifications</CardTitle>
                <CardDescription>
                  Your recent health alerts and tips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <NotificationCard
                    title="Medication Reminder"
                    description="Remember to take your blood pressure medication at 8:00 PM today."
                    time="2 hours ago"
                    type="reminder"
                  />
                  <NotificationCard
                    title="Health Tip"
                    description="Staying hydrated can help maintain healthy blood pressure levels."
                    time="5 hours ago"
                    type="tip"
                  />
                  <NotificationCard
                    title="Activity Goal"
                    description="You're 1,258 steps away from reaching your daily goal of 10,000 steps."
                    time="8 hours ago"
                    type="goal"
                  />
                </div>
                <Button
                  variant="outline"
                  className="mt-4 w-full border-teal-200 text-teal-700 hover:bg-teal-50"
                >
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
