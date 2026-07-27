
import "./TelecomDesign.css";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import {
  Network,
  Workflow,
  Route,
  FileText,
  PencilRuler,
  MapPinned,
  Map,
  Cpu,
  Globe,
} from "lucide-react";

function TelecomDesign() {

  const servicesRef = useRef(null);

  return (
    <div className="telecom-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600"
          alt="Telecom Banner"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-tagline">
            INNOVATE • DESIGN • DELIVER
          </p>

          <h1>
            Telecom Design Services
          </h1>

          <p className="hero-description">
            Delivering innovative telecom engineering solutions for modern communication networks.
          </p>

          <button
            className="hero-btn"
            onClick={() => {
              servicesRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
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

      {/* ================= WELCOME SECTION ================= */}
      <section className="welcome-section">

        <h2>Welcome to SV Tech Telecom Design Services</h2>

        <p>
          SV Tech provides professional telecom engineering and network design services for global telecom operators,
          utility providers, and infrastructure companies. Our experienced engineering team delivers reliable,
          scalable, and cost-effective fiber network solutions using industry-leading design tools and best practices.
        </p>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section" ref={servicesRef}>

        <div className="section-title">
          <h2>Our Telecom Design Services</h2>
          <p>
            We provide complete telecom engineering solutions, from planning and surveying to detailed design and construction-ready documentation.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="icon-box"><Network size={45} /></div>
            <h3>FTTH Design</h3>
            <p>Complete Fiber-To-The-Home engineering solutions including feeder, distribution and drop network designs.</p>
          </div>

          <div className="service-card">
            <div className="icon-box"><Workflow size={45} /></div>
            <h3>FTTX Planning</h3>
            <p>Network planning and optimization for residential, commercial and enterprise broadband deployments.</p>
          </div>

          <div className="service-card">
            <div className="icon-box"><Route size={45} /></div>
            <h3>OSP Fiber Design</h3>
            <p>Outside Plant fiber routing, construction drawings, and infrastructure planning.</p>
          </div>

          <div className="service-card">
            <div className="icon-box"><FileText size={45} /></div>
            <h3>Permit Drawings</h3>
            <p>Municipal permit packages and utility coordination drawings.</p>
          </div>

          <div className="service-card">
            <div className="icon-box"><PencilRuler size={45} /></div>
            <h3>AutoCAD Drafting</h3>
            <p>Professional telecom drafting services with detailed engineering layouts and fiber routes.</p>
          </div>

          <div className="service-card">
            <div className="icon-box"><MapPinned size={45} /></div>
            <h3>GIS Mapping</h3>
            <p>Accurate GIS mapping, spatial analysis and telecom asset management.</p>
          </div>

        </div>
      </section>

      {/* ================= SOFTWARE EXPERTISE ================= */}
      <section className="software-section">

        <div className="section-title">
          <h2>Software Expertise</h2>
          <p>Industry-standard tools used for telecom engineering, GIS mapping, and network design solutions.</p>
        </div>

        <div className="software-grid">

          <div className="software-card">
            <PencilRuler size={55} color="#0056b3" />
            <h3>AutoCAD</h3>
            <p>Engineering Drafting</p>
          </div>

          <div className="software-card">
            <Map size={55} color="#0056b3" />
            <h3>ArcGIS</h3>
            <p>GIS Mapping</p>
          </div>

          <div className="software-card">
            <MapPinned size={55} color="#0056b3" />
            <h3>QGIS</h3>
            <p>Spatial Analysis</p>
          </div>

          <div className="software-card">
            <Network size={55} color="#0056b3" />
            <h3>IQGeo</h3>
            <p>Network Management</p>
          </div>

          <div className="software-card">
            <Cpu size={55} color="#0056b3" />
            <h3>ARAMIS</h3>
            <p>Telecom Engineering</p>
          </div>

          <div className="software-card">
            <Route size={55} color="#0056b3" />
            <h3>WALDO</h3>
            <p>Route Planning</p>
          </div>

          <div className="software-card">
            <Globe size={55} color="#0056b3" />
            <h3>Google Earth Pro</h3>
            <p>Geographic Visualization</p>
          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process-section">

        <div className="section-title">
          <h2>Our Process</h2>
          <p>We follow a proven engineering workflow to deliver high-quality telecom solutions efficiently.</p>
        </div>

        <div className="process-container">

          <div className="process-step">
            <div className="step-circle">1</div>
            <h3>Survey & Data Collection</h3>
            <p>Gather site information and requirements.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">2</div>
            <h3>Network Planning</h3>
            <p>Plan fiber routes and design structure.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">3</div>
            <h3>Detailed Design</h3>
            <p>Create CAD and GIS engineering drawings.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">4</div>
            <h3>Quality Check</h3>
            <p>Verify design accuracy and compliance.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">5</div>
            <h3>Client Delivery</h3>
            <p>Deliver final approved design package.</p>
          </div>

        </div>

      </section>

      

      {/* ================= CONTACT ================= */}
      <section className="contact-box">
        <h2>Need Telecom Design Services?</h2>
        <p>Contact our engineering team today to discuss your telecom requirements.</p>
        <button>Contact Us</button>
      </section>

    </div>
  );
}

export default TelecomDesign;