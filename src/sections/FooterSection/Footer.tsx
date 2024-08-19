import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/path/to/logo.png" alt="XYZ Logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <form className="footer-subscribe">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#">Shop All</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Help & FAQ</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Help & FAQ</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 XYZ. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
