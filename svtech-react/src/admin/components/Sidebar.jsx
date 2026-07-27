import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaUsers,
  FaUserShield,
  FaSignOutAlt,
   FaEnvelope
} from "react-icons/fa";

import "../css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        <h2>SVTECH</h2>
        <p>Admin Panel</p>
      </div>

      <ul>

        <li>
          <Link to="/dashboard">
            <FaTachometerAlt />
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/jobs">
            <FaBriefcase />
            Manage Jobs
          </Link>
        </li>

        <li>
          <Link to="/applicants">
            <FaUsers />
            Applicants
          </Link>
        </li>

        <li>
  <Link to="/contact-messages">
    <FaEnvelope />
    Contact Messages
  </Link>
</li>

        <li>
          <Link to="/users">
            <FaUserShield />
            User Management
          </Link>
        </li>

        <li>
          <Link to="/admin">
            <FaSignOutAlt />
            Logout
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;