// components/landingPage/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HomeRoom</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Renters</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Apply
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Rent Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Real Estate Investors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Austin, TX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Dallas, TX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Houston, TX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Kansas City, MO
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@homeroom.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} HomeRoom, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
