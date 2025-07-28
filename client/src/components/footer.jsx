import React from 'react';
import { usejob } from '../context/jobcontext.jsx';

const Footer = () => {

    const { title } = usejob();
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
          <p className="text-sm">
            Your trusted platform to find Government, Private, Part-Time, and Self-Employment opportunities across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Gov Jobs</a></li>
            <li><a href="#" className="hover:text-white">Private Jobs</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: rahns5080@gmail.com</li>
            <li>Phone: +91-9692090224</li>
            <li>Address: Sambalpur, Odisha, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © {new Date().getFullYear()}{title}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
