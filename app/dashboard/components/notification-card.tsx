import { Bell, Heart, Target } from "lucide-react"

interface NotificationCardProps {
  title: string
  description: string
  time: string
  type: "reminder" | "tip" | "goal"
}

export function NotificationCard({ title, description, time, type }: NotificationCardProps) {
  const getIcon = () => {
    switch (type) {
      case "reminder":
        return <Bell className="h-4 w-4" />
      case "tip":
        return <Heart className="h-4 w-4" />
      case "goal":
        return <Target className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getColor = () => {
    switch (type) {
      case "reminder":
        return "bg-blue-100 text-blue-600"
      case "tip":
        return "bg-green-100 text-green-600"
      case "goal":
        return "bg-amber-100 text-amber-600"
      default:
        return "bg-primary/10 text-primary"
    }
  }

  const getBorderColor = () => {
    switch (type) {
      case "reminder":
        return "border-blue-100"
      case "tip":
        return "border-green-100"
      case "goal":
        return "border-amber-100"
      default:
        return "border-muted"
    }
  }

  const getGradient = () => {
    switch (type) {
      case "reminder":
        return "bg-gradient-to-br from-blue-50 to-blue-100/30"
      case "tip":
        return "bg-gradient-to-br from-green-50 to-green-100/30"
      case "goal":
        return "bg-gradient-to-br from-amber-50 to-amber-100/30"
      default:
        return ""
    }
  }

  return (
    <div className={`flex gap-3 p-3 rounded-lg border ${getBorderColor()} ${getGradient()}`}>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${getColor()}`}>{getIcon()}</div>
      <div className="grid gap-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}

