import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Make sure to create and link a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer-main mt-5">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Shop</h2>
          <ul>
            <li><Link to="/category/women">Women</Link></li>
            <li><Link to="/category/men">Men</Link></li>
            <li><Link to="/category/kids">Kids</Link></li>
            <li><Link to="/category/Perfumes">Perfumes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Customer Service</h2>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
  
            <li><Link to="/policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>About Us</h2>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Connect</h2>
          <ul className="social-media">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>All Rights Reserved &copy; .Store</p>
      </div>
    </footer>
  );
};

export default Footer;
