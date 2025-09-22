import React from "react";
import "./About.css"; // import CSS

export default function About() {
  return (
    <div className="about-container">
      {/* Header */}
      <h1 className="about-title">Hey,I am Aynal Haque</h1>
      <p><strong>A Full Stack Developer From Bangladesh</strong></p>

      {/* Intro */}
      <p className="about-intro">
        Hi 👋 I’m a passionate <b>MERN Stack Developer</b> with expertise in{" "}
        <b>MongoDB, Express, React, Node.js</b> and strong knowledge of{" "}
        <b>Django</b> as well. I love building full-stack web applications,
        creating clean UI/UX, and developing scalable backend solutions.
      </p>

      {/* Skills Section */}
      <div className="skills-card">
        <h2 className="skills-title">My Skills</h2>
        <ul className="skills-grid">
          <li>⚡ Frontend: React.js, HTML, CSS, TailwindCSS, Bootstrap</li>
          <li>⚡ Backend: Node.js, Express.js, Django</li>
          <li>⚡ Database: MongoDB, Mongoose, MySQL, PostgreSQL</li>
          <li>⚡ Other: REST APIs, Git/GitHub, Docker</li>
          <li>⚡ Deployment: Vercel, Netlify, Heroku, AWS</li>
          <li>⚡ Tools: VS Code, Postman, Figma</li>
          <li>⚡ Languages: JavaScript, Python, HTML, CSS</li>
        </ul>
      </div>

      {/* Future Goals */}
      <div className="goals-section">
        <h2 className="goals-title">🚀 My Goals</h2>
        <p className="goals-text">
          I aim to keep growing as a developer by exploring <b>Artificial Intelegence</b>, 
          improving my <b>Machine Learning</b> skills, and contributing to 
          open-source projects. My long-term vision is to build impactful 
          applications that solve real-world problems and make technology 
          more accessible to everyone.
        </p>
      </div>
    </div>
  );
}
