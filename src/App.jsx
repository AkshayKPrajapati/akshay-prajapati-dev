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
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
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
  { name: "LeetCode", count: "300+", text: "DSA & interview problems", url:"www.example.com" },
  { name: "GeeksforGeeks", count: "200+", text: "Algorithms & problem solving" ,url:"www.example.com"},
  { name: "HackerRank", count: "150+", text: "Problem solving & DSA" ,url:"www.example.com"},
  { name: "NeetCode", count: "Curated", text: "Interview preparation patterns",url:"www.example.com" },
];

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          AK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="mailto:akshay.prajapati2552@gmail.com"
          className="nav-button"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="eyebrow">JAVA FULL STACK DEVELOPER</p>

          <h1>
            Building scalable
            <br />
            <span>digital experiences.</span>
          </h1>

          <p className="hero-description">
            I'm <strong>Akshay Kumar Prajapati</strong>, a Java Full Stack
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
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/akshayprajapati2552/"
              target="_blank"
              rel="noreferrer"
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
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>developer.java</span>
            </div>

            <div className="code-content">
              <div>
                <span className="line-number">01</span>
                <span className="purple">public class</span>{" "}
                <span className="blue">Developer</span>{" "}
                {"{"}
              </div>

              <div>
                <span className="line-number">02</span>
                &nbsp;&nbsp;
                <span className="purple">String</span> name ={" "}
                <span className="green">"Akshay"</span>;
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

      {/* Stats */}
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

      {/* About */}
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

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="section-label">02 / TECHNICAL SKILLS</div>

        <div className="section-title-row">
          <h2>My <span>toolbox.</span></h2>
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

      {/* Experience */}
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
              <p className="company">Greateway Software Pvt. Ltd.</p>
            </div>

            <span className="date">Jan 2026 – Present</span>
          </div>

          <div className="experience-location">Kharadi, Pune · Agile/Scrum</div>

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
            {[
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
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="section-label">04 / PROJECTS</div>

        <div className="section-title-row">
          <h2>Things I've <span>built.</span></h2>
          <p>
            Selected projects demonstrating backend architecture, full-stack
            development and problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div>

              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.period}</p>
                </div>
                <span className="arrow">↗</span>
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

      {/* Coding */}
      <section className="section coding-section">
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
            <div className="coding-card" key={profile.name}>
              <span className="coding-name">{profile.name}</span>
              <strong>{profile.count}</strong>
              <p>{profile.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section education-section">
        <div className="section-label">06 / EDUCATION</div>

        <div className="education-card">
          <div>
            <p className="education-label">BACHELOR OF TECHNOLOGY</p>
            <h2>Computer Science & Engineering</h2>
            <p>Jharkhand University of Technology, Ranchi</p>
          </div>

          <span>2021 – 2025</span>
        </div>

        <div className="education-card">
          <div>
            <p className="education-label">INTERMIDIATE OF SCIENECE</p>
            <h2>SCIENCE STUDENT</h2>
            <p>Jharkhand aCADEMIC CONCIL , Ranchi</p>
          </div>

          <span>2019 – 2021</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="contact-content">
          <div className="section-label">07 / CONTACT</div>

          <h2>
            Let's build something
            <br />
            <span>great together.</span>
          </h2>

          <p>
            Whether you're looking for a Java developer, have a project idea,
            or simply want to connect, I'd love to hear from you.
          </p>

          <a
            href="mailto:akshay.prajapati2552@gmail.com"
            className="contact-email"
          >
            akshay.prajapati2552@gmail.com
            <span>↗</span>
          </a>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/akshayprajapati2552/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/AkshayKPrajapati"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Akshay Kumar Prajapati</p>
        <p>Designed & built with React.js</p>
      </footer>
    </div>
  );
}

export default App;