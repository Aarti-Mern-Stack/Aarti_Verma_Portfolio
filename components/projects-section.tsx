// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import styles from "./projects-section.module.css";

// const projects = [
//   {
//     id: 1,
//     title: "Rexpt — The AI Receptionist Service",
//     category: "Full-Stack + AI/Telephony",
//     description:
//       "Rexpt is a 24/7 virtual phone receptionist for businesses that answers calls, books appointments via Cal.com, routes queries, and captures leads—so teams never miss an opportunity. Built with Next.js + TypeScript on the frontend and Node/Express with SQL on the backend, with Stripe powering subscriptions and billing.",
//     technologies: [
//       "Next.js",
//       "React.js",
//       "TypeScript",
//       "Node.js",
//       "SQL",
//       "Stripe",
//     ],
//     features: [
//       "Dedicated business numbers with a natural AI voice greeting",
//       "Understands FAQs from your knowledge base and answers in real time",
//       "Live call transcription, summaries, and lead capture",
//       "Smart routing: voicemail, callback, or warm transfer",
//       "1-click booking & rescheduling via Cal.com",
//       "Dashboard for usage minutes, call logs, and analytics",
//       "Subscription + metered billing through Stripe",
//     ],
//     status: "Completed",
//     image: "./images/rxpt.png",
//     link: "https://app.rexpt.in",
//   },
//   {
//     id: 2,
//     title: "GuardX – Smart Visitor Management (Web)",
//     category: "WebMobile",
//     description:
//       "A smart visitor management system for residential societies. This SaaS product simplifies visitor tracking and enhances security with real-time logging and mobile alerts.",
//     technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Express.js"],
//     features: [
//       "Visitor pre-registration & on-spot check-in",
//       "Real-time gate logs and activity timeline",
//       "Instant mobile alerts/notifications",
//       "Role-based access for admins, residents, guards",
//       "Exportable reports & basic analytics",
//     ],
//     status: "Completed",
//     image: "https://portfolio-ai-teams-projects-a359ae35.vercel.app/guard.png",
//     link: "https://be.guardx.us/",
//   },
//   {
//     id: 3,
//     title: "BrunoMD with Next.js & Shopify",
//     category: "Next.js Integration",
//     description:
//       "Bruno Pharma is a fast and scalable e-commerce solution designed for selling health and wellness supplements. The frontend was developed using Next.js to ensure high performance and SEO optimization, while the backend is powered by Shopify to manage products, orders, and inventory efficiently.",
//     technologies: [
//       "Next.js",
//       "Shopify API",
//       "React.js",
//       "TypeScript",
//       "Tailwind CSS",
//     ],
//     features: [
//       "Dynamic product pages using Shopify's API",
//       "Real-time inventory updates and pricing",
//       "Shopify checkout API integration",
//       "Secure payment processing",
//       "Responsive design with modern UI/UX",
//     ],
//     status: "Completed",
//     image: "./images/bruno.png",
//     link: "https://brunomd.com/",
//   },
//   {
//     id: 4,
//     title: "Astar8 – Admin Panel",
//     category: "Next.js Application",
//     description:
//       "Internal dashboard for the Astar8 astrology platform where admins and verified pandits create, schedule, and publish zodiac-wise predictions, manage content, and oversee platform activity.",
//     technologies: [
//       "React.js",
//       "Tailwind CSS",
//       "Node.js",
//       "SQL",
//       "Firebase",
//       "Stripe",
//     ],
//     features: [
//       "Role-based access: Admin, Pandit (Astrologer), Moderator",
//       "Prediction CRUD (daily/weekly/monthly, zodiac-wise)",
//       "Drafts, approvals, and scheduled publishing",
//       "Pandit profile & availability management",
//       "Responsive dashboard with basic analytics",
//     ],
//     status: "Completed",
//     image: "./images/astar8.png",
//     link: "https://astar8-dev.vercel.app/",
//   },
//   {
//   id: 5,
//   title: "Rexpt – AI Receptionist Service",
//   category: "Next.js + Sanity Application",
//   description:
//     "A modern SaaS website for Rexpt AI Receptionist, built with Next.js, Tailwind CSS, and Sanity CMS. The site highlights product features, pricing plans, testimonials, and integrates dynamic content management from Sanity.",
//   technologies: [
//     "Next.js",
//     "React.js",
//     "Tailwind CSS",
//     "Sanity CMS",
//     "Node.js",
//   ],
//   features: [
//     "Dynamic CMS-driven sections (Hero, Features, Benefits, Pricing, Testimonials, etc.)",
//     "Geo-based pricing with country/currency detection",
//     "Responsive design with animated sections",
//     "Custom subscription modal with discount mapping",
//     "SEO-optimized with dynamic metadata",
//   ],
//   status: "Completed",
//   image: "./images/rxptweb.png",
//   link: "https://www.rxpt.us/",
// },

// ];

// export default function ProjectsSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [visibleItems, setVisibleItems] = useState<number[]>([]);
//   const [selectedProject, setSelectedProject] = useState<number | null>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           // Animate items one by one
//           projects.forEach((_, index) => {
//             setTimeout(() => {
//               setVisibleItems((prev) => [...prev, index]);
//             }, index * 200);
//           });
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleCardClick = (project: Project) => {
//     if (project.link) {
//       window.open(project.link, "_blank", "noopener,noreferrer");
//     }
//   };
//   return (
//     <section id="projects" ref={sectionRef} className={styles.projects}>
//       <div className={styles.container}>
//         <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
//           <div className={styles.header}>
//             <h2 className={styles.title}>Featured Projects</h2>
//             <div className={styles.titleUnderline}></div>
//             <p className={styles.subtitle}>
//               Showcasing my technical expertise through real-world applications
//             </p>
//           </div>

//           <div className={styles.projectsGrid}>
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`${styles.projectCard} ${
//                   visibleItems.includes(index) ? styles.visible : ""
//                 }`}
//                 onClick={() =>
//                   setSelectedProject(
//                     selectedProject === project.id ? null : project.id
//                   )
//                 }
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") handleCardClick(project);
//                 }}
//                 onClick={() => handleCardClick(project)}
//               >
//                 <div className={styles.cardImage}>
//                   <img
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                   />
//                   <div className={styles.imageOverlay}>
//                     <div
//                       className={`${styles.status} ${
//                         styles[project.status.toLowerCase().replace(" ", "")]
//                       }`}
//                     >
//                       {project.status}
//                     </div>
//                   </div>
//                 </div>

//                 <div className={styles.cardContent}>
//                   <div className={styles.cardHeader}>
//                     <span className={styles.category}>{project.category}</span>
//                     <h3 className={styles.projectTitle}>{project.title}</h3>
//                   </div>

//                   <p className={styles.projectDescription}>
//                     {project.description}
//                   </p>

//                   <div className={styles.technologies}>
//                     {project.technologies.slice(0, 4).map((tech, idx) => (
//                       <span key={idx} className={styles.tech}>
//                         {tech}
//                       </span>
//                     ))}
//                     {project.technologies.length > 4 && (
//                       <span className={styles.techMore}>
//                         +{project.technologies.length - 4}
//                       </span>
//                     )}
//                   </div>

//                   <div
//                     className={`${styles.expandedContent} ${
//                       selectedProject === project.id ? styles.expanded : ""
//                     }`}
//                   >
//                     <div className={styles.featuresSection}>
//                       <h4>Key Features</h4>
//                       <ul className={styles.featuresList}>
//                         {project.features.map((feature, idx) => (
//                           <li key={idx} className={styles.feature}>
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className={styles.allTechnologies}>
//                       <h4>Technologies Used</h4>
//                       <div className={styles.techGrid}>
//                         {project.technologies.map((tech, idx) => (
//                           <span key={idx} className={styles.techFull}>
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className={styles.cardActions}>
//                     <Button
//                       variant="outline"
//                       className={styles.expandButton}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedProject(
//                           selectedProject === project.id ? null : project.id
//                         );
//                       }}
//                     >
//                       {selectedProject === project.id
//                         ? "Show Less"
//                         : "Learn More"}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./projects-section.module.css";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  status: "Completed" | "Live" | string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Rexpt — The AI Receptionist Service",
    category: "Mobile",
    description:
      "Rexpt is a 24/7 virtual phone receptionist for businesses that answers calls, books appointments via Cal.com, routes queries, and captures leads—so teams never miss an opportunity. Built with Next.js + TypeScript on the frontend and Node/Express with SQL on the backend, with Stripe powering subscriptions and billing.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "SQL",
      "Stripe",
    ],
    features: [
      "Dedicated business numbers with a natural AI voice greeting",
      "Understands FAQs from your knowledge base and answers in real time",
      "Live call transcription, summaries, and lead capture",
      "Smart routing: voicemail, callback, or warm transfer",
      "1-click booking & rescheduling via Cal.com",
      "Dashboard for usage minutes, call logs, and analytics",
      "Subscription + metered billing through Stripe",
    ],
    status: "Completed",
    image: "./images/rxpt.png",
    link: "https://app.rexpt.in",
  },
  {
    id: 2,
    title: "GuardX – Smart Visitor Management (Web)",
    category: "Web",
    description:
      "A smart visitor management system for residential societies. This SaaS product simplifies visitor tracking and enhances security with real-time logging and mobile alerts.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Express.js"],
    features: [
      "Visitor pre-registration & on-spot check-in",
      "Real-time gate logs and activity timeline",
      "Instant mobile alerts/notifications",
      "Role-based access for admins, residents, guards",
      "Exportable reports & basic analytics",
    ],
    status: "Completed",
    image: "https://portfolio-ai-teams-projects-a359ae35.vercel.app/guard.png",
    link: "https://be.guardx.us/",
  },
  {
    id: 3,
    title: "BrunoMD with Next.js & Shopify",
    category: "Shopify",
    description:
      "Bruno Pharma is a fast and scalable e-commerce solution designed for selling health and wellness supplements. The frontend was developed using Next.js to ensure high performance and SEO optimization, while the backend is powered by Shopify to manage products, orders, and inventory efficiently.",
    technologies: [
      "Next.js",
      "Shopify API",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Dynamic product pages using Shopify's API",
      "Real-time inventory updates and pricing",
      "Shopify checkout API integration",
      "Secure payment processing",
      "Responsive design with modern UI/UX",
    ],
    status: "Completed",
    image: "./images/bruno.png",
    link: "https://brunomd.com/",
  },
  {
    id: 4,
    title: "Astar8 – Admin Panel",
    category: "Web",
    description:
      "Internal dashboard for the Astar8 astrology platform where admins and verified pandits create, schedule, and publish zodiac-wise predictions, manage content, and oversee platform activity.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "SQL",
      "Firebase",
      "Stripe",
    ],
    features: [
      "Role-based access: Admin, Pandit (Astrologer), Moderator",
      "Prediction CRUD (daily/weekly/monthly, zodiac-wise)",
      "Drafts, approvals, and scheduled publishing",
      "Pandit profile & availability management",
      "Responsive dashboard with basic analytics",
    ],
    status: "Completed",
    image: "./images/astar8.png",
    link: "https://astar8-dev.vercel.app/",
  },
  {
    id: 5,
    title: "Rexpt – AI Receptionist Service",
    category: "Web",
    description:
      "A modern SaaS website for Rexpt AI Receptionist, built with Next.js, Tailwind CSS, and Sanity CMS. The site highlights product features, pricing plans, testimonials, and integrates dynamic content management from Sanity.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Sanity CMS",
      "Node.js",
    ],
    features: [
      "Dynamic CMS-driven sections (Hero, Features, Benefits, Pricing, Testimonials, etc.)",
      "Geo-based pricing with country/currency detection",
      "Responsive design with animated sections",
      "Custom subscription modal with discount mapping",
      "SEO-optimized with dynamic metadata",
    ],
    status: "Live",
    image: "./images/rxptweb.png",
    link: "https://www.rxpt.us/",
  },
];

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);

  // --- Settings ---
  const PAGE_SIZE = 4; // change to 6/8 if you prefer more per page

  // Unique categories for tabs
  const categories = useMemo(() => {
    const set = new Set<string>(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter + paginate
  const filteredProjects = useMemo(() => {
    return activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PAGE_SIZE)
  );

  const pageProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProjects.slice(start, start + PAGE_SIZE);
  }, [filteredProjects, currentPage]);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedProject(null);
  }, [activeTab]);

  // Reveal on scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          pageProjects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [pageProjects]);

  const handleOpenLink = (project: Project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>Featured Projects</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>
              Showcasing my technical expertise through real-world applications
            </p>
          </div>

          {/* Tabs Row */}
          <div
            className={`${styles.tabsRow} ${styles.glassy}`}
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tab} ${
                    isActive ? styles.tabActive : ""
                  }`}
                  onClick={() => setActiveTab(cat)}
                >
                  <span>{cat}</span>
                  <span className={styles.tabCount}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className={styles.projectsGrid}>
            {pageProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectCard} ${
                  visibleItems.includes(index) ? styles.visible : ""
                }`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    );
                }}
              >
                <div
                  className={styles.cardImage}
                  onClick={() => handleOpenLink(project)}
                  role="button"
                  aria-label={`Open ${project.title}`}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                  />
                  <div className={styles.imageOverlay}>
                    <div
                      className={`${styles.status} ${
                        styles[project.status.toLowerCase().replace(/\s+/g, "")]
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.technologies}>
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={styles.techMore}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div
                    className={`${styles.expandedContent} ${
                      selectedProject === project.id ? styles.expanded : ""
                    }`}
                  >
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
                        e.stopPropagation();
                        setSelectedProject(
                          selectedProject === project.id ? null : project.id
                        );
                      }}
                    >
                      {selectedProject === project.id
                        ? "Show Less"
                        : "Learn More"}
                    </Button>

                    {project.link && (
                      <Button
                        className={styles.visitButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLink(project);
                        }}
                      >
                        Visit
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              className={`${styles.pagination} ${styles.glassy}`}
              role="navigation"
              aria-label="Project pagination"
            >
              <Button
                variant="outline"
                className={styles.pageBtn}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                ← Prev
              </Button>

              <div className={styles.pageInfo}>
                Page {currentPage} of {totalPages}
              </div>

              <Button
                variant="outline"
                className={styles.pageBtn}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
              >
                Next →
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
