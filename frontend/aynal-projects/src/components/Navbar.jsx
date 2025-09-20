import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
}
