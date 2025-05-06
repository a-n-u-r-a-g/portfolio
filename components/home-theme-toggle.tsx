"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Palette } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomeThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("blue")
    } else {
      setTheme("dark")
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Button onClick={toggleTheme} variant="outline" size="sm" className="gap-2 border-primary/30">
        <Palette className="h-4 w-4" />
        <span>{theme === "dark" ? "Switch to Blue" : "Switch to Green"}</span>
      </Button>
    </motion.div>
  )
}
