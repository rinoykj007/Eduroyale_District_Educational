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
          {/* Right Side - Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Kollam Office */}
            <div className="transform hover:scale-[1.02] transition-all duration-300 p-4 rounded-lg bg-gradient-to-br from-slate-900/90 to-blue-950/80 hover:from-blue-950/90 hover:to-indigo-950/90 backdrop-blur-sm border border-blue-900/30 shadow-lg">
              <h4 className="text-sm font-semibold mb-2 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                KOLLAM
              </h4>
              <div className="text-lg font-bold mb-2 hover:text-blue-300 transition-colors duration-300 font-poppins">
                (+91) 8086 606 605
              </div>
              <ul className="space-y-2 text-xs font-poppins">
                <li className="text-gray-300">Tel: (+91) 474 2750005</li>
                <li className="text-gray-300">Fax: (+91) 474 2750005</li>
                <li className="text-gray-300 mt-2">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-6 h-6 mr-3 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-semibold text-gray-300 text-xs">
                      Address:
                    </span>
                  </div>
                  <div className="ml-9 text-gray-300 font-poppins text-xs">
                    EDUROYALE Overseas Education Consultants,
                    <br />
                    Building No:MIC VIII/1712/666A,
                    <br />
                    Opp:University of Kerala Information Centre,
                    <br />
                    SN College Junction, Kollam, Kerala - 691001
                  </div>
                </li>
                <li className="flex items-center text-gray-300 mt-2 font-poppins">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email: contact@eduroyale.in</span>
                </li>
              </ul>
            </div>

            {/* Trivandrum Office */}
            <div className="transform hover:scale-[1.02] transition-all duration-300 p-4 rounded-lg bg-gradient-to-br from-slate-900/90 to-blue-950/80 hover:from-blue-950/90 hover:to-indigo-950/90 backdrop-blur-sm border border-blue-900/30 shadow-lg">
              <h4 className="text-sm font-semibold mb-2 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                TRIVANDRUM
              </h4>
              <div className="text-lg font-bold mb-2 hover:text-blue-300 transition-colors duration-300 font-poppins">
                (+91) 9746 677 711
              </div>
              <ul className="space-y-2 text-xs font-poppins">
                <li className="text-gray-300">Tel: (+91) 470 2620009</li>
                <li className="text-gray-300">Fax: (+91) 470 2620009</li>
                <li className="text-gray-300 mt-2">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-6 h-6 mr-3 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-semibold text-gray-300 text-xs">
                      Address:
                    </span>
                  </div>
                  <div className="ml-9 text-gray-300 font-poppins text-xs">
                    EDUROYALE Overseas Education Consultants,
                    <br />
                    Building No: XI/1477, Krishna Towers,
                    <br />
                    Near Private Bus stand, Attingal,
                    <br />
                    Trivandrum, Kerala - 695101
                  </div>
                </li>
                <li className="flex items-center text-gray-300 mt-2 font-poppins">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email: contact@eduroyale.in</span>
                </li>
              </ul>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-start space-x-2 flex-wrap gap-y-2">
              {/* Facebook */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaFacebookF className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
              {/* X (Twitter) */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="X (Twitter)"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaXTwitter className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaLinkedinIn className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaInstagram className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="YouTube"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaYoutube className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
              {/* WhatsApp */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="WhatsApp"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaWhatsapp className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
              {/* Telegram */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="Telegram"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaTelegramPlane className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
              {/* TikTok */}
              <a
                href="#"
                className="group relative p-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-950 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 border border-blue-900/30 shadow-lg"
                aria-label="TikTok"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaTiktok className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
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
