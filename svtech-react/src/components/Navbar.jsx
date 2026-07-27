import { NavLink, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo-section">

        <img src={logo} alt="SV Tech Logo" className="logo-img" />

        <div className="logo-divider"></div>

        <div className="logo-text">

          <h2>SV TECH NETWORKS</h2>

          <div className="company-subtitle">
            <span className="line"></span>

            <p>PRIVATE LIMITED</p>

            <span className="line"></span>
          </div>

        </div>

      </div>

      <nav className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/services">Services</NavLink>

        <NavLink to="/careers">Careers</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <Link to="/admin" className="admin-btn">
          <FaUser />
          Admin
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;
