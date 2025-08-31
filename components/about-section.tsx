"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./about-section.module.css"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.textContent}>
              <div className={styles.profileSummary}>
                <h3 className={styles.summaryTitle}>Profile Summary</h3>
                <p className={styles.summaryText}>
                  Enthusiastic and detail-oriented BCA graduate with a solid foundation in software and web development.
                  Experienced in full-stack development (MERN) and passionate about creating intuitive and responsive
                  web applications. Seeking to leverage my skills in a dynamic IT environment to deliver cutting-edge
                  solutions and drive innovation.
                </p>
              </div>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🎓</div>
                  <div className={styles.highlightContent}>
                    <h4>Education</h4>
                    <p>BCA Graduate from Punjabi University Patiala</p>
                  </div>
                </div>

                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>💼</div>
                  <div className={styles.highlightContent}>
                    <h4>Experience</h4>
                    <p>3+ Years in Full-Stack Development</p>
                  </div>
                </div>

                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🚀</div>
                  <div className={styles.highlightContent}>
                    <h4>Passion</h4>
                    <p>Creating Innovative Web Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.visualContent}>
              <div className={styles.statsCard}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>3+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Projects Completed</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>3</div>
                  <div className={styles.statLabel}>Companies Worked</div>
                </div>
              </div>

              <div className={styles.skillsPreview}>
                <h4>Core Technologies</h4>
                <div className={styles.techStack}>
                  <span className={styles.tech}>React.js</span>
                  <span className={styles.tech}>Node.js</span>
                  <span className={styles.tech}>MongoDB</span>
                  <span className={styles.tech}>Express.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
