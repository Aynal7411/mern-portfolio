import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 leading-relaxed">
        Hi 👋 I’m a passionate <b>MERN Stack Developer</b> with experience in
        building full-stack web applications using MongoDB, Express, React, and Node.js.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Frontend: React.js, TailwindCSS, Bootstrap</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB, Mongoose</li>
        <li>Other: REST APIs, Git, Docker</li>
      </ul>
    </div>
  );
}
