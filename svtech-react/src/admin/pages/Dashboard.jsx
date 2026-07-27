import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

import "../css/dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplicants: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const jobsRes = await axios.get(
        "/api/jobs/count"
      );

      const applicantsRes = await axios.get(
        "/api/applicants/count"
      );

      setStats({
        totalJobs: jobsRes.data.totalJobs,
        totalApplicants: applicantsRes.data.totalApplicants,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <h3>Welcome Admin</h3>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Total Jobs</h3>
            <h1>{stats.totalJobs}</h1>
          </div>

          <div className="card">
            <h3>Applicants</h3>
            <h1>{stats.totalApplicants}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;