import React from 'react';
import './Footer.css'; // adjust the path if your CSS is elsewhere

const Footer = () => {
  return (
    <footer className="footers mt-10">
      <div className="container">
        <div className="footers-cont">
          <h6 className="copyright">
            {new Date().getFullYear()} Edrick | Dev. All rights reserved.
          </h6>
          <div className="footers-socials">
            <h6 className="connect-title">Let's Connect!</h6>
            <div className="socials-wrapper">
              <div className="contact-socials">
                <a
                  className="soc-med"
                  href="https://github.com/EdCanzana12"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--color': '#4267B2' }}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <div className="tooltip">GitHub</div>
              </div>
              <div className="contact-socials">
                <a
                  className="soc-med"
                  href="https://www.linkedin.com/in/edrick-canzana-546173354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--color': '#0072b1' }}
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <div className="tooltip">LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
