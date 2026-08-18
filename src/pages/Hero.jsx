import React from 'react'
import'./Hero.css';
const Hero=() =>{
  return (
    <div>
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
            I'm <strong id="NameStrong">AKSHAY PRAJAPATI</strong>, a Java Full
            Stack Developer specializing in Spring Boot, REST APIs, React.js and
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

            <a href="mailto:akshay.prajapati2552@gmail.com">Email ↗</a>
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

              <span>Developer.java</span>
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
                &nbsp;&nbsp;
                <span className="purple">String</span> Number ={" "}
                <span className="green">"6200305994"</span>;
              </div>

              <div>
                <span className="line-number">07</span>
                {"}"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero