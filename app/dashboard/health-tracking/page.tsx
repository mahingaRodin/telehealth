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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

import { HealthChart } from "./components/health-chart";
import { DashboardChart } from "@/components/dashboard-chart";

export default function HealthTrackingPage() {
  const [timeRange, setTimeRange] = useState("week");
  const [activeTab, setActiveTab] = useState("health-tracking");
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
              <h1 className="text-lg font-semibold">Health Tracking</h1>
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

          <main className="flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-bold">Health Tracking</h1>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      {timeRange === "day" && "Today"}
                      {timeRange === "week" && "This Week"}
                      {timeRange === "month" && "This Month"}
                      {timeRange === "year" && "This Year"}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTimeRange("day")}>
                      Today
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTimeRange("week")}>
                      This Week
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTimeRange("month")}>
                      This Month
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTimeRange("year")}>
                      This Year
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Select Date
                </Button>
              </div>
            </div>

            <Tabs defaultValue="vitals" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="vitals">Vitals</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="sleep">Sleep</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>

              <TabsContent value="vitals" className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Heart Rate
                      </CardTitle>
                      <CardDescription>Average over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <HealthChart type="heartRate" />
                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Average
                          </p>
                          <p className="text-lg font-bold">72 BPM</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Min</p>
                          <p className="text-lg font-bold">58 BPM</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Max</p>
                          <p className="text-lg font-bold">142 BPM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Blood Pressure
                      </CardTitle>
                      <CardDescription>Systolic/Diastolic</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <HealthChart type="bloodPressure" />
                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Average
                          </p>
                          <p className="text-lg font-bold">120/80</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Min</p>
                          <p className="text-lg font-bold">115/75</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Max</p>
                          <p className="text-lg font-bold">125/85</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Blood Glucose
                      </CardTitle>
                      <CardDescription>Measurements over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <HealthChart type="glucose" />
                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Average
                          </p>
                          <p className="text-lg font-bold">95 mg/dL</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Min</p>
                          <p className="text-lg font-bold">92 mg/dL</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Max</p>
                          <p className="text-lg font-bold">98 mg/dL</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Vital Signs History</CardTitle>
                    <CardDescription>
                      Track your vital signs over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <DashboardChart />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Overview</CardTitle>
                    <CardDescription>
                      Your physical activity metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full bg-muted/30 rounded-md flex items-center justify-center">
                      <Activity className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sleep" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sleep Analysis</CardTitle>
                    <CardDescription>
                      Your sleep patterns and quality
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full bg-muted/30 rounded-md flex items-center justify-center">
                      <Activity className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="nutrition" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Nutrition Tracking</CardTitle>
                    <CardDescription>
                      Your dietary intake and nutrition metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full bg-muted/30 rounded-md flex items-center justify-center">
                      <Activity className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
