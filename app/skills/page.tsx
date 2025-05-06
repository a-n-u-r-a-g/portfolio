"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "/images/skills/python.svg" },
        { name: "Java", icon: "/images/skills/java.svg" },
        { name: "JavaScript", icon: "/images/skills/javascript.svg" },
        { name: "TypeScript", icon: "/images/skills/typescript.svg" },
        { name: "HTML", icon: "/images/skills/html.svg" },
        { name: "CSS", icon: "/images/skills/css.svg" },
        { name: "SQL", icon: "/images/skills/sql.svg" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "/images/skills/react.svg" },
        { name: "Node.js", icon: "/images/skills/nodejs.svg" },
        { name: "Next.js", icon: "/images/skills/nextjs.svg" },
        { name: "Express", icon: "/images/skills/express.svg" },
        { name: "TensorFlow", icon: "/images/skills/tensorflow.svg" },
        { name: "PyTorch", icon: "/images/skills/pytorch.svg" },
        { name: "Pandas", icon: "/images/skills/pandas.svg" },
        { name: "NumPy", icon: "/images/skills/numpy.svg" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "/images/skills/git.svg" },
        { name: "Docker", icon: "/images/skills/docker.svg" },
        { name: "Kubernetes", icon: "/images/skills/kubernetes.svg" },
        { name: "AWS", icon: "/images/skills/aws.svg" },
        { name: "Linux", icon: "/images/skills/linux.svg" },
        { name: "VS Code", icon: "/images/skills/vscode.svg" },
        { name: "Jupyter", icon: "/images/skills/jupyter.svg" },
        { name: "Tableau", icon: "/images/skills/tableau.svg" },
        { name: "Power BI", icon: "/images/skills/powerbi.svg" },
        { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
        { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
      ],
    },
  ]

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
    <motion.div className="max-w-4xl mx-auto py-12" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
        Skills & Tools
      </motion.h1>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center justify-center text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 mb-2 bg-muted rounded-lg flex items-center justify-center p-2">
                        <div className="w-8 h-8 relative">
                          {/* Placeholder for skill icon */}
                          <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xs">
                            {skill.name.substring(0, 2).toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
