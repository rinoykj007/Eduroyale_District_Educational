"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <footer className="text-gray-200 font-poppins py-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <div className="mx-auto px-4 relative z-10">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-indigo-500/5 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - About and Navigation */}
          <div className="flex flex-col gap-6">
            {/* About Section */}
            <div className="transform hover:scale-[1.01] transition-all duration-300 bg-gradient-to-r from-slate-900/90 to-blue-950/80 p-4 rounded-lg backdrop-blur-sm border border-blue-900/30">
              <h3 className="text-lg font-bold mb-2 relative inline-block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                About EDUROYALE
              </h3>
              <div className="flex items-center">
                <p className="text-gray-300 text-xs leading-relaxed max-w-3xl mr-4 hover:text-blue-300 transition-colors duration-300 font-poppins">
                  EDUROYLAE commits to cater the aspiration of its clients by
                  making the international education and migration a hassle free
                  event. The institutions which we support in USA, UK, Canada,
                  New Zealand, Ireland, Australia, Sweden, and Portugal excels
                  in its quality of education...{" "}
                  <a
                    href="/about"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center group transition-all duration-300 text-xs"
                  >
                    view more
                    <svg
                      className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gradient-to-r from-slate-900/90 to-blue-950/80 p-4 rounded-lg backdrop-blur-sm border border-blue-900/30">
              <div className="flex flex-col group">
                <h4 className="text-sm font-semibold mb-2 uppercase relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Navigation
                </h4>
                <ul className="space-y-1.5 text-xs font-poppins">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400/80 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Home
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400/80 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        About Us
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400/80 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Courses
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center group"
                    >
                      <span className="text-blue-400/80 mr-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        ›
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Contact Us
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Study Abroad */}
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold mb-2 uppercase relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Study Abroad
                </h4>
                <ul className="space-y-1.5 text-xs font-poppins">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Ireland
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> UK
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Canada
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> New
                      Zealand
                    </a>
                  </li>
                </ul>
              </div>

              {/* Service */}
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold mb-2 uppercase relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Service
                </h4>
                <ul className="space-y-1.5 text-xs font-poppins">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Expert
                      Counseling
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Course
                      Selection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Country
                      Selection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Bank Loan
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tag */}
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold mb-2 uppercase relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Tag
                </h4>
                <ul className="space-y-1.5 text-xs font-poppins">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Academics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Student
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Go Abroad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-300 transition-colors flex items-center"
                    >
                      <span className="text-blue-400/80 mr-2">›</span> Student
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-blue-900/30 text-center">
          <p className="text-gray-400 hover:text-blue-300 transition-colors duration-300 font-poppins text-xs">
            &copy; {new Date().getFullYear()} EDUROYALE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
