"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import styles from "./hero-section.module.css"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.textContent} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className={styles.name}>
              <span className={styles.firstName}>Aarti</span>
              <span className={styles.lastName}>Verma</span>
            </h1>

            <h2 className={styles.title}>
              <span className={styles.titleText}>MERN Stack Developer</span>
              <span className={styles.cursor}>|</span>
            </h2>

            <p className={styles.description}>
              Passionate about creating intuitive and responsive web applications with expertise in full-stack
              development. I transform ideas into digital experiences that make a difference.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📧</span>
                <span>vermaaarti677@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📱</span>
                <span>+91-8727871307</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <span>Mohali, Punjab</span>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button onClick={scrollToProjects} className={styles.primaryButton}>
                View My Work
              </Button>
              <Button onClick={scrollToContact} variant="outline" className={styles.secondaryButton}>
                Get In Touch
              </Button>
            </div>
          </div>

          <div className={`${styles.visualContent} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.profileCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.avatar}>
                  <span className={styles.avatarText}>AV</span>
                </div>
                <div className={styles.cardInfo}>
                  <h3>Aarti Verma</h3>
                  <p>MERN-Stack Developer</p>
                  <div className={styles.skills}>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.floatingElements}>
              <div className={`${styles.floatingElement} ${styles.element1}`}>
                <span>💻</span>
              </div>
              <div className={`${styles.floatingElement} ${styles.element2}`}>
                <span>⚛️</span>
              </div>
              <div className={`${styles.floatingElement} ${styles.element3}`}>
                <span>🚀</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient3}></div>
      </div>
    </section>
  )
}
