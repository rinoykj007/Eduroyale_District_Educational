import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setServicesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    if (servicesDropdown) setServicesDropdown(false);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesDropdown(!servicesDropdown);
  };

  const handleServiceClick = (path: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(path);
    setServicesDropdown(false);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-white rounded-full shadow-lg border border-gray-200">
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold font-['Outfit'] tracking-tight"
              >
                Edu<span className="text-blue-600">Royale</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block flex-grow font-['Plus_Jakarta_Sans']">
              <div className="ml-10 flex items-center justify-center space-x-8 text-lg">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  Courses
                </Link>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleServicesDropdown}
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                        servicesDropdown ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute z-50 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 transform origin-top ${
                      servicesDropdown
                        ? "opacity-100 visible scale-100"
                        : "opacity-0 invisible scale-95"
                    }`}
                  >
                    <Link
                      to="/services/expert-counseling"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Expert Counseling
                    </Link>
                    <Link
                      to="/services/course-selection"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Course Selection
                    </Link>
                    <Link
                      to="/services/country-selection"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Country Selection
                    </Link>
                    <Link
                      to="/services/bank-loan"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Bank Loan
                    </Link>
                    <Link
                      to="/services/visa-guidance"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Visa Guidance
                    </Link>
                    <Link
                      to="/services/post-visa-assistance"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Post-Visa Assistance
                    </Link>
                    <Link
                      to="/services/travel-assistance"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Travel Assistance
                    </Link>
                    <Link
                      to="/services/free-ielts-training"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setServicesDropdown(false)}
                    >
                      Free IELTS Training
                    </Link>
                  </div>
                </div>
                <Link
                  to="/blog"
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon */}
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-20 mx-2 z-[100] font-['Plus_Jakarta_Sans']"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <button
                onClick={toggleServicesDropdown}
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md flex items-center justify-between"
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesDropdown && (
                <div className="pl-4 space-y-1">
                  {[
                    {
                      path: "/services/expert-counseling",
                      label: "Expert Counseling",
                    },
                    {
                      path: "/services/course-selection",
                      label: "Course Selection",
                    },
                    {
                      path: "/services/country-selection",
                      label: "Country Selection",
                    },
                    { path: "/services/bank-loan", label: "Bank Loan" },
                    { path: "/services/visa-guidance", label: "Visa Guidance" },
                    {
                      path: "/services/post-visa-assistance",
                      label: "Post-Visa Assistance",
                    },
                    {
                      path: "/services/travel-assistance",
                      label: "Travel Assistance",
                    },
                    {
                      path: "/services/free-ielts-training",
                      label: "Free IELTS Training",
                    },
                  ].map((service) => (
                    <button
                      key={service.path}
                      onClick={(e) => handleServiceClick(service.path, e)}
                      className="w-full text-left px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              )}
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              {/* Add social media icons to mobile menu */}
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
