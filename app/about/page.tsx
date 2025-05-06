"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.div className="max-w-3xl mx-auto py-12" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
        About Me
      </motion.h1>

      <div className="space-y-8">
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground mb-4">
            I am a Cyber Security specialist and developer currently pursuing M.Tech (Integrated) in Computer Science
            and Engineering with Specialization in Cyber Security at Vellore Institute of Technology, Bhopal. With a
            strong foundation in both technical and analytical skills, I am passionate about solving complex problems
            and creating secure, efficient solutions.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Vellore Institute of Technology, Bhopal</h3>
                      <p className="text-sm text-muted-foreground">
                        M.Tech (Integrated) - Computer Science and Engineering with Specialization in Cyber Security
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Oct. 2020 - Jun. 2025</p>
                      <p className="text-sm font-medium">CGPA: 8.76</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">D.A.V. Public School</h3>
                      <p className="text-sm text-muted-foreground">XII</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Apr. 2019 - May 2020</p>
                      <p className="text-sm font-medium">Percentage: 74.6%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">D.A.V. Public School</h3>
                      <p className="text-sm text-muted-foreground">X</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Apr. 2017 - May 2018</p>
                      <p className="text-sm font-medium">Percentage: 76.4%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>AWS Certified Cloud Practitioner | Amazon Web Service (Dec. 2023)</li>
            <li>The Bits and Bytes of Computer Networking by Google | Coursera (Apr. 2023)</li>
            <li>Junior Cybersecurity Analyst Career Path | Cisco (Apr. 2022)</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Published a paper entitled "Hybrid Ensemble Learning with Explainable AI for Anomaly Detection in Network
              Traffic"
            </li>
            <li>Earned 5 Stars in Java, Python, and C/C++ on Hackerrank</li>
            <li>Solved 200+ problems on Leetcode and 300+ problems on Geeks for Geeks</li>
            <li>Certified Acquiring Data by NASSCOM & Skill India</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Leadership & Extracurricular</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium">Sports Selection – AdVITya:</span> Coordinated and supervised for a smooth
              and fair competition during AdVITya'23
            </li>
            <li>
              <span className="font-medium">Executive Coordinator, Techno-Mech Club:</span> Directed club activities,
              orchestrated events, and enhanced member engagement through various technical and mechanical projects
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-4">Languages & Interests</h2>
          <p className="text-muted-foreground">
            <span className="font-medium">Languages:</span> English, Hindi
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium">Interests:</span> Market Analysis (Fintech), Geopolitics, Badminton, Chess,
            Podcast
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
