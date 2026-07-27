import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

import "../css/dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplicants: 0,
    totalUsers: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "/api/jobs/count"
      );

      setStats({
        totalJobs: res.data.totalJobs,
        totalApplicants: 0,
        totalUsers: 0,
      });
    } catch (err) {
      console.log(err);
      alert("Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">

        <div className="dashboard-header">
          <h1>Dashboard</h1>

          <button
            className="refresh-btn"
            onClick={fetchDashboard}
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div className="cards">

            <div className="card">
              <h3>Total Jobs</h3>
              <h2>{stats.totalJobs}</h2>
            </div>

            <div className="card">
              <h3>Total Applicants</h3>
              <h2>{stats.totalApplicants}</h2>
            </div>

            <div className="card">
              <h3>Total Users</h3>
              <h2>{stats.totalUsers}</h2>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;