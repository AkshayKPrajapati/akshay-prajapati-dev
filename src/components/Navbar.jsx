import React from 'react'
import'./Navbar.css';
function Navbar() {
  return (
    <div>
        <nav className="navbar">
        <a
          href="/"
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
    </div>
  )
}

export default Navbar