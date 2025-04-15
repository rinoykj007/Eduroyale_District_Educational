import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loanAnimation from "../../assets/animations/Loan_Assistance.json";

const BankLoan = () => {
  const loanFeatures = [
    {
      title: "Competitive Interest Rates",
      description:
        "Access to loans with favorable interest rates from partner banks",
      icon: "📊",
    },
    {
      title: "Quick Processing",
      description:
        "Fast-track loan application processing with minimal documentation",
      icon: "⚡",
    },
    {
      title: "Flexible Repayment",
      description:
        "Customizable repayment options to suit your financial situation",
      icon: "💳",
    },
    {
      title: "100% Funding",
      description:
        "Options for complete coverage of tuition and living expenses",
      icon: "💰",
    },
    {
      title: "No Collateral Options",
      description: "Select loans available without collateral requirement",
      icon: "🔓",
    },
    {
      title: "Tax Benefits",
      description: "Information on tax deductions on education loan interest",
      icon: "📑",
    },
  ];

  const loanProcess = [
    {
      step: "1",
      title: "Document Collection",
      description: "Gather necessary documents for loan application",
    },
    {
      step: "2",
      title: "Bank Selection",
      description: "Choose the best bank based on your requirements",
    },
    {
      step: "3",
      title: "Application Filing",
      description: "Submit application with complete documentation",
    },
    {
      step: "4",
      title: "Loan Disbursement",
      description: "Quick processing and fund disbursement",
    },
  ];

  const documents = {
    academic: [
      "Mark sheets of X, XII, and Graduation",
      "Entrance test scores (if applicable)",
      "Admission letter from university",
      "Course details and duration",
    ],
    financial: [
      "Income proof of co-applicant",
      "Bank statements (6 months)",
      "Income tax returns",
      "Collateral documents (if applicable)",
    ],
  };

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 0.999, y: 0 },
    transition: { duration: 0.5 },
  };

  const sectionHeadingStyle =
    "text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400";

  const cardStyle =
    "relative overflow-hidden bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100/20 group hover:-translate-y-1";

  const iconStyle =
    "text-4xl mb-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl w-16 h-16 flex items-center justify-center text-white shadow-lg";

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen text-gray-800 font-moderustic pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:w-1/2"
          >
            <div className="mb-6 inline-block">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
                Education Loans
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 leading-tight tracking-tight">
              Education Loan Assistance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mb-8">
              Get expert guidance on education loans and make your international
              education dreams a reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 max-w-md relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-3xl transform rotate-6 scale-105"></div>
            <div className="relative">
              <Lottie animationData={loanAnimation} loop={true} />
            </div>
          </motion.div>
        </div>

        {/* Section Title - Loan Features */}
        <motion.div {...fadeInAnimation} className="text-center mb-16">
          <h2 className={sectionHeadingStyle}>Comprehensive Loan Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of education loan features designed to support your
            academic journey
          </p>
        </motion.div>

        {/* Loan Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {loanFeatures.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInAnimation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cardStyle}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className={iconStyle}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Title - Loan Process */}
        <motion.div {...fadeInAnimation} className="text-center mb-16">
          <h2 className={sectionHeadingStyle}>Simple Application Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our streamlined process to get your education loan approved
            quickly
          </p>
        </motion.div>

        {/* Loan Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {loanProcess.map((process, index) => (
            <motion.div
              key={index}
              {...fadeInAnimation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cardStyle}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className={iconStyle}>{process.step}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-blue-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Section Title - Required Documents */}
        <motion.div {...fadeInAnimation} className="text-center mb-16">
          <h2 className={sectionHeadingStyle}>Required Documents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prepare these documents to ensure a smooth loan application process
          </p>
        </motion.div>

        {/* Required Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cardStyle}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className={iconStyle}>📚</div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                Academic Documents
              </h3>
              <ul className="space-y-4">
                {documents.academic.map((doc, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cardStyle}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className={iconStyle}>💼</div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                Financial Documents
              </h3>
              <ul className="space-y-4">
                {documents.financial.map((doc, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          {...fadeInAnimation}
          className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDU2IDAgTCAwIDAgMCAxMDAgNTYgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to begin your education loan application process
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BankLoan;
