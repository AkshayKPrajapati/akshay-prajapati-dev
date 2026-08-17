import { useState } from "react";
import "./App.css";

const skills = {
  "Programming Languages": ["Java 8", "Java 11", "Java 17"],
  Databases: ["MySQL", "SQL"],
  Backend: [
    "Spring Boot",
    "Spring MVC",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate",
    "REST APIs",
    "Microservices",
  ],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  Tools: ["Git", "GitHub", "Maven", "Gradle", "Postman", "IntelliJ IDEA"],
  Methodologies: ["Agile", "Scrum"],
  "Currently Learning": ["Docker", "Kafka", "Redis", "OpenAI APIs"],
};

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
  },
];

const codingProfiles = [
  {
    name: "LeetCode",
    count: "300+",
    text: "DSA & interview problems",
    url: "https://leetcode.com/",
  },
  {
    name: "GeeksforGeeks",
    count: "200+",
    text: "Algorithms & problem solving",
    url: "https://www.geeksforgeeks.org/",
  },
  {
    name: "HackerRank",
    count: "150+",
    text: "Problem solving & DSA",
    url: "https://www.hackerrank.com/",
  },
  {
    name: "NeetCode",
    count: "Curated",
    text: "Interview preparation patterns",
    url: "https://neetcode.io/",
  },
];

const experienceTech = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "JPA",
  "Hibernate",
  "MySQL",
  "JUnit",
  "Mockito",
  "Git",
  "Maven",
];

function App() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("description");

    const emailBody = `
Hello Akshay,

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `.trim();

    const mailtoUrl = `mailto:akshay.prajapati2552@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;

    setFormStatus(
      "Your email client should open now. Please send the prepared message."
    );

    event.currentTarget.reset();
  };

  return (
    <div className="app">
      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="navbar">
        <a
          href="#home"
          className="logo"
          aria-label="Akshay Kumar Prajapati home"
        >
          AK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#coding">Coding</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="mailto:akshay.prajapati2552@gmail.com"
          className="nav-button"
        >
          Let's Talk
        </a>
      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <p className="eyebrow">JAVA FULL STACK DEVELOPER</p>

          <h1>
            Building scalable
            <br />
            <span>digital experiences.</span>
          </h1>

          <p className="hero-description">
            I'm <strong id="NameStrong">AKSHAY PRAJAPATI</strong>, a Java Full Stack
            Developer specializing in Spring Boot, REST APIs, React.js and
            database-driven enterprise applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/AkshayKPrajapati"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/akshayprajapati2552/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:akshay.prajapati2552@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span>developer.java</span>
            </div>

            <div className="code-content">
              <div>
                <span className="line-number">01</span>
                <span className="purple">public class</span>{" "}
                <span className="blue">Developer</span> {"{"}
              </div>

              <div>
                <span className="line-number">02</span>
                &nbsp;&nbsp;
                <span className="purple">String</span> name ={" "}
                <span className="green">"Akshay Kumar Prajapati"</span>;
              </div>

              <div>
                <span className="line-number">03</span>
                &nbsp;&nbsp;
                <span className="purple">String</span> role ={" "}
                <span className="green">"Java Developer"</span>;
              </div>

              <div>
                <span className="line-number">04</span>
                &nbsp;&nbsp;
                <span className="purple">int</span> apis ={" "}
                <span className="orange">35</span>;
              </div>

              <div>
                <span className="line-number">05</span>
                &nbsp;&nbsp;
                <span className="purple">boolean</span> coffee ={" "}
                <span className="blue">true</span>;
              </div>

              <div>
                <span className="line-number">06</span>
                {"}"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          STATS
      ========================= */}

      <section className="stats">
        <div>
          <strong>35+</strong>
          <span>REST APIs</span>
        </div>

        <div>
          <strong>1000+</strong>
          <span>Daily Requests</span>
        </div>

        <div>
          <strong>80%+</strong>
          <span>Test Coverage</span>
        </div>

        <div>
          <strong>300+</strong>
          <span>LeetCode Problems</span>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section id="about" className="section about">
        <div className="section-label">01 / ABOUT</div>

        <div className="section-heading">
          <h2>
            Turning ideas into
            <br />
            <span>reliable software.</span>
          </h2>

          <div className="about-text">
            <p>
              Experienced Java Full Stack Developer with a strong foundation
              in Core Java, OOP, Spring Boot, Hibernate, JPA and MySQL.
            </p>

            <p>
              I enjoy designing clean backend architectures, developing
              secure REST APIs and building intuitive full-stack applications
              that solve real business problems.
            </p>

            <p>
              My development approach focuses on clean code, scalability,
              security, performance and maintainability.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section id="skills" className="section skills-section">
        <div className="section-label">02 / TECHNICAL SKILLS</div>

        <div className="section-title-row">
          <h2>
            My <span>toolbox.</span>
          </h2>

          <p>
            Technologies and tools I use to design, build, test and deploy
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>

              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          EXPERIENCE
      ========================= */}

      <section id="experience" className="section experience-section">
        <div className="section-label">03 / EXPERIENCE</div>

        <h2>
          Where I've been
          <br />
          <span>building.</span>
        </h2>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <p className="experience-type">INTERNSHIP</p>

              <h3>Java Backend Developer</h3>

              <p className="company">
                Greateway Software Pvt. Ltd.
              </p>
            </div>

            <span className="date">Jan 2026 – Present</span>
          </div>

          <div className="experience-location">
            Kharadi, Pune · Agile/Scrum
          </div>

          <ul>
            <li>
              Contributed to a 5-member Agile/Scrum team and delivered 15+
              RESTful web services using Java and Spring Boot.
            </li>

            <li>
              Designed scalable Controller–Service–Repository architectures
              processing 1,000+ daily requests.
            </li>

            <li>
              Optimized SQL queries and JPA/Hibernate persistence, improving
              data retrieval performance by 25%.
            </li>

            <li>
              Implemented JWT authentication and Role-Based Access Control
              using Spring Security.
            </li>

            <li>
              Integrated 3+ third-party APIs and reduced manual data
              processing by 30%.
            </li>

            <li>
              Created 40+ JUnit 5 and Mockito test cases and achieved 80%+
              unit test coverage.
            </li>
          </ul>

          <div className="tech-list">
            {experienceTech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}

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

                <span className="arrow">↗</span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

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

      {/* =========================
          CODING PROFILES
      ========================= */}

      <section id="coding" className="section coding-section">
        <div className="section-label">05 / PROBLEM SOLVING</div>

        <div className="section-title-row">
          <h2>
            Always <span>learning.</span>
          </h2>

          <p>
            Consistent practice in data structures, algorithms and technical
            interview patterns.
          </p>
        </div>

        <div className="coding-grid">
          {codingProfiles.map((profile) => (
            <a
              className="coding-card"
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="coding-name">
                {profile.name}

                <span className="profile-arrow">↗</span>
              </span>

              <strong>{profile.count}</strong>

              <p>{profile.text}</p>
            </a>
          ))}
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}

      <section id="education" className="section education-section">
        <div className="section-label">06 / EDUCATION</div>

        <div className="education-card">
          <div>
            <p className="education-label">
              BACHELOR OF TECHNOLOGY
            </p>

            <h2>Computer Science & Engineering</h2>

            <p>
              Ramgovind Institute of Technology, Koderma
            </p>

            <p>
              Jharkhand University of Technology, Ranchi
            </p>
          </div>

          <span>2021 – 2025</span>
        </div>

        <div className="education-card">
          <div>
            <p className="education-label">
              INTERMEDIATE OF SCIENCE
            </p>

            <h2>Science</h2>

            <p>R K KALYAN +2 HIGH SCHOOL PANDU</p>

            <p>Jharkhand Academic Council, Ranchi</p>
          </div>

          <span>2019 – 2021</span>
        </div>

        <div className="education-card">
          <div>
            <p className="education-label">
              SECONDARY EDUCATION
            </p>

            <h2>Class X</h2>

            <p>UPGRADED HIGH SCHOOL RATNAG</p>

            <p>Jharkhand Academic Council, Ranchi</p>
          </div>

          <span>2019</span>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section id="contact" className="section contact-section">
        <div className="contact-content">
          <div className="section-label">07 / CONTACT</div>

          <div className="contact-heading">
            <div>
              <h2>
                Let's work
                <br />
                <span>together.</span>
              </h2>
            </div>

            <p>
              Have a project, opportunity, or idea you'd like to discuss?
              Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project / Job opportunity"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Message</label>

              <textarea
                id="description"
                name="description"
                rows="7"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
              <span>↗</span>
            </button>

            {formStatus && (
              <p className="form-status">
                {formStatus}
              </p>
            )}
          </form>

          <div className="contact-bottom">
            <a href="mailto:akshay.prajapati2552@gmail.com">
              akshay.prajapati2552@gmail.com
            </a>

            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/akshayprajapati2552/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/AkshayKPrajapati"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>
        <p>© 2026 Akshay Kumar Prajapati</p>

        <p>Designed & built with React.js</p>
      </footer>
    </div>
  );
}

export default App;