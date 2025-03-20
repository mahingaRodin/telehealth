"use client"

import { useState } from "react"
import { Globe, Lock, Moon, Palette, Shield, Sun, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SettingsPage() {
  const [theme, setTheme] = useState("system")
  const [colorScheme, setColorScheme] = useState("blue-green")
  
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="help">Help & Support</TabsTrigger>
        </TabsList>
        
        {/* Account Settings */}
        <TabsContent value="account" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              
              <Button>Update Password</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Manage your connected accounts and services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-muted-foreground">Connected</p>
                  </div>
                </div>
                <Button variant="outline">Disconnect</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Twitter</h3>
                    <p className="text-sm text-muted-foreground">Connected</p>
                  </div>
                </div>
                <Button variant="outline">Disconnect</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Facebook</h3>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button>Connect</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notification Settings */}
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-appointments">Appointment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive reminders about upcoming appointments</p>
                    </div>
                    <Switch id="email-appointments" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-messages">New Messages</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for new messages</p>
                    </div>
                    <Switch id="email-messages" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-results">Test Results</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when new test results are available</p>
                    </div>
                    <Switch id="email-results" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-newsletter">Newsletter</Label>
                      <p className="text-sm text-muted-foreground">Receive our monthly newsletter with health tips</p>
                    </div>
                    <Switch id="email-newsletter" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-appointments">Appointment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive reminders about upcoming appointments</p>
                    </div>
                    <Switch id="push-appointments" defaultChecked />
                  </div>
                  
                  <div className="  defaultChecked />
                  </div>
                  
                  <div className=\"flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-messages"es">New Messages</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for new messages</p>
                    </div>
                    <Switch id="push-messages" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-results">Test Results</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when new test results are available</p>
                    </div>
                    <Switch id="push-results" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-health">Health Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive alerts about important health metrics</p>
                    </div>
                    <Switch id="push-health" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">SMS Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-appointments">Appointment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive SMS reminders about upcoming appointments</p>
                    </div>
                    <Switch id="sms-appointments" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-medication">Medication Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive SMS reminders to take your medication</p>
                    </div>
                    <Switch id="sms-medication" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Appearance Settings */}
        <TabsContent value="appearance" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Manage your theme preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Mode</h3>
                <RadioGroup 
                  defaultValue={theme} 
                  onValueChange={setTheme}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <RadioGroupItem 
                      value="light" 
                      id="theme-light" 
                      className="sr-only" 
                    />
                    <Label
                      htmlFor="theme-light"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <Sun className="mb-3 h-6 w-6" />
                      Light
                    </Label>
                  </div>
                  
                  <div>
                    <RadioGroupItem 
                      value="dark" 
                      id="theme-dark" 
                      className="sr-only" 
                    />
                    <Label
                      htmlFor="theme-dark"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <Moon className="mb-3 h-6 w-6" />
                      Dark
                    </Label>
                  </div>
                  
                  <div>
                    <RadioGroupItem 
                      value="system" 
                      id="theme-system" 
                      className="sr-only" 
                    />
                    <Label
                      htmlFor="theme-system"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <Palette className="mb-3 h-6 w-6" />
                      System
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Color Scheme</h3>
                <RadioGroup 
                  defaultValue={colorScheme} 
                  onValueChange={setColorScheme}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <RadioGroupItem 
                      value="blue-green" 
                      id="color-blue-green" 
                      className="sr-only" 
                    />
                    <Label
                      htmlFor="color-blue-green"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-3 h-6 w-full bg-gradient-to-r from-blue-500 to-green-500 rounded-md" />
                      Blue-Green
                    </Label>
                  </div>
                  
                  <div>
                    <RadioGroupItem 
                      value="purple-pink" 
                      id="color-purple-pink" 
                      className="sr-only" 
                    />
                    <Label
                      htmlFor="color-purple-pink"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-3 h-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md" />
                      Purple-Pink
                    </Label>
                  </div>
                  
                  <div>
                    <RadioGroupItem 
                      value="orange-red" 
                      id="color-orange-red" 
                      className="sr-only" 
                    />
                    <Label
                      htmlFor="color-orange-red"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-3 h-6 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-md" />
                      Orange-Red
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Font Size</h3>
                <div className="grid grid-cols-4 gap-4">
                  <Button variant="outline" size="sm" className="h-10">Small</Button>
                  <Button variant="outline" size="sm" className="h-10 bg-muted">Medium</Button>
                  <Button variant="outline" size="sm" className="h-10">Large</Button>
                  <Button variant="outline" size="sm" className="h-10">Extra Large</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Privacy Settings */}
        <TabsContent value="privacy" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Data Sharing</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="share-providers">Healthcare Providers</Label>
                      <p className="text-sm text-muted-foreground">Share your health data with your healthcare providers</p>
                    </div>
                    <Switch id="share-providers" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="share-research">Medical Research</Label>
                      <p className="text-sm text-muted-foreground">Allow anonymous use of your data for medical research</p>
                    </div>
                    <Switch id="share-research" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="share-insurance">Insurance Providers</Label>
                      <p className="text-sm text-muted-foreground">Share your health data with your insurance provider</p>
                    </div>
                    <Switch id="share-insurance" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Account Privacy</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="login-history">Login History</Label>
                      <p className="text-sm text-muted-foreground">Keep a record of devices that have logged into your account</p>
                    </div>
                    <Switch id="login-history" defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Data Management</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Lock className="mr-2 h-4 w-4" />
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Shield className="mr-2 h-4 w-4" />
                    Privacy Policy
                  </Button>
                  <Button variant="destructive" className="w-full sm:w-auto">
                    Delete My Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Help & Support */}
        <TabsContent value="help" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Help & Support</CardTitle>
              <CardDescription>Get help with using the app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Frequently Asked Questions</h3>
                <div className="space-y-3 rounded-lg border p-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">How do I schedule an appointment?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can schedule an appointment by navigating to the Appointments tab and clicking on "Schedule New Appointment".
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">How do I message my doctor?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can message your doctor by going to the Messages tab and selecting your doctor from the list of conversations.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">How do I view my test results?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can view your test results by going to the Health Tracking tab and selecting the relevant test from your records.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Contact Support</h3>
                <div className="space-y-3">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="support-name">Name</Label>
                      <Input id="support-name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="support-email">Email</Label>
                      <Input id="support-email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="support-subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="support-subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="account">Account Problem</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="support-message">Message</Label>
                    <textarea
                      id="support-message"
                      placeholder="Describe your issue or question"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                    Submit Support Request
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Additional Resources</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button variant="outline" className="justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    Visit Help Center
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Community Forums
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

