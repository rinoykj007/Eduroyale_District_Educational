import React from "react";
import { motion } from "framer-motion";

import {
  FaPlane,
  FaHome,
  FaMobileAlt,
  FaPassport,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

const PostVisaAssistance = () => {
  const services = [
    {
      title: "Accommodation Support",
      description: "Help finding and securing suitable student accommodation",
      icon: <FaHome className="w-8 h-8 text-blue-600" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-white",
      textColor: "text-blue-800",
    },
    {
      title: "Airport Pickup",
      description: "Arrangement of airport pickup and initial settlement",
      icon: <FaPlane className="w-8 h-8 text-purple-600" />,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-white",
      textColor: "text-purple-800",
    },
    {
      title: "Bank Account Setup",
      description: "Assistance in opening local bank accounts",
      icon: <BsBank2 className="w-8 h-8 text-emerald-600" />,
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      iconBg: "bg-white",
      textColor: "text-emerald-800",
    },
    {
      title: "Local Registration",
      description: "Help with necessary local registrations and documentation",
      icon: <FaPassport className="w-8 h-8 text-indigo-600" />,
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconBg: "bg-white",
      textColor: "text-indigo-800",
    },
    {
      title: "SIM Card & Utilities",
      description: "Support in getting local phone connection and utilities",
      icon: <FaMobileAlt className="w-8 h-8 text-orange-600" />,
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-white",
      textColor: "text-orange-800",
    },
    {
      title: "Local Orientation",
      description:
        "Guidance about local transportation and essential locations",
      icon: <FaMapMarkedAlt className="w-8 h-8 text-cyan-600" />,
      bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
      iconBg: "bg-white",
      textColor: "text-cyan-800",
    },
  ];

  const reasons = [
    {
      title: "Experienced Team",
      description:
        "Our team has helped thousands of students settle abroad successfully",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-blue-800",
    },
    {
      title: "Comprehensive Support",
      description:
        "End-to-end assistance from airport pickup to local settlement",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      textColor: "text-purple-800",
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock support for any emergencies or queries",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      textColor: "text-emerald-800",
    },
  ];

  const essentialDocuments = [
    "Valid Passport and Visa",
    "University Acceptance Letter",
    "Accommodation Details",
    "Travel Insurance Documents",
    "Medical Records and Certificates",
    "Financial Documents",
  ];

  const personalItems = [
    "Weather-appropriate Clothing",
    "Basic Medications",
    "Electronic Adapters",
    "Local Currency",
    "Important Contact Numbers",
    "Personal Care Items",
  ];

  const timeline = [
    {
      day: "Day 1",
      title: "Arrival",
      tasks: ["Airport pickup", "Check-in to accommodation"],
    },
    {
      day: "Week 1",
      title: "Basic Setup",
      tasks: ["Bank account", "Phone connection", "Local registration"],
    },
    {
      day: "Week 2",
      title: "University",
      tasks: ["Campus orientation", "Course registration", "Student ID"],
    },
    {
      day: "Month 1",
      title: "Settlement",
      tasks: ["Local area familiarity", "Student community", "Regular routine"],
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 0.999, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  const cardStyle =
    "rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md";

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F0F9FF] min-h-screen text-gray-800 font-moderustic pt-14 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block p-2 px-6 rounded-full bg-blue-50 text-blue-700 font-medium mb-4">
            Post-Arrival Support
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-blue-900 px-4">
            Post-Visa Assistance
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive support services to help you settle into your new life
            abroad after visa approval.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="font-semibold text-blue-700">24/7</span>
              <span className="text-gray-600 ml-2">Support</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="font-semibold text-blue-700">100+</span>
              <span className="text-gray-600 ml-2">Universities</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="font-semibold text-blue-700">95%</span>
              <span className="text-gray-600 ml-2">Success Rate</span>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.bgColor} ${cardStyle}`}
            >
              <div
                className={`mb-4 p-3 ${service.iconBg} rounded-lg inline-block shadow-sm`}
              >
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${service.textColor}`}>
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            Why Choose Our Post-Visa Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${item.bgColor} ${cardStyle}`}
              >
                <h3 className={`text-xl font-semibold mb-3 ${item.textColor}`}>
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pre-Departure Checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            Pre-Departure Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br from-indigo-50 to-indigo-100 ${cardStyle}`}
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                Essential Documents
              </h3>
              <ul className="space-y-2">
                {essentialDocuments.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br from-blue-50 to-blue-100 ${cardStyle}`}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Personal Items
              </h3>
              <ul className="space-y-2">
                {personalItems.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Settlement Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            Settlement Timeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-blue-50 to-blue-100 ${cardStyle}`}
              >
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  {item.day}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.tasks.map((task, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div {...fadeIn} className="text-center px-4">
          <div className="bg-white rounded-xl p-6 md:p-8 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="inline-block p-2 px-6 rounded-full bg-blue-50 text-blue-700 font-medium mb-4">
              Ready to Start?
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-900">
              Planning Your Journey?
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let us help you prepare for your new life abroad with our
              comprehensive post-visa support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                Get Settlement Support
              </button>
              <button className="bg-blue-50 text-blue-700 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300">
                Download Checklist
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PostVisaAssistance;
