import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchServices = async () => {
    try {
      const res = await axios.get("/api/services");
      setServices(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addService = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/services", { title, description });
      setServices([res.data, ...services]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  const deleteService = async (id) => {
    try {
      await axios.delete(`/api/services/${id}`);
      setServices(services.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Services</h1>

      <form onSubmit={addService} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white p-2">
          Add Service
        </button>
      </form>

      <ul>
        {services.map((service) => (
          <li
            key={service._id}
            className="border-b py-2 flex justify-between items-center"
          >
            <span>
              <strong>{service.title}</strong>: {service.description}
            </span>
            <button
              onClick={() => deleteService(service._id)}
              className="bg-red-600 text-white px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
