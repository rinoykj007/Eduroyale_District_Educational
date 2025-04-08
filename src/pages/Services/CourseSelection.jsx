import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import courseSelectionAnimation from "../../assets/animations/Course_Selection.json";
import WhatsApp from "../../components/WhatsApp";

const fadeInUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const fadeInLeftVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.3 },
};

const buttonVariant = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

const scaleInVariant = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
};

export default function CourseSelection() {
  const handleGetStarted = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918123456789";
  };

  return (
    <div className="bg-gradient-to-b from-white via-[#F7FAFC] to-[#F5F7F4] min-h-screen text-[#2D3748] font-moderustic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-16 md:pt-0">
          <motion.div
            {...fadeInUpVariant}
            className="text-left w-full md:w-1/2 lg:w-5/12 relative z-10 md:pt-12"
          >
            <motion.span
              {...fadeInLeftVariant}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium tracking-wide mb-4"
            >
              Expert Course Guidance
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
              Course Selection
              <span className="block text-blue-600 mt-2">Guidance</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Find the perfect course that aligns with your career goals and
              academic interests with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                {...buttonVariant}
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.button>
              <motion.button
                {...buttonVariant}
                className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-base border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            {...scaleInVariant}
            className="w-full md:w-1/2 lg:w-6/12 relative md:pt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-white/20 to-purple-100/60 rounded-3xl blur-2xl"></div>
            <div className="relative w-full">
              <Lottie
                animationData={courseSelectionAnimation}
                loop={true}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
                className="drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <WhatsApp
        phoneNumber="1234567890"
        message="Hi, I'm interested in your courses!"
        onClick={handleGetStarted}
      />
    </div>
  );
}
