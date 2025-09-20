import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // import the CSS file

export default function Home() {
  return (
    <div className="home-container">
      <h1>I am Aynal Haque</h1>
      <p>
        I am a MERN stack developer. Here you’ll find my projects, skills, and
        more.
      </p>

      <Link to="/projects">View My Projects</Link>
    </div>
  );
}
