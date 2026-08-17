import React from 'react'
import './Footer.css';
function Footer(props) {
  return (
    <footer>
        <p>© 2026 Akshay Kumar Prajapati</p>
          <p>Version : {props.branch}</p>
        <p>Designed & built with React.js</p>
      </footer>
  )
}

export default Footer