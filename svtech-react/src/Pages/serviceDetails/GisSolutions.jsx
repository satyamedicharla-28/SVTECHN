import "./TelecomDesign.css";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import {
  Map,
  MapPinned,
  Globe,
  Layers,
  Route,
  FileText,
  Cpu,
  Network,
  PencilRuler,
} from "lucide-react";

function GisSolutions() {
  const servicesRef = useRef(null);

  return (
    <div className="telecom-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600"
          alt="GIS Solutions"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-tagline">
            MAP • ANALYZE • MANAGE
          </p>

          <h1>GIS Solutions</h1>

          <p className="hero-description">
            Delivering intelligent Geographic Information System (GIS)
            solutions for telecom, utilities, infrastructure, smart cities,
            and enterprise asset management.
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
        <h2>Welcome to SV Tech GIS Solutions</h2>

        <p>
          SV Tech delivers GIS mapping, spatial analysis, geospatial database
          management, telecom asset mapping, utility mapping, and intelligent
          location-based solutions using industry-leading GIS platforms.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section" ref={servicesRef}>

        <div className="section-title">
          <h2>Our GIS Services</h2>

          <p>
            End-to-end GIS services for telecom, utilities, transportation,
            and infrastructure industries.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="icon-box">
              <Map size={45} />
            </div>

            <h3>GIS Mapping</h3>

            <p>
              Digital mapping, feature extraction, map creation and cartography.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Layers size={45} />
            </div>

            <h3>Spatial Analysis</h3>

            <p>
              Overlay analysis, buffering, terrain analysis and location intelligence.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Network size={45} />
            </div>

            <h3>GIS Database</h3>

            <p>
              Enterprise GIS database creation, maintenance and quality control.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Route size={45} />
            </div>

            <h3>Network Analysis</h3>

            <p>
              Utility and telecom route planning, tracing and optimization.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <MapPinned size={45} />
            </div>

            <h3>Asset Mapping</h3>

            <p>
              Telecom assets, utility poles, cables and infrastructure mapping.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <PencilRuler size={45} />
            </div>

            <h3>Map Digitization</h3>

            <p>
              Convert paper maps, PDFs and satellite imagery into digital GIS data.
            </p>
          </div>

        </div>

      </section>

      {/* ================= SOFTWARE ================= */}
      <section className="software-section">

        <div className="section-title">
          <h2>Software Expertise</h2>

          <p>
            Professional GIS software used for mapping, analysis and enterprise GIS.
          </p>
        </div>

        <div className="software-grid">

          <div className="software-card">
            <Map size={55} color="#0056b3" />
            <h3>ArcGIS</h3>
            <p>Enterprise GIS</p>
          </div>

          <div className="software-card">
            <Globe size={55} color="#0056b3" />
            <h3>QGIS</h3>
            <p>Open Source GIS</p>
          </div>

          <div className="software-card">
            <Network size={55} color="#0056b3" />
            <h3>PostGIS</h3>
            <p>Spatial Database</p>
          </div>

          <div className="software-card">
            <Layers size={55} color="#0056b3" />
            <h3>ArcGIS Pro</h3>
            <p>Spatial Analysis</p>
          </div>

          <div className="software-card">
            <Cpu size={55} color="#0056b3" />
            <h3>AutoCAD Map 3D</h3>
            <p>GIS & CAD Integration</p>
          </div>

          <div className="software-card">
            <FileText size={55} color="#0056b3" />
            <h3>Google Earth Pro</h3>
            <p>Geospatial Visualization</p>
          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="process-section">

        <div className="section-title">
          <h2>Our GIS Workflow</h2>

          <p>
            A proven workflow that ensures accurate GIS data and reliable project delivery.
          </p>
        </div>

        <div className="process-container">

          <div className="process-step">
            <div className="step-circle">1</div>
            <h3>Data Collection</h3>
            <p>Collect field and spatial information.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">2</div>
            <h3>Data Processing</h3>
            <p>Validate and organize GIS datasets.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">3</div>
            <h3>Mapping</h3>
            <p>Create maps and perform spatial analysis.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">4</div>
            <h3>Quality Check</h3>
            <p>Review GIS data for accuracy and standards.</p>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <div className="step-circle">5</div>
            <h3>Delivery</h3>
            <p>Deliver GIS datasets, maps and project documentation.</p>
          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-box">

        <h2>Need GIS Solutions?</h2>

        <p>
          Contact our GIS specialists for professional mapping, analysis,
          telecom GIS, and geospatial consulting services.
        </p>

        <button>Contact Us</button>

      </section>

    </div>
  );
}

export default GisSolutions;