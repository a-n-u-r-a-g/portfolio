import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function MailPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <Mail className="h-16 w-16 text-primary mb-4" />
      <h1 className="text-2xl font-bold mb-2">Contact via Email</h1>
      <p className="text-muted-foreground mb-6">You can reach me at anurag210103@gmail.com</p>
      <Link href="mailto:anurag210103@gmail.com">
        <Button>Send Email</Button>
      </Link>
    </div>
  )
}
