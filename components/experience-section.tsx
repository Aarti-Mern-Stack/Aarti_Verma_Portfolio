"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./experience-section.module.css"

const experiences = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "DesignersX",
    location: "Mohali",
    period: "October 2024 – Present",
    type: "Current Position",
    responsibilities: [
      "Developed and maintained full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) to build dynamic, scalable, and efficient web applications",
      "Built RESTful APIs and integrated business logic using Node.js and Express.js, ensuring smooth interaction between the front-end and back-end",
      "Worked with MySQL and MongoDB for database management, writing optimized SQL queries and designing database schemas",
      "Implemented user authentication and authorization using JWT (JSON Web Tokens) and OAuth, ensuring secure login, user sessions, and role-based access control",
    ],
  },
  {
    id: 2,
    title: "ReactJS Developer",
    company: "VQCodes Software solutions LLP",
    location: "Mohali",
    period: "April 2024 – September 2024",
    type: "Previous Role",
    responsibilities: [
      "Work closely with backend developers to integrate APIs and manage data flow between the front-end and back-end using RESTful services or GraphQL",
      "Creating responsive, user-friendly interfaces with modern Front-end & Back-end technologies",
      "Focus on optimizing the performance of React applications through code-splitting, lazy loading, and other best practices",
      "Use Git for version control and collaborate with team members using platforms like GitHub or GitLab",
      "Design reusable and modular React components, ensuring code quality, reusability, and maintainability",
    ],
  },
  {
    id: 3,
    title: "MERN Stack Trainer",
    company: "A2IT Pvt Ltd",
    location: "Mohali",
    period: "October 2022 – March 2024",
    type: "Training Role",
    responsibilities: [
      "Curriculum Development: Design detailed training materials and course outlines covering MongoDB, Express.js, React.js, and Node.js",
      "Instruction Delivery: Lead engaging lectures, workshops, and hands-on coding sessions to teach students how to build and deploy full-stack web applications",
      "Student Mentoring: Offer personalized support to help students troubleshoot, enhance their coding skills, and achieve their career objectives",
    ],
  },
]

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items one by one
          experiences.forEach((_, index) => {
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
    <section id="experience" ref={sectionRef} className={styles.experience}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Work Experience</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>My professional journey in software development</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`${styles.timelineItem} ${visibleItems.includes(index) ? styles.visible : ""} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.markerDot}></div>
                </div>

                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.period}>{exp.period}</div>
                    <div className={`${styles.type} ${styles[exp.type.toLowerCase().replace(" ", "")]}`}>
                      {exp.type}
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <div className={styles.companyInfo}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.location}>📍 {exp.location}</span>
                    </div>

                    <ul className={styles.responsibilities}>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className={styles.responsibility}>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
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
