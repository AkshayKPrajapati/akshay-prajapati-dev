import { useState } from "react";
import "./Home.css";
import "./components/Footer.css";
import Footer from "./components/Footer";
import "./Index.css";
import Hero from "./pages/Hero";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

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
  Tools: [
    "Git",
    "GitHub",
    "Maven",
    "Gradle",
    "Postman",
    "IntelliJ IDEA",
    "VS  Code",
  ],
  Methodologies: ["Agile", "Scrum"],
  "Currently Learning": ["Docker", "Kafka", "Redis", "OpenAI APIs"],
};
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

const Home = () => {
  return (
    <div className="app">
      {/*  HERO */}

        <Hero/>

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
              Experienced Java Full Stack Developer with a strong foundation in
              Core Java, OOPs, Spring Boot, Hibernate, JPA ,MySQL and ReactJS.
            </p>

            <p>
              I enjoy designing clean backend architectures, developing secure
              REST APIs and building intuitive full-stack applications that
              solve real business problems.
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

              <p className="company">Greateway Software Pvt. Ltd.</p>
            </div>

            <span className="date">Jan 2026 – Present</span>
          </div>

          <div className="experience-location">Kharadi, Pune ·</div>

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
              Implemented JWT authentication and Role-Based Access Control using
              Spring Security.
            </li>

            <li>
              Integrated 3+ third-party APIs and reduced manual data processing
              by 30%.
            </li>

            <li>
              Created 40+ JUnit 5 and Mockito test cases and achieved 80%+ unit
              test coverage.
            </li>
          </ul>

          <div className="tech-list">
            {experienceTech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>
      <Project/>
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

          <Education/>
          <Contact/>

      
    </div>
  );
};

export default Home;
