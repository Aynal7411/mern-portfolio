import React, { useEffect, useState } from "react";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../services/api";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css"; // ✅ Import CSS

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    fetchProjects().then((res) => setProjects(res.data));
  };

  const handleCreate = async () => {
    await createProject(newProject);
    setNewProject({ title: "", description: "", github: "", demo: "" });
    loadProjects();
  };

  const handleUpdate = async (id) => {
    const updated = { title: "Updated Title" }; // Example update
    await updateProject(id, updated);
    loadProjects();
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    loadProjects();
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      {/* Create New Project */}
      <div className="create-form">
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="GitHub Link"
          value={newProject.github}
          onChange={(e) =>
            setNewProject({ ...newProject, github: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Demo Link"
          value={newProject.demo}
          onChange={(e) =>
            setNewProject({ ...newProject, demo: e.target.value })
          }
        />
        <button onClick={handleCreate}>➕ Add Project</button>
      </div>

      {/* Projects List */}
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p._id} className="project-card">
            <ProjectCard project={p} />
            <div className="project-actions">
              <button onClick={() => handleUpdate(p._id)} className="update-btn">
                ✏️ Update
              </button>
              <button onClick={() => handleDelete(p._id)} className="delete-btn">
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
