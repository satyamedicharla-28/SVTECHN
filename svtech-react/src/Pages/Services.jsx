import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import "./Services.css";
import bgImage from "../assets/Design.jpg";
function Services() {
  return (
    <Layout>

      <div
        className="services-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="services-title">Our Services</h1>

        <div className="service-grid">

          <Link
            to="/services/telecom-design"
            className="service-card"
          >
            <h2>Telecom Design</h2>
            <p>
              Planning and designing reliable fiber optic and telecom
              infrastructure.
            </p>
          </Link>

          <Link
            to="/services/cad-services"
            className="service-card"
          >
            <h2>CAD Services</h2>
            <p>
              Professional AutoCAD drafting and engineering drawing
              solutions.
            </p>
          </Link>

          <Link
            to="/services/gis-solutions"
            className="service-card"
          >
            <h2>GIS Solutions</h2>
            <p>
              GIS mapping, spatial analysis and network planning
              services.
            </p>
          </Link>

        </div>
      </div>

    </Layout>
  );
}

export default Services;