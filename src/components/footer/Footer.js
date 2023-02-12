import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light py-3 fixed-bottom">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <p className="text-muted d-block d-md-none">
            &copy; {new Date().getFullYear()} Company Name
          </p>
          <div className="d-flex">
            <a
              href="#"
              className="text-muted mx-3 d-block d-md-none"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare size={32} />
            </a>
            <a
              href="#"
              className="text-muted mx-3 d-block d-md-none"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitterSquare size={32} />
            </a>
            <a
              href="#"
              className="text-muted mx-3 d-block d-md-none"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagramSquare size={32} />
            </a>
            <a
              href="#"
              className="text-muted mx-3 d-block d-md-none"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
          <p className="text-muted d-none d-md-block">
            &copy; {new Date().getFullYear()} Company Name
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


           
