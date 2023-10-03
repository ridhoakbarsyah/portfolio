import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area bg-dark text-white py-12 mt-10">
      <div className="container mx-auto">
        <div className="footer-content text-center">
          <a href="./index.html" className="logo">
            <img src="./logo.svg" alt="Logo" className="mx-auto" />
          </a>
          <ul className="footer-menu mt-6 space-x-6 flex justify-center">
            <li>
              <a href="index.html" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="works.html" className="text-white">
                Works
              </a>
            </li>
            <li>
              <a href="contact.html" className="text-white">
                Contact
              </a>
            </li>
          </ul>
          <p className="mt-6 text-gray-400">
            &copy; All rights reserved by <span className="text-blue-500">WordPress River</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
