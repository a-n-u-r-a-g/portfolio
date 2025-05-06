"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Download, Send, Mail } from "lucide-react"
import { motion } from "framer-motion"
import LocationCarousel from "@/components/location-carousel"
import HomeThemeToggle from "@/components/home-theme-toggle"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto pt-12 md:pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div className="order-2 md:order-1 flex-1" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hey, I&apos;m Anurag</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 overflow-hidden">
            I am a{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: 0.5,
                duration: 0.8,
              }}
            >
              Fullstack Developer
            </motion.span>
            <span className="animate-blink">|</span>
          </h2>

          <p className="text-xl mb-2">
            <span className="font-semibold">AI-ML, Data Analytics, Cybersecurity Enthusiast.</span> Hard-Working,
            Ambitious, and a Fast Learner.
          </p>

          <p className="text-lg mb-6">
            Currently pursuing M.Tech (Integrated) in Computer Science and Engineering with Specialization in Cyber
            Security at Vellore Institute of Technology, Bhopal.
          </p>

          <p className="text-lg mb-8">
            You can talk to me about{" "}
            <span className="font-medium">Cyber Security, Python, Java, Machine Learning, or anything else.</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button className="gap-2">
                  <Send className="h-4 w-4" />
                  Hire Me
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/resume-anurag-gupta.pdf" download>
                <Button variant="secondary" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Theme toggle button */}
          <HomeThemeToggle />
        </motion.div>

        <motion.div className="order-1 md:order-2 flex-shrink-0" variants={itemVariants}>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <Image src="/images/anurag.png" alt="Anurag Gupta" fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mb-12">
        <LocationCarousel />
      </motion.div>

      <motion.div
        className="mt-8 p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-bold mb-4">Featured Project</h3>
        <div className="mb-4">
          <h4 className="text-xl font-semibold">Adaptive Hybrid Ensemble Learning with Explainable AI</h4>
          <p className="text-muted-foreground">
            A hybrid ensemble model combining CNN, Bi-LSTM, Random Forest, Gradient Boost, and XG Boost to enhance
            anomaly detection accuracy in network traffic.
          </p>
        </div>
        <Link href="/projects">
          <Button variant="link" className="p-0">
            View all projects →
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
