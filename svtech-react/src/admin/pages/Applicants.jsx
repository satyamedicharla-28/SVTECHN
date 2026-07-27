import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import "../css/dashboard.css";
import "../css/applicants.css";

function Applicants() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, []);

  // Fetch Applicants
  const fetchApplicants = async () => {
    try {
      const res = await axios.get(
        "/api/applicants"
      );

      setApplicants(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch applicants");
    }
  };

  // Delete Applicant
  const deleteApplicant = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this applicant?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `/api/applicants/${id}`
      );

      alert("Applicant Deleted Successfully");

      fetchApplicants();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  // Download Excel
  const downloadExcel = () => {
    const data = applicants.map((item) => ({
      Name: item.name,
      Email: item.email,
      Phone: item.phone,
      Job: item.jobTitle,
      Experience: item.experience,
      Status: item.status,
      Resume: item.resume
        ? `/uploads/${item.resume}`
        : "No Resume",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Applicants"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const fileData = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(fileData, "Applicants.xlsx");
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">

        <div className="table-header">
          <h1>Applicants</h1>

          <button
            className="download-btn"
            onClick={downloadExcel}
          >
            Download Excel
          </button>
        </div>

        <table className="applicant-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job</th>
              <th>Experience</th>
              <th>Resume</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {applicants.length > 0 ? (

              applicants.map((item) => (

                <tr key={item._id}>

                  <td>{item.name}</td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td>{item.jobTitle}</td>

                  <td>{item.experience}</td>

                  <td>
                    {item.resume ? (
                      <a
                        href={`/uploads/${item.resume}`}
                        target="_blank"
                        rel="noreferrer"
                        className="resume-link"
                      >
                        View Resume
                      </a>
                    ) : (
                      <span className="no-resume">
                        No Resume
                      </span>
                    )}
                  </td>

                  <td>{item.status}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteApplicant(item._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  style={{
                    textAlign: "center",
                    padding: "25px",
                    fontWeight: "600",
                  }}
                >
                  No Applicants Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Applicants;