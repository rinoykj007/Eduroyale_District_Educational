import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import visaAnimation from "../../assets/animations/Visa.json";

const VisaGuidance = () => {
  const stats = [
    { label: "Visa Success Rate", value: "98%" },
    { label: "Countries Covered", value: "15+" },
    { label: "Happy Students", value: "1000+" },
    { label: "Years Experience", value: "10+" },
  ];

  const services = [
    {
      title: "Document Review",
      description: "Thorough review and verification of all required documents",
      icon: "📋",
    },
    {
      title: "Application Filing",
      description: "Complete assistance in visa application submission",
      icon: "✍️",
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and preparation guidance",
      icon: "🎯",
    },
    {
      title: "Financial Documentation",
      description: "Help with financial requirements and documentation",
      icon: "💰",
    },
    {
      title: "Timeline Management",
      description: "Efficient handling of visa processing timelines",
      icon: "⏱️",
    },
    {
      title: "Appeal Support",
      description: "Assistance in case of visa rejections or appeals",
      icon: "⚖️",
    },
  ];

  const visaProcess = [
    {
      step: "1",
      title: "Documentation",
      description: "Collect and verify all required documents",
    },
    {
      step: "2",
      title: "Application",
      description: "Submit visa application with proper documentation",
    },
    {
      step: "3",
      title: "Interview",
      description: "Prepare and attend visa interview",
    },
    {
      step: "4",
      title: "Approval",
      description: "Receive visa and pre-departure briefing",
    },
  ];

  const faqs = [
    {
      question: "What documents are required for a student visa?",
      answer:
        "Requirements typically include acceptance letter, financial proof, passport, photographs, and academic documents.",
    },
    {
      question: "How long does visa processing take?",
      answer:
        "Processing times vary by country, usually ranging from 2-8 weeks.",
    },
    {
      question: "What about financial requirements?",
      answer:
        "Most countries require proof of sufficient funds to cover tuition and living expenses.",
    },
    {
      question: "How to prepare for visa interview?",
      answer:
        "We provide comprehensive interview preparation including mock interviews and common questions.",
    },
  ];

  const gradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#2B6CB0] via-[#3182CE] to-[#4299E1] font-['Outfit']";
  const cardStyle =
    "bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300";

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-gradient-to-b from-[#F8F9FA] via-[#E9ECEF] to-[#DEE2E6] min-h-screen text-gray-800 font-['Outfit']">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 mt-16 sm:mt-0 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 container mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2 text-left">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${gradientText} leading-tight tracking-tight`}
              >
                Visa Application Guidance
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-['Outfit']">
                Expert assistance for successful student visa applications with
                our high success rate approach.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-base md:text-lg bg-[#3182CE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4299E1] transition-all duration-300 shadow-lg hover:shadow-xl font-['Outfit']"
              >
                Get Started
              </motion.button>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-full max-w-lg">
                <Lottie animationData={visaAnimation} loop={true} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Rate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              {...fadeInAnimation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cardStyle}
            >
              <div className="text-3xl font-bold text-[#3182CE] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeInAnimation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cardStyle}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600 font-['Outfit']">
                {service.title}
              </h3>
              <p className="text-gray-700 font-['Outfit']">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visa Process Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2
            className={`text-3xl font-bold text-center mb-12 ${gradientText}`}
          >
            Visa Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={cardStyle}>
                  <div className="text-3xl font-bold text-[#3182CE] mb-4 font-['Outfit']">
                    Step {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-600 font-['Outfit']">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 font-['Outfit']">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg
                      className="w-8 h-8 text-[#3182CE]"
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
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2
            className={`text-3xl font-bold text-center mb-12 ${gradientText}`}
          >
            Common Visa Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInAnimation}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cardStyle}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-600 font-['Outfit']">
                  {faq.question}
                </h3>
                <p className="text-gray-700 font-['Outfit']">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          {...fadeInAnimation}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className={`${cardStyle} p-8 md:p-12`}>
            <h2 className={`text-3xl font-bold mb-6 ${gradientText}`}>
              Ready to Start Your Visa Application?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-['Outfit']">
              Get expert guidance for your student visa application and increase
              your chances of approval.
            </p>
            <button className="bg-[#3182CE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4299E1] transition-colors duration-300 font-['Outfit']">
              Start Visa Process
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisaGuidance;
