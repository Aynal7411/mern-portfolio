import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
