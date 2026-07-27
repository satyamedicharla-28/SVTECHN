import "./TelecomDesign.css";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import {
  PencilRuler,
  Building2,
  Layers,
  Ruler,
  Home,
  FileText,
  Cpu,
  Box,
  PenTool,
} from "lucide-react";

function CadServices() {
  const servicesRef = useRef(null);

  return (
    <div className="telecom-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600"
          alt="CAD Services"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-tagline">
            DESIGN • DRAFT • DELIVER
          </p>

          <h1>CAD Design Services</h1>

          <p className="hero-description">
            Professional CAD drafting, 2D & 3D modeling, engineering drawings,
            architectural drafting, structural detailing and construction
            documentation.
          </p>

          <button
            className="hero-btn"
            onClick={() =>
              servicesRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Services
          </button>

          <div className="slider-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        <div className="scroll-icon">
          <ChevronDown size={35} />
        </div>

      </section>

      {/* ================= WELCOME ================= */}

      <section className="welcome-section">

        <h2>Welcome to SV Tech CAD Design Services</h2>

        <p>
          SV Tech provides professional Computer Aided Design (CAD) services
          for architecture, construction, infrastructure and manufacturing
          industries. We deliver precise engineering drawings, detailed layouts
          and 3D models using industry-standard software.
        </p>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-section" ref={servicesRef}>

        <div className="section-title">
          <h2>Our CAD Services</h2>

          <p>
            Complete CAD drafting solutions for residential, commercial,
            industrial and infrastructure projects.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="icon-box">
              <Building2 size={45} />
            </div>

            <h3>Architectural Drafting</h3>

            <p>
              Floor plans, elevations, sections and detailed architectural
              drawings.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Layers size={45} />
            </div>

            <h3>Structural Drafting</h3>

            <p>
              Reinforcement detailing, steel detailing and structural CAD
              documentation.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Box size={45} />
            </div>

            <h3>3D CAD Modeling</h3>

            <p>
              High-quality 3D models for product development and engineering.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <PenTool size={45} />
            </div>

            <h3>Mechanical Drafting</h3>

            <p>
              Manufacturing drawings, assembly drawings and fabrication
              documents.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <PencilRuler size={45} />
            </div>

            <h3>CAD Conversion</h3>

            <p>
              Convert PDF, hand sketches and paper drawings into editable CAD
              files.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <FileText size={45} />
            </div>

            <h3>As-Built Drawings</h3>

            <p>
              Accurate as-built documentation and project revisions for
              construction.
            </p>
          </div>

        </div>

      </section>

      {/* ================= SOFTWARE ================= */}

      <section className="software-section">

        <div className="section-title">
          <h2>Software Expertise</h2>

          <p>
            We work with industry-leading CAD software to deliver accurate
            engineering solutions.
          </p>
        </div>

        <div className="software-grid">

          <div className="software-card">
            <PencilRuler size={55} color="#0056b3" />
            <h3>AutoCAD</h3>
            <p>2D & 3D Drafting</p>
          </div>

          <div className="software-card">
            <Building2 size={55} color="#0056b3" />
            <h3>Revit</h3>
            <p>BIM Modeling</p>
          </div>

          <div className="software-card">
            <Box size={55} color="#0056b3" />
            <h3>SolidWorks</h3>
            <p>Mechanical Design</p>
          </div>

          <div className="software-card">
            <Layers size={55} color="#0056b3" />
            <h3>MicroStation</h3>
            <p>Infrastructure Design</p>
          </div>

          <div className="software-card">
            <Home size={55} color="#0056b3" />
            <h3>SketchUp</h3>
            <p>3D Modeling</p>
          </div>

          <div className="software-card">
            <Cpu size={55} color="#0056b3" />
            <h3>Navisworks</h3>
            <p>Project Coordination</p>
          </div>

          <div className="software-card">
            <Ruler size={55} color="#0056b3" />
            <h3>Civil 3D</h3>
            <p>Infrastructure Design</p>
          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="process-section">

        <div className="section-title">

          <h2>Our Process</h2>

          <p>
            Our streamlined CAD workflow ensures high-quality drawings and
            timely project delivery.
          </p>

        </div>

        <div className="process-container">

          <div className="process-step">
            <div className="step-circle">1</div>
            <h3>Requirement Analysis</h3>
            <p>Understand project scope and client requirements.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">2</div>
            <h3>Planning</h3>
            <p>Create preliminary layouts and engineering concepts.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">3</div>
            <h3>CAD Drafting</h3>
            <p>Prepare accurate engineering drawings and models.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">4</div>
            <h3>Quality Check</h3>
            <p>Review drawings for standards and client requirements.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">5</div>
            <h3>Final Delivery</h3>
            <p>Deliver CAD files and construction-ready documentation.</p>
          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-box">

        <h2>Need CAD Design Services?</h2>

        <p>
          Contact our CAD experts today for professional drafting and
          engineering solutions.
        </p>

        <button>Contact Us</button>

      </section>

    </div>
  );
}

export default CadServices;