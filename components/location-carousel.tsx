"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const locations = [
  {
    city: "Pune",
    image: "/images/cities/pune.png",
  },
  {
    city: "Bangalore",
    image: "/images/cities/bangalore.png",
  },
  {
    city: "Gurugram",
    image: "/images/cities/gurugram.png",
  },
  {
    city: "Noida",
    image: "/images/cities/noida.png",
  },
  {
    city: "Hyderabad",
    image: "/images/cities/hyderabad.png",
  },
]

export default function LocationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="overflow-hidden border-primary/20">
      <CardContent className="p-0 relative">
        <div className="relative h-[200px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={locations[currentIndex].image || "/placeholder.svg"}
                alt={`${locations[currentIndex].city} city view`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="h-5 w-5 text-primary" />
              <motion.h3
                key={locations[currentIndex].city}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-semibold"
              >
                Available to work in {locations[currentIndex].city}
              </motion.h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 p-2">
          {locations.map((_, index) => (
            <span
              key={index}
              className={`block h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-primary/30"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
