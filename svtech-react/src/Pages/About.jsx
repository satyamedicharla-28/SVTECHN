import Layout from "../components/Layout";
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Lightbulb,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <Layout>

      {/* Hero */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About SVTech Networks</h1>
          <p>
            Delivering innovative Telecom, GIS and CAD Engineering
            Solutions with Quality, Precision and Excellence.
          </p>
        </div>
      </section>

      {/* Company */}
      <section className="company-section">

        <div className="company-left">
          <div className="info-card who-card">
            <h2>Who We Are</h2>

            <p>
              SVTech Networks Private Limited is a leading engineering company
              providing Telecom Design, GIS Solutions, CAD Drafting, Fiber
              Network Planning, Survey and Project Management services.
            </p>

            <p>
              We support telecom operators, utility providers and infrastructure
              companies by delivering reliable engineering solutions using
              modern technologies and highly skilled professionals.
            </p>
          </div>
        </div>

        <div className="company-right">

          <div className="info-card">
            <Eye size={45} />
            <h3>Our Vision</h3>

            <p>
              To become a trusted global engineering partner delivering
              world-class telecom and GIS solutions.
            </p>
          </div>

          <div className="info-card">
            <Target size={45} />
            <h3>Our Mission</h3>

            <p>
              Deliver innovative engineering services that exceed customer
              expectations with quality and precision.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose */}
      <section className="choose-section">

        <h2>Why Choose SVTech?</h2>

        <div className="choose-grid">

          <div className="choose-card">
            <Award size={45} />
            <h3>Quality Engineering</h3>
            <p>International engineering standards and quality assurance.</p>
          </div>

          <div className="choose-card">
            <Users size={45} />
            <h3>Experienced Team</h3>
            <p>Professional engineers with industry expertise.</p>
          </div>

          <div className="choose-card">
            <Globe size={45} />
            <h3>Modern Technology</h3>
            <p>Latest CAD, GIS and Telecom engineering software.</p>
          </div>

          <div className="choose-card">
            <Lightbulb size={45} />
            <h3>Innovative Solutions</h3>
            <p>Smart engineering solutions for complex projects.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-contact">

        <h2>Let's Build the Future Together</h2>

        <p>
          Contact SVTech Networks for reliable Telecom Engineering,
          GIS Mapping and CAD Design Services.
        </p>

        <button
          className="contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

      </section>

    </Layout>
  );
}

export default About;