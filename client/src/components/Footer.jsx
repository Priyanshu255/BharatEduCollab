import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-2">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: bharateducollab@gmail.com</p>
            <p>Phone: +91 964567890</p>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>123 Main Street</p>
            <p>Indore, Madhya Pradesh 32345</p>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates</p>
            <form>
              <input type="email" className="mb-2" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} BharatEduCollab</p>
      </div>
    </footer>
  );
};

export default Footer;
