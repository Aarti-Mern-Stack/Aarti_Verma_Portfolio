"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import styles from "./projects-section.module.css"

const projects = [
  {
    id: 1,
    title: "Salesforce B2B E-Commerce Project",
    category: "Full-Stack Development",
    description:
      "Working on a B2B system leveraging Salesforce integrated with a MERN stack (MySQL, Express.js, React.js, and Node.js).",
    technologies: ["Salesforce", "React.js", "Node.js", "MySQL", "SOQL", "Express.js"],
    features: [
      "Dynamic user interface in React.js",
      "Scalable backend logic using Node.js with MySQL",
      "Salesforce Object Query Language (SOQL) integration",
      "Seamless data integration and process automation",
    ],
    status: "In Progress",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "E-Commerce Website Project",
    category: "MERN Stack",
    description:
      "Created an intuitive e-commerce platform using the MERN stack, incorporating features to support robust CRUD operations.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RESTful API"],
    features: [
      "Product display pages with advanced search and filtering",
      "Secured user accounts with JWT authentication",
      "Role-based access for customers and administrators",
      "Shopping cart with real-time inventory management",
      "Complete order management system",
    ],
    status: "Completed",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "E-Commerce with Next.js & Shopify",
    category: "Next.js Integration",
    description:
      "Integrated Shopify API into a Next.js e-commerce platform to manage product listings and real-time inventory updates.",
    technologies: ["Next.js", "Shopify API", "React.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic product pages using Shopify's API",
      "Real-time inventory updates and pricing",
      "Shopify checkout API integration",
      "Secure payment processing",
      "Responsive design with modern UI/UX",
    ],
    status: "Completed",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items one by one
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Featured Projects</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>Showcasing my technical expertise through real-world applications</p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectCard} ${visibleItems.includes(index) ? styles.visible : ""}`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className={styles.cardImage}>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className={styles.imageOverlay}>
                    <div className={`${styles.status} ${styles[project.status.toLowerCase().replace(" ", "")]}`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>

                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={styles.techMore}>+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className={`${styles.expandedContent} ${selectedProject === project.id ? styles.expanded : ""}`}>
                    <div className={styles.featuresSection}>
                      <h4>Key Features</h4>
                      <ul className={styles.featuresList}>
                        {project.features.map((feature, idx) => (
                          <li key={idx} className={styles.feature}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.allTechnologies}>
                      <h4>Technologies Used</h4>
                      <div className={styles.techGrid}>
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className={styles.techFull}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    <Button
                      variant="outline"
                      className={styles.expandButton}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(selectedProject === project.id ? null : project.id)
                      }}
                    >
                      {selectedProject === project.id ? "Show Less" : "Learn More"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
