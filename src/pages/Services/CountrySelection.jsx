import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/Country_Selection.json";

const getCardStyle = (index) => {
  const colors = [
    "rgba(240, 249, 255, 0.9)", // Light blue
    "rgba(254, 242, 242, 0.9)", // Light red
    "rgba(236, 253, 245, 0.9)", // Light green
    "rgba(255, 247, 237, 0.9)", // Light orange
    "rgba(239, 246, 255, 0.9)", // Another light blue
    "rgba(252, 231, 243, 0.9)", // Light pink
  ];
  return colors[index % colors.length];
};

const CountrySelection = () => {
  const countries = [
    {
      country: "United States",
      flag: "🇺🇸",
      features: [
        "World-class universities",
        "Diverse culture",
        "Research opportunities",
        "OPT programs",
      ],
      universities: ["Harvard", "MIT", "Stanford"],
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      features: [
        "Rich academic heritage",
        "Quality education",
        "Work opportunities",
        "Cultural exposure",
      ],
      universities: ["Oxford", "Cambridge", "Imperial"],
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      features: [
        "Immigration friendly",
        "Quality of life",
        "Post-study work",
        "Affordable education",
      ],
      universities: ["Toronto", "UBC", "McGill"],
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      features: [
        "High living standards",
        "Work while studying",
        "PR opportunities",
        "Global recognition",
      ],
      universities: ["Melbourne", "Sydney", "ANU"],
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      features: [
        "Safe environment",
        "Work rights",
        "Quality education",
        "Natural beauty",
      ],
      universities: ["Auckland", "Otago", "Victoria"],
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      features: [
        "Low/No tuition",
        "Innovation hub",
        "Work opportunities",
        "Rich culture",
      ],
      universities: ["TUM", "LMU Munich", "RWTH Aachen"],
    },
  ];

  const comparisonFactors = [
    {
      title: "Education Cost",
      description: "Compare tuition fees and living expenses across countries",
      icon: "💰",
    },
    {
      title: "Living Standards",
      description: "Evaluate quality of life and safety standards",
      icon: "🏠",
    },
    {
      title: "Work Rights",
      description: "Understand work opportunities during and after study",
      icon: "💼",
    },
    {
      title: "Visa Process",
      description: "Learn about visa requirements and processing times",
      icon: "✈️",
    },
  ];

  const studyRequirements = [
    {
      title: "Academic Requirements",
      items: [
        "High School/Bachelor's Degree",
        "Academic Transcripts",
        "Standardized Test Scores",
        "English Proficiency Tests",
      ],
    },
    {
      title: "Financial Requirements",
      items: [
        "Tuition Fee Coverage",
        "Living Expenses Proof",
        "Bank Statements",
        "Scholarship Options",
      ],
    },
    {
      title: "Documentation",
      items: [
        "Valid Passport",
        "Statement of Purpose",
        "Letters of Recommendation",
        "CV/Resume",
      ],
    },
    {
      title: "Additional Requirements",
      items: [
        "Health Insurance",
        "Medical Examinations",
        "Portfolio (if applicable)",
        "Work Experience (if required)",
      ],
    },
  ];

  const timelineSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Understand your preferences and requirements",
    },
    {
      step: "2",
      title: "Country Analysis",
      description: "Compare suitable countries based on your profile",
    },
    {
      step: "3",
      title: "University Selection",
      description: "Shortlist universities and programs",
    },
    {
      step: "4",
      title: "Final Decision",
      description: "Choose the best country and university",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[#F7FAFC] to-[#F5F7F4] min-h-screen text-[#2D3748] font-moderustic">
      {/* Hero Section with Animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 mt-14 sm:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium tracking-wide"
            >
              Expert Country Guidance
            </motion.span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E50] leading-tight">
              Country Selection
              <span className="block text-blue-600 mt-3">Guidance</span>
            </h1>
            <p className="text-base sm:text-lg xl:text-xl text-[#34495E] max-w-2xl">
              Choose the perfect destination for your international education
              with our expert country selection guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold text-base border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] relative">
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "100%", height: "100%" }}
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popular Countries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 group hover:bg-white"
              style={{
                backgroundColor: getCardStyle(index),
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-[#2C3E50] group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {country.flag}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50] group-hover:text-[#2C3E50]">
                {country.country}
              </h3>
              <ul className="space-y-2 mb-4">
                {country.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-[#34495E] group-hover:text-[#34495E] flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#2C3E50] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-[#2C3E50] font-semibold mb-2 group-hover:text-[#2C3E50]">
                  Top Universities:
                </p>
                <p className="text-[#34495E] group-hover:text-[#34495E]">
                  {country.universities.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#2C3E50]">
          Country Comparison Factors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {comparisonFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 group hover:bg-white"
              style={{
                backgroundColor: getCardStyle(index),
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <motion.div
                className="text-4xl mb-4 text-[#2C3E50]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {factor.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] group-hover:text-[#2C3E50]">
                {factor.title}
              </h3>
              <p className="text-[#34495E] group-hover:text-[#34495E]">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Study Requirements Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#2C3E50]">
          Study Requirements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {studyRequirements.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-gray-100"
              style={{
                backgroundColor: getCardStyle(index),
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50] group-hover:text-[#2C3E50]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#34495E] group-hover:text-[#34495E] flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#2C3E50] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#2C3E50]">
          Selection Process Timeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {timelineSteps.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 group hover:bg-white"
                style={{
                  backgroundColor: getCardStyle(index),
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="text-3xl font-bold text-[#2C3E50] mb-4">
                  Step {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2C3E50] group-hover:text-[#2C3E50]">
                  {process.title}
                </h3>
                <p className="text-[#34495E] group-hover:text-[#34495E]">
                  {process.description}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-[#2C3E50]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight">
              Ready to Choose Your
              <span className="text-[#3b82f6] block mt-3">
                Study Destination?
              </span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium">
            Get personalized country recommendations based on your preferences
            and requirements.
          </p>
          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-[#3b82f6] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-xl text-lg group"
            >
              Compare Countries
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySelection;
