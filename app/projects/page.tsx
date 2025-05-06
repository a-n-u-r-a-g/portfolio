"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Insight-Pro: eCommerce Analytics Suite",
      description:
        "Developed and optimized SQL/Snowflake queries to extract, transform, and visualize data, enabling accurate reporting on customer trends, product performance, and sales forecasting, aligning with data-driven decision-making strategies.",
      technologies: ["Python", "SQL", "Power BI", "Google Analytics", "AWS", "Excel"],
      period: "Oct. 2024 - Nov. 2024",
      points: [
        "Designed and implemented automated data pipelines in SQL/Snowflake to streamline data processing workflows, improving efficiency in expense tracking, financial settlements, and operational analytics.",
        "Utilized SQL and Power BI to create dynamic dashboards, transforming raw data into actionable insights for senior management, supporting investment and business analytics initiatives.",
        "Worked with diverse teams to enhance data integrity, maintain compliance with financial policies, and support process ownership, ensuring efficient data management aligned with industry best practices.",
      ],
    },
    {
      title: "Adaptive Hybrid Ensemble Learning with Explainable AI for Anomaly Detection",
      description:
        "Designed and implemented a hybrid ensemble model combining CNN, Bi-LSTM, Random Forest, Gradient Boost, and XG Boost to enhance anomaly detection accuracy in network traffic.",
      technologies: ["Python", "Machine Learning", "Deep Learning"],
      period: "Aug. 2024 - Oct. 2024",
      points: [
        "Integrated SHAP-based Explainable AI techniques to improve model transparency and interpretability, supporting critical decision-making in cybersecurity operations.",
        "Developed a scalable pipeline for preprocessing, multi-model classification, and real-time explainability, tailored for high-volume and heterogeneous network environments.",
        "Achieved 99.98% accuracy on CICIDS2017 and 97.71% on UNSW-NB15 with false positive rates as low as 0.02% and 0.01%, validated using ROC analysis and SHAP visualizations.",
      ],
    },
    {
      title: "Container Identity and Access Management",
      description:
        "Designed and implemented a secure container identity framework by generating hashed identifiers (Docker IDs, container IDs) linked to access privileges, ensuring granular identity verification in runtime and testing environments.",
      technologies: ["Python", "Next JS", "JSON", "Docker", "Bash Scripting"],
      period: "Aug. 2023 - Oct. 2023",
      points: [
        "Developed a Python-based logic layer integrated with Docker and Bash to automate identity generation, access mapping, and secure role-based controls across containerized services.",
        "Engineered a modular front-end using Next.js for real-time visibility into container access rights and lifecycle events, enhancing security posture and operational transparency.",
        "Improved container runtime security, isolation, and auditability in DevSecOps pipelines by enforcing dynamic identity binding—resulting in a 40% reduction in unauthorized access attempts and a 30% improvement in audit traceability.",
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
        Projects
      </motion.h1>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.period}</span>
                </div>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Key Achievements</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm flex items-center text-primary hover:underline group">
                  <span>View Project</span>
                  <ExternalLink className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
