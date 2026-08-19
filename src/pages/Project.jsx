import React from "react";
const projects = [
  {
    title: "Health Insurance Management System",
    period: "Sept 2025 – Feb 2026",
    description:
      "Enterprise-oriented insurance management platform for policy, claims, member management, payment and TPA/hospital integrations.",

    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "Hibernate",
      "MySQL",
      "React",
      "Microservices",
    ],
    highlights: [
      "Engineered 20+ RESTful web services.",
      "Managed 15+ entity relationships using JPA and Hibernate.",
      "Integrated 3+ external systems.",
      "Implemented JWT-based authentication.",
      "Achieved 80%+ test coverage with JUnit 5 and Mockito.",
    ],
    projectLink: "https://gssoc.girlscript.org/",
  },
  {
    title: "EduLoan Nexus",
    period: "Feb 2026 – July 2026",
    description:
      "Full-stack Education Loan Management System automating loan application, approval, tracking and document verification.",
    tech: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "MySQL",
      "Tailwind CSS",
    ],
    highlights: [
      "Built a system supporting 500+ users.",
      "Developed 15+ responsive UI components.",
      "Integrated 20+ REST APIs.",
      "Implemented USER and ADMIN role-based access.",
      "Improved query performance by 25%.",
    ],
    projectLink: "https://gssoc.girlscript.org/",
  },
  {
    title: "Nexora Technologies",
    period: "",
    description:
      "A responsive React.js technology company website showcasing Nexora Technologies' software development services, selected projects, company information, development process, client testimonials, and project contact information.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Built a complete multi-section technology company website using React.js.",
      "Implemented responsive sections for Services, Work, Company, Process, Testimonials, and Contact.",
      "Created reusable data-driven components using JavaScript arrays and React map().",
      "Developed an interactive-style analytics dashboard hero section using CSS.",
      "Showcased 3 featured projects: Finora, MediConnect, and UrbanCart.",
      "Added responsive service cards with technology tags and descriptions.",
      "Implemented project showcase cards with category, description, and business results.",
      "Added client testimonials with user initials and company roles.",
      "Implemented smooth section navigation using anchor links.",
      "Added a project contact CTA using a mailto link.",
      "Created visual UI elements including charts, floating cards, grids, gradients, and animated-style indicators using CSS.",
      "Showcased business metrics including 150+ projects, 32 countries served, and 98% client satisfaction.",
    ],
    projectLink: "https://nexora-rouge-seven.vercel.app/",
  },
];
function Project() {
  return (
    <div>
      <section id="projects" className="section projects-section">
        <div className="section-label">04 / PROJECTS & OPEN SOURCE</div>

        <div className="section-title-row">
          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            Selected projects demonstrating backend architecture, full-stack
            development and problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.period}</p>
                </div>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  <span className="arrow">↗</span>
                </a>
              </div>

              <p className="project-description">{project.description}</p>

              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
