import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <div className="footer-container">
        <div className="footer-text">
          © 2026 <strong>SV Tech Networks Private Limited</strong>. All Rights Reserved |
          Hyderabad, Telangana, India |
          {" "}
          <a href="tel:+919951490016" className="footer-phone">
            +91 99514 90016
          </a>
        </div>

        <div className="footer-social">
          <a
            href=linkedin.com/in/sv-tech-networks-private-limited-4297a6345
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

    </footer>
  );
}

export default Footer;
