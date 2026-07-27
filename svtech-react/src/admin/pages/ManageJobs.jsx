import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

import "../css/dashboard.css";
import "../css/managejobs.css";

function ManageJobs() {
  const [job, setJob] = useState({
    title: "",
    location: "",
    experience: "",
    description: "",
  });

  const [jobs, setJobs] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      const res = await axios.get("/api/jobs");
      console.log("Jobs:", res.data);
      setJobs(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  // Handle Input
  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("===== FORM SUBMITTED =====");
    console.log(job);

    try {
      if (editId) {
        const response = await axios.put(
          `/api/jobs/${editId}`,
          job
        );

        console.log("Update Response:", response.data);
        alert("Job Updated Successfully");
      } else {
        const response = await axios.post(
          "/api/jobs",
          job
        );

        console.log("Add Response:", response.data);
        alert("Job Added Successfully");
      }

      setJob({
        title: "",
        location: "",
        experience: "",
        description: "",
      });

      setEditId(null);

      fetchJobs();
    } catch (err) {
      console.error("API ERROR");

      if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
      } else if (err.request) {
        console.log("No response received from server");
      } else {
        console.log(err.message);
      }

      alert("Unable to save job. Check console.");
    }
  };

  // Edit Job
  const handleEdit = (item) => {
    setJob({
      title: item.title,
      location: item.location,
      experience: item.experience,
      description: item.description,
    });

    setEditId(item._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete Job
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job?")) return;

    try {
      await axios.delete(`/api/jobs/${id}`);

      alert("Job Deleted Successfully");

      fetchJobs();
    } catch (err) {
      console.error(err);
      alert("Delete Failed");
    }
  };

  // Cancel Editing
  const cancelEdit = () => {
    setEditId(null);

    setJob({
      title: "",
      location: "",
      experience: "",
      description: "",
    });
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="manage-jobs">

        <h1>Manage Jobs</h1>

        <form onSubmit={handleSubmit} className="job-form">

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={job.experience}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={job.description}
            onChange={handleChange}
            required
          />

          <div className="button-group">

            <button
              type="submit"
              className="add-btn"
            >
              {editId ? "Update Job" : "Add Job"}
            </button>

            {editId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

        <h2>Job List</h2>

        <table className="jobs-table">

          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Experience</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {jobs.length > 0 ? (
              jobs.map((item) => (
                <tr key={item._id}>

                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.experience}</td>
                  <td>{item.description}</td>

                  <td>

                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Jobs Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default ManageJobs;