"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import styles from "./contact-section.module.css"

export default function ContactSection() {
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

  const handleEmailClick = () => {
    window.location.href = "mailto:vermaaarti677@gmail.com"
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+918727871307"
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/aarti-verma-829b4a252", "_blank")
  }

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Let's Connect</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>Ready to bring your ideas to life? Let's discuss your next project!</p>
          </div>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📧</div>
                <div className={styles.cardContent}>
                  <h3>Email</h3>
                  <p>vermaaarti677@gmail.com</p>
                  <Button onClick={handleEmailClick} className={styles.contactButton}>
                    Send Email
                  </Button>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📱</div>
                <div className={styles.cardContent}>
                  <h3>Phone</h3>
                  <p>+91-8727871307</p>
                  <Button onClick={handlePhoneClick} variant="outline" className={styles.contactButton}>
                    Call Now
                  </Button>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>💼</div>
                <div className={styles.cardContent}>
                  <h3>LinkedIn</h3>
                  <p>Connect professionally</p>
                  <Button onClick={handleLinkedInClick} variant="outline" className={styles.contactButton}>
                    View Profile
                  </Button>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📍</div>
                <div className={styles.cardContent}>
                  <h3>Location</h3>
                  <p>Mohali, Punjab, India</p>
                  <Button variant="outline" className={styles.contactButton} disabled>
                    Available for Remote
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.personalInfo}>
              <div className={styles.infoCard}>
                <h3>About Working With Me</h3>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🚀</span>
                    <div>
                      <h4>Quick Turnaround</h4>
                      <p>Efficient development with attention to detail</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>💡</span>
                    <div>
                      <h4>Innovative Solutions</h4>
                      <p>Creative problem-solving for complex challenges</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🤝</span>
                    <div>
                      <h4>Collaborative Approach</h4>
                      <p>Clear communication throughout the project</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.availabilityCard}>
                <h3>Current Availability</h3>
                <div className={styles.availability}>
                  <div className={styles.statusIndicator}>
                    <div className={styles.statusDot}></div>
                    <span>Available for new projects</span>
                  </div>
                  <p>Currently working at DesignersX and open to freelance opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Aarti Verma. All rights reserved.</p>
          <p>Built with passion using React.js & Next.js</p>
        </div>
      </footer>
    </section>
  )
}
