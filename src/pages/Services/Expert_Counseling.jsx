import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiStar } from "react-icons/fi";
import DotLottiePlayer from "../../components/DotLottiePlayer";
import WhatsApp from "../../components/WhatsApp";

const fadeInUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const buttonVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};
const Features = [
  {
    title: "Personalized Guidance",
    description:
      "One-on-one sessions tailored to your academic goals and career aspirations.",
    icon: "🎯",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "from-blue-500 to-indigo-500",
  },
  {
    title: "Career Assessment",
    description:
      "Comprehensive evaluation of your skills, interests, and career objectives.",
    icon: "📊",
    gradient: "from-purple-50 to-pink-50",
    iconBg: "from-purple-500 to-pink-500",
  },
  {
    title: "University Selection",
    description:
      "Expert advice on choosing the right universities based on your profile.",
    icon: "🎓",
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "from-emerald-500 to-teal-500",
  },
  {
    title: "Course Planning",
    description: "Strategic course selection aligned with your career goals.",
    icon: "📚",
    gradient: "from-orange-50 to-amber-50",
    iconBg: "from-orange-500 to-amber-500",
  },
  {
    title: "Profile Evaluation",
    description:
      "Detailed assessment of your academic and professional background.",
    icon: "📋",
    gradient: "from-cyan-50 to-sky-50",
    iconBg: "from-cyan-500 to-sky-500",
  },
  {
    title: "Future Planning",
    description: "Long-term career planning and growth opportunities.",
    icon: "🚀",
    gradient: "from-rose-50 to-red-50",
    iconBg: "from-rose-500 to-red-500",
  },
];
const Process = [
  {
    step: "1",
    title: "Initial Consultation",
    description:
      "Free consultation to understand your requirements and aspirations",
    gradient: "from-blue-50 to-indigo-50",
    numberBg: "from-blue-600 to-indigo-600",
  },
  {
    step: "2",
    title: "Profile Analysis",
    description:
      "Detailed evaluation of your academic and professional background",
    gradient: "from-purple-50 to-pink-50",
    numberBg: "from-purple-600 to-pink-600",
  },
  {
    step: "3",
    title: "Customized Plan",
    description: "Development of a personalized education and career roadmap",
    gradient: "from-emerald-50 to-teal-50",
    numberBg: "from-emerald-600 to-teal-600",
  },
  {
    step: "4",
    title: "Ongoing Support",
    description: "Continuous guidance throughout your academic journey",
    gradient: "from-orange-50 to-amber-50",
    numberBg: "from-orange-600 to-amber-600",
  },
];

const ExpertCounseling = () => {
  const handleBookConsultation = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918123456789";
  };
  return (
    <div className="bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] min-h-screen text-[#334155] font-moderustic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          {...fadeInUpVariant}
          className="text-center mb-16 relative mt-24"
        >
          <motion.div
            {...fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-6 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-semibold shadow-sm"
          >
            Your Gateway to Global Education
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:text-left lg:w-1/2">
              <motion.h1
                {...fadeInUpVariant}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500"
              >
                Expert Counseling Services
              </motion.h1>
              <motion.p
                {...fadeInUpVariant}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 max-w-2xl lg:mx-0 mb-8 leading-relaxed"
              >
                Transform your academic aspirations into reality with our
                personalized guidance. Let our experienced counselors help you
                navigate your path to international education.
              </motion.p>

              <motion.div
                {...fadeInUpVariant}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  {...buttonVariant}
                  onClick={handleBookConsultation}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 hover:translate-y-[-2px]"
                >
                  Book Free Consultation <FiArrowRight className="ml-1" />
                </motion.button>
                <motion.button
                  {...buttonVariant}
                  className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold border border-indigo-100 hover:border-indigo-200 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              {...fadeInUpVariant}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full lg:w-1/2 relative"
            >
              <DotLottiePlayer />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100/20 backdrop-blur-sm`}
            >
              <div
                className={`text-4xl mb-6 p-4 bg-gradient-to-br ${feature.iconBg} rounded-xl inline-block shadow-sm text-white`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500">
            Our Counseling Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Process.map((process, index) => (
              <motion.div
                key={index}
                {...fadeInUpVariant}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`bg-gradient-to-br ${process.gradient} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100/20 backdrop-blur-sm h-full group hover:scale-[1.02]`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${process.numberBg} rounded-full text-white font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-400">
                    <FiArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div {...fadeInUpVariant} className="text-center pb-16">
          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 md:p-12 border border-indigo-100 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]"></div>

            <motion.div
              {...fadeInUpVariant}
              className="inline-block mb-6 px-6 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-semibold shadow-sm"
            >
              Limited Time Offer
            </motion.div>

            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500">
              Start Your Journey Today
            </h2>

            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Take advantage of our free consultation and let our experts guide
              you towards your dream of studying abroad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                {...buttonVariant}
                onClick={handleBookConsultation}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:translate-y-[-2px]"
              >
                Book Free Consultation <FiArrowRight />
              </motion.button>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <FiCheck className="text-indigo-500" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-400" />
                  <span>100% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <WhatsApp
        phoneNumber="1234567890"
        message="Hi, I'm interested in your courses!"
      />
    </div>
  );
};

export default ExpertCounseling;
