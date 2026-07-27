import { useState } from "react";
import api from "../services/api";
import "./ApplyModal.css";

function ApplyModal({ isOpen, onClose, selectedJob }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    coverLetter: "",
    resume: null,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("experience", formData.experience);
      data.append("currentCompany", formData.currentCompany);
      data.append("currentCTC", formData.currentCTC);
      data.append("expectedCTC", formData.expectedCTC);
      data.append("noticePeriod", formData.noticePeriod);
      data.append("coverLetter", formData.coverLetter);
      data.append("jobTitle", selectedJob?.title || "");

      if (formData.resume) {
        data.append("resume", formData.resume);
      }

      const response = await api.post("/applicants", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        alert("Application Submitted Successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          currentCompany: "",
          currentCTC: "",
          expectedCTC: "",
          noticePeriod: "",
          coverLetter: "",
          resume: null,
        });

        onClose();
      }
    } catch (error) {
      console.error("Application Error:", error);

      alert(
        error.response?.data?.message || "Failed to submit application."
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="apply-modal">

        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2>Apply for {selectedJob?.title}</h2>
          <p>Please complete the application form below.</p>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">

          <div className="form-grid">

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Experience *</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Current Company</label>
              <input
                type="text"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Current CTC</label>
              <input
                type="text"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Expected CTC</label>
              <input
                type="text"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Notice Period</label>
              <input
                type="text"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-group full-width">
            <label>Cover Letter</label>

            <textarea
              rows="5"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Write a short introduction..."
            />
          </div>

          <div className="upload-section">

            <label className="upload-box">

              <span>📄 Upload Resume (PDF / DOC / DOCX)</span>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />

            </label>

            {formData.resume && (
              <p className="file-name">
                Selected: {formData.resume.name}
              </p>
            )}

          </div>

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit Application
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default ApplyModal;