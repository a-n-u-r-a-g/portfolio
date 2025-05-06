"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, User, Code, Mail, Wrench, Github, Linkedin, Twitter, Instagram, Code2 } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills & Tools", href: "/skills", icon: Wrench },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Contact", href: "/contact", icon: Mail },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/anuraggupta77/", icon: Linkedin },
  { name: "Github", href: "https://github.com/a-n-u-r-a-g/", icon: Github },
  { name: "Twitter", href: "https://x.com/AnuragG05560767", icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com/_anurag___gupta_/", icon: Instagram },
  { name: "LeetCode", href: "https://leetcode.com/u/ANURAG_GUPTA_20MEI10077/", icon: Code2 },
  { name: "GeeksForGeeks", href: "https://www.geeksforgeeks.org/user/anuraggux9lh/", icon: Code },
]

const sidebarVariants = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      className="w-64 border-r border-border bg-background/80 backdrop-blur-sm h-screen sticky top-0 overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="flex flex-col h-full">
        <div className="p-6">
          <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
            <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex items-center justify-center">
              <Image src="/images/tiger-logo.png" alt="Tiger Logo" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <h3 className="font-medium">Anurag Gupta</h3>
              {/* Removed "Cyber Security" text as requested */}
            </div>
          </motion.div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300",
                      isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:translate-x-1",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </nav>
        </div>

        <motion.div className="mt-auto p-6 border-t border-border" variants={itemVariants}>
          <h4 className="text-sm font-medium mb-3">Connect</h4>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-all duration-300 hover:scale-110 hover:text-primary"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              )
            })}
          </div>
          <div className="mt-4 text-xs text-muted-foreground">© 2025 Anurag Gupta</div>
        </motion.div>
      </div>
    </motion.aside>
  )
}
