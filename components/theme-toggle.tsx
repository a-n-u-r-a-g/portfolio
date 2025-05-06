"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Moon, Sun, Leaf, Palette } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("green")
    } else if (theme === "green") {
      setTheme("blue")
    } else {
      setTheme("light")
    }
  }

  return (
    <motion.div
      className="flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={`${theme === "light" ? "bg-primary/20" : ""} rounded-full transition-all duration-300`}
      >
        <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? "text-primary" : ""}`} />
        <span className="sr-only">Light theme</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`${theme === "dark" ? "bg-primary/20" : ""} rounded-full transition-all duration-300`}
      >
        <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "text-primary" : ""}`} />
        <span className="sr-only">Dark theme</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("green")}
        className={`${theme === "green" ? "bg-primary/20" : ""} rounded-full transition-all duration-300`}
      >
        <Leaf className={`h-[1.2rem] w-[1.2rem] ${theme === "green" ? "text-primary" : ""}`} />
        <span className="sr-only">Green theme</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("blue")}
        className={`${theme === "blue" ? "bg-primary/20" : ""} rounded-full transition-all duration-300`}
      >
        <Palette className={`h-[1.2rem] w-[1.2rem] ${theme === "blue" ? "text-primary" : ""}`} />
        <span className="sr-only">Blue theme</span>
      </Button>

      <div className="flex items-center gap-2 ml-2">
        <Switch id="theme-toggle" checked={theme !== "light"} onCheckedChange={toggleTheme} />
        <Label htmlFor="theme-toggle" className="text-xs font-medium">
          {theme === "light" ? "Light" : theme === "dark" ? "Dark" : theme === "green" ? "Green" : "Blue"}
        </Label>
      </div>
    </motion.div>
  )
}
