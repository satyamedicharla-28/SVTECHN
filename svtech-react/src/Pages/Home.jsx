import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./Home.css";
import Layout from "../components/Layout";
function Home() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  // Hero Slider Images
  const images = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Layout>

      {/* ================= HERO ================= */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${images[current]})`,
        }}
      >
        <div className="overlay">
          <h1>Welcome to SVTech Networks Pvt. Ltd.</h1>

          <p>
            Delivering innovative Telecom, Fiber Network Design,
            GIS Mapping, Survey, CAD Services and Project
            Management solutions with quality, precision and
            customer satisfaction.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/services")}
          >
            Explore Services
          </button>
        </div>

        {/* Previous Button */}
        <button
          className="slider-btn left"
          onClick={prevSlide}
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          className="slider-btn right"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Dots */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

        {/* Scroll Down */}
        <div
          className="scroll-down"
          onClick={scrollToAbout}
        >
          <ChevronDown size={45} />
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        className="about"
        ref={aboutRef}
      >
        <div className="about-content">

          <p className="about-subtitle">
            ABOUT US
          </p>

          <h2>SVTech Networks</h2>

          <p>
            SVTech Networks Private Limited is a leading telecom engineering
            company providing Fiber Network Design, GIS Mapping, Survey,
            CAD Drafting, Telecom Planning and Project Management services.
          </p>

          <p>
            We help telecom operators build reliable, scalable and future-ready
            communication infrastructure using modern engineering practices
            and experienced professionals.
          </p>

          <button
            className="learn-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

        </div>
      </section>

    </Layout>
  );
}

export default Home;