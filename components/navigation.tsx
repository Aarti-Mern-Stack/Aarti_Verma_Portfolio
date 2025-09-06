// "use client"

// import { useState, useEffect } from "react"
// import styles from "./navigation.module.css"

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("hero")
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)

//       // Update active section based on scroll position
//       const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
//       const current = sections.find((section) => {
//         const element = document.getElementById(section)
//         if (element) {
//           const rect = element.getBoundingClientRect()
//           return rect.top <= 100 && rect.bottom >= 100
//         }
//         return false
//       })

//       if (current) {
//         setActiveSection(current)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
//       <div className={styles.container}>
//         <div className={styles.logo}>
//           <span className="font-serif text-xl font-bold">Aarti Verma</span>
//         </div>

//         <ul className={styles.navList}>
//           {[
//             { id: "hero", label: "Home" },
//             { id: "about", label: "About" },
//             { id: "experience", label: "Experience" },
//             { id: "projects", label: "Projects" },
//             { id: "skills", label: "Skills" },
//             { id: "contact", label: "Contact" },
//           ].map(({ id, label }) => (
//             <li key={id}>
//               <button
//                 onClick={() => scrollToSection(id)}
//                 className={`${styles.navLink} ${activeSection === id ? styles.active : ""}`}
//               >
//                 {label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route-like scroll (when a link is clicked)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Body scroll lock when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Esc closes the menu
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsMenuOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  // Scroll + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay for mobile drawer */}
      <div
        className={`${styles.overlay} ${
          isMenuOpen ? styles.overlayVisible : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <button
              onClick={() => scrollToSection("hero")}
              className={styles.logoBtn}
              aria-label="Go to home"
            >
              Aarti Verma
            </button>
          </div>

          {/* Desktop nav */}
          <ul className={styles.navListDesktop}>
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`${styles.navLink} ${
                    activeSection === id ? styles.active : ""
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile: hamburger */}
          <button
            className={styles.menuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className={styles.burger} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`${styles.mobileDrawer} ${
            isMenuOpen ? styles.mobileDrawerOpen : ""
          }`}
          role="dialog"
          aria-modal="true"
        >
         <button onClick={() => setIsMenuOpen(false)} className={styles.closeBtn} aria-label="Close menu">✕</button>
          <ul className={styles.navListMobile}>
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`${styles.navLinkMobile} ${
                    activeSection === id ? styles.activeMobile : ""
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
