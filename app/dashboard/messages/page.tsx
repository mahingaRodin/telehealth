"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ChevronDown, Clock, ImageIcon, Paperclip, Phone, Search, Send, Video } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for conversations
const conversations = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Cardiologist",
    lastMessage: "Your latest test results look good. Keep up the good work!",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Endocrinologist",
    lastMessage: "Let's schedule a follow-up appointment next week.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Neurologist",
    lastMessage: "How are you feeling after starting the new medication?",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Pulmonologist",
    lastMessage: "Your breathing exercises are showing good progress.",
    time: "Mar 18",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Nurse Lisa Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Primary Care",
    lastMessage: "Don't forget to take your medication tonight.",
    time: "Mar 17",
    unread: 0,
    online: true,
  },
]

// Sample messages for a conversation
const messages = [
  {
    id: 1,
    sender: "doctor",
    content: "Hello John, how are you feeling today?",
    time: "10:00 AM",
    read: true,
  },
  {
    id: 2,
    sender: "user",
    content: "Hi Dr. Johnson, I'm feeling much better. The new medication seems to be working well.",
    time: "10:05 AM",
    read: true,
  },
  {
    id: 3,
    sender: "doctor",
    content: "That's great to hear! Any side effects that you've noticed?",
    time: "10:10 AM",
    read: true,
  },
  {
    id: 4,
    sender: "user",
    content: "Just a bit of drowsiness in the first few days, but it's gone now.",
    time: "10:15 AM",
    read: true,
  },
  {
    id: 5,
    sender: "doctor",
    content:
      "That's normal and should continue to improve. I've reviewed your latest test results and everything looks good. Your blood pressure is now within the normal range.",
    time: "10:20 AM",
    read: true,
  },
  {
    id: 6,
    sender: "doctor",
    content:
      "Keep up with the medication and the lifestyle changes we discussed. I'd like to see you for a follow-up in about a month.",
    time: "10:25 AM",
    read: true,
  },
  {
    id: 7,
    sender: "user",
    content: "That sounds good. Thank you for your help, Dr. Johnson!",
    time: "10:28 AM",
    read: true,
  },
  {
    id: 8,
    sender: "doctor",
    content: "You're welcome! Don't hesitate to message me if you have any concerns before our next appointment.",
    time: "10:30 AM",
    read: false,
  },
]

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you would send the message to the backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col p-0">
      <div className="flex h-full">
        {/* Sidebar - Conversation List */}
        <div className={`border-r w-full md:w-80 flex-shrink-0 ${activeConversation ? "hidden md:block" : "block"}`}>
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold mb-4">Messages</h1>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="px-4 pt-2">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="m-0">
              <div className="divide-y overflow-auto" style={{ maxHeight: "calc(100vh - 12rem)" }}>
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                      activeConversation === conversation.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setActiveConversation(conversation.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate">{conversation.name}</h3>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                            {conversation.time}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{conversation.specialty}</p>
                        <p className="text-sm truncate mt-1">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && <Badge className="ml-2 bg-primary">{conversation.unread}</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unread" className="m-0">
              <div className="divide-y overflow-auto" style={{ maxHeight: "calc(100vh - 12rem)" }}>
                {filteredConversations
                  .filter((c) => c.unread > 0)
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                        activeConversation === conversation.id ? "bg-muted" : ""
                      }`}
                      onClick={() => setActiveConversation(conversation.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conversation.avatar} alt={conversation.name} />
                            <AvatarFallback>
                              {conversation.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">{conversation.name}</h3>
                            <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                              {conversation.time}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">{conversation.specialty}</p>
                          <p className="text-sm truncate mt-1">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && <Badge className="ml-2 bg-primary">{conversation.unread}</Badge>}
                      </div>
                    </div>
                  ))}
                {filteredConversations.filter((c) => c.unread > 0).length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    <p>No unread messages</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="archived" className="m-0">
              <div className="p-8 text-center text-muted-foreground">
                <p>No archived conversations</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Main Chat Area */}
        {activeConversation ? (
          <div className={`flex-1 flex flex-col ${activeConversation ? "block" : "hidden md:block"}`}>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setActiveConversation(null)}>
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={conversations.find((c) => c.id === activeConversation)?.avatar}
                      alt={conversations.find((c) => c.id === activeConversation)?.name}
                    />
                    <AvatarFallback>
                      {conversations
                        .find((c) => c.id === activeConversation)
                        ?.name.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {conversations.find((c) => c.id === activeConversation)?.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                  )}
                </div>
                <div>
                  <h2 className="font-medium">{conversations.find((c) => c.id === activeConversation)?.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {conversations.find((c) => c.id === activeConversation)?.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <ChevronDown className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View profile</DropdownMenuItem>
                    <DropdownMenuItem>Search in conversation</DropdownMenuItem>
                    <DropdownMenuItem>Mute notifications</DropdownMenuItem>
                    <DropdownMenuItem>Block contact</DropdownMenuItem>
                    <DropdownMenuItem>Clear chat</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-blue-50/50 to-green-50/50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {message.sender === "doctor" && (
                    <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                      <AvatarImage
                        src={conversations.find((c) => c.id === activeConversation)?.avatar}
                        alt={conversations.find((c) => c.id === activeConversation)?.name}
                      />
                      <AvatarFallback>
                        {conversations
                          .find((c) => c.id === activeConversation)
                          ?.name.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="space-y-1 max-w-[80%]">
                    <Card
                      className={`
                      ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}
                      shadow-sm
                    `}
                    >
                      <CardContent className="p-3">
                        <p className="text-sm">{message.content}</p>
                      </CardContent>
                    </Card>
                    <div
                      className={`flex items-center text-xs text-muted-foreground ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{message.time}</span>
                      {message.sender === "user" && <span className="ml-1">{message.read ? "✓✓" : "✓"}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Type a message..."
                    className="min-h-[2.5rem] py-4 resize-none"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                    size="icon"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-muted/10">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Select a conversation"
                width={120}
                height={120}
                className="mx-auto mb-4 opacity-50"
              />
              <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
              <p className="text-muted-foreground">Choose a healthcare provider to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

