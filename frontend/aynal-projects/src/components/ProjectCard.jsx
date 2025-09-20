import React from "react";

export default function ProjectCard({ project, onUpdate, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      {/* Project Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded"
        />
      )}

      {/* Project Info */}
      <h2 className="text-xl font-bold mt-2">{project.title}</h2>
      <p className="text-gray-700">{project.description}</p>

      {/* Tech Stack */}
      {project.techStack && (
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-200 px-2 py-1 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="mt-3 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>

      {/* Actions (Update / Delete) */}
      <div className="mt-4 flex gap-2">
        {onUpdate && (
          <button
            onClick={() => onUpdate(project._id)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Update
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(project._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
