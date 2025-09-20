import React, { useEffect, useState } from "react";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../services/api";
import ProjectCard from "../components/ProjectCard";

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
    <div className="p-6">
      <h1 className="text-2xl mb-4">Projects</h1>

      {/* Create New Project */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <ProjectCard project={p} />
            <div className="mt-2">
              <button
                onClick={() => handleUpdate(p._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
