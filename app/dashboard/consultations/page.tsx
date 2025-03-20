import { Star, Video } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConsultationsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 124,
      available: true,
      image: "/placeholder.svg?height=100&width=100",
      nextAvailable: "Today, 4:00 PM",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Endocrinologist",
      rating: 4.8,
      reviews: 98,
      available: true,
      image: "/placeholder.svg?height=100&width=100",
      nextAvailable: "Tomorrow, 10:00 AM",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Neurologist",
      rating: 4.7,
      reviews: 87,
      available: false,
      image: "/placeholder.svg?height=100&width=100",
      nextAvailable: "Mar 22, 2:30 PM",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Pulmonologist",
      rating: 4.9,
      reviews: 112,
      available: true,
      image: "/placeholder.svg?height=100&width=100",
      nextAvailable: "Today, 5:30 PM",
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Dermatologist",
      rating: 4.6,
      reviews: 76,
      available: false,
      image: "/placeholder.svg?height=100&width=100",
      nextAvailable: "Mar 23, 11:00 AM",
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      specialty: "Gastroenterologist",
      rating: 4.8,
      reviews: 92,
      available: true,
      image: "/placeholder.svg?height=100&width=100",
      nextAvailable: "Tomorrow, 3:15 PM",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Find a Specialist</h1>
        <div className="relative w-full max-w-sm">
          <Input placeholder="Search by name or specialty" className="pr-10" />
          <Button variant="ghost" size="icon" className="absolute right-0 top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Specialists</TabsTrigger>
          <TabsTrigger value="cardiology">Cardiology</TabsTrigger>
          <TabsTrigger value="endocrinology">Endocrinology</TabsTrigger>
          <TabsTrigger value="neurology">Neurology</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-40 w-full bg-gradient-to-r from-blue-100 to-green-100">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end p-4">
                      <div className="mr-4 h-20 w-20 overflow-hidden rounded-full border-4 border-background bg-background">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      <div className={`h-3 w-3 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                    <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">Next Available</p>
                    <p className="font-medium">{doctor.nextAvailable}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 p-4 pt-0">
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button className="flex-1">
                    <Video className="mr-2 h-4 w-4" />
                    Book
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cardiology" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors
              .filter((doctor) => doctor.specialty === "Cardiologist")
              .map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40 w-full bg-gradient-to-r from-blue-100 to-green-100">
                      <div className="absolute bottom-0 left-0 right-0 flex items-end p-4">
                        <div className="mr-4 h-20 w-20 overflow-hidden rounded-full border-4 border-background bg-background">
                          <Image
                            src={doctor.image || "/placeholder.svg"}
                            alt={doctor.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold">{doctor.name}</h3>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        </div>
                        <div className={`h-3 w-3 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-muted-foreground">Next Available</p>
                      <p className="font-medium">{doctor.nextAvailable}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 pt-0">
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                    <Button className="flex-1">
                      <Video className="mr-2 h-4 w-4" />
                      Book
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="endocrinology" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors
              .filter((doctor) => doctor.specialty === "Endocrinologist")
              .map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40 w-full bg-gradient-to-r from-blue-100 to-green-100">
                      <div className="absolute bottom-0 left-0 right-0 flex items-end p-4">
                        <div className="mr-4 h-20 w-20 overflow-hidden rounded-full border-4 border-background bg-background">
                          <Image
                            src={doctor.image || "/placeholder.svg"}
                            alt={doctor.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold">{doctor.name}</h3>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        </div>
                        <div className={`h-3 w-3 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-muted-foreground">Next Available</p>
                      <p className="font-medium">{doctor.nextAvailable}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 pt-0">
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                    <Button className="flex-1">
                      <Video className="mr-2 h-4 w-4" />
                      Book
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="neurology" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors
              .filter((doctor) => doctor.specialty === "Neurologist")
              .map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40 w-full bg-gradient-to-r from-blue-100 to-green-100">
                      <div className="absolute bottom-0 left-0 right-0 flex items-end p-4">
                        <div className="mr-4 h-20 w-20 overflow-hidden rounded-full border-4 border-background bg-background">
                          <Image
                            src={doctor.image || "/placeholder.svg"}
                            alt={doctor.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold">{doctor.name}</h3>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        </div>
                        <div className={`h-3 w-3 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-muted-foreground">Next Available</p>
                      <p className="font-medium">{doctor.nextAvailable}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-4 pt-0">
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                    <Button className="flex-1">
                      <Video className="mr-2 h-4 w-4" />
                      Book
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

