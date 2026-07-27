import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import api from "../services/api";
import "./Careers.css";
import ApplyModal from "./ApplyModal";

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <Layout>

      <div className="careers-page">
        <div className="page-header">
          <h1>Join Our Team</h1>
          <p>Build your career with SV Technologies</p>
        </div>

        <div className="career-grid">
          {loading ? (
            <p>Loading Jobs...</p>
          ) : jobs.length === 0 ? (
            <p>No Jobs Available</p>
          ) : (
            jobs.map((job) => (
              <div key={job._id} className="job-card">
                <h3>{job.title}</h3>

                <p>
                  <strong>📍 Location:</strong> {job.location}
                </p>

                <p>
                  <strong>💼 Experience:</strong> {job.experience}
                </p>

                <p>{job.description}</p>

                <button
                  className="apply-btn"
                  onClick={() => handleApply(job)}
                >
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>

        <ApplyModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          selectedJob={selectedJob}
        />
      </div>

    </Layout>
  );
}

export default Careers;