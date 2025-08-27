"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import styles from "./skills-section.module.css"

const technicalSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "RESTful API", level: 85 },
      { name: "Authentication", level: 82 },
      { name: "WebSocket", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "NoSQL", level: 82 },
      { name: "SOQL", level: 78 },
    ],
  },
]

const softSkills = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Time Management", icon: "⏰" },
  { name: "Communication", icon: "💬" },
  { name: "Collaboration", icon: "🤝" },
  { name: "Punctuality", icon: "⚡" },
  { name: "Continuous Learning", icon: "📚" },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars one by one
          const allSkills = technicalSkills.flatMap((category) => category.skills.map((skill) => skill.name))
          allSkills.forEach((skillName, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, skillName])
            }, index * 100)
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
    <section id="skills" ref={sectionRef} className={styles.skills}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Skills & Expertise</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>Technical proficiency and soft skills that drive my success</p>
          </div>

          <div className={styles.skillsContent}>
            <div className={styles.technicalSkills}>
              <h3 className={styles.sectionTitle}>Technical Skills</h3>
              <div className={styles.skillsGrid}>
                {technicalSkills.map((category, categoryIndex) => (
                  <div key={category.category} className={styles.skillCategory}>
                    <h4 className={styles.categoryTitle}>{category.category}</h4>
                    <div className={styles.skillsList}>
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className={styles.skillItem}>
                          <div className={styles.skillHeader}>
                            <span className={styles.skillName}>{skill.name}</span>
                            <span className={styles.skillPercentage}>{skill.level}%</span>
                          </div>
                          <div className={styles.skillBar}>
                            <div
                              className={`${styles.skillProgress} ${
                                animatedSkills.includes(skill.name) ? styles.animated : ""
                              }`}
                              style={{ "--skill-level": `${skill.level}%` } as React.CSSProperties}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.softSkills}>
              <h3 className={styles.sectionTitle}>Soft Skills</h3>
              <div className={styles.softSkillsGrid}>
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`${styles.softSkillItem} ${isVisible ? styles.visible : ""}`}
                    style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
                  >
                    <div className={styles.softSkillIcon}>{skill.icon}</div>
                    <span className={styles.softSkillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.certifications}>
            <h3 className={styles.sectionTitle}>Certifications & Achievements</h3>
            <div className={styles.certificationsGrid}>
              <div className={styles.certificationItem}>
                <div className={styles.certIcon}>🏆</div>
                <div className={styles.certContent}>
                  <h4>Frontend Training Certificate</h4>
                  <p>A2IT Pvt Ltd</p>
                </div>
              </div>
              <div className={styles.certificationItem}>
                <div className={styles.certIcon}>🎓</div>
                <div className={styles.certContent}>
                  <h4>3rd Position in 12th Class</h4>
                  <p>89% - SD Model School Rajpura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
