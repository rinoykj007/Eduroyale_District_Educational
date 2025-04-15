import React from "react";
import Lottie from "lottie-react";
import travelAnimation from "../../assets/animations/Travel_Assistance.json";

const TravelAssistance = () => {
  const services = [
    {
      title: "Flight Booking",
      description:
        "Best deals on student flights with flexible options and 24/7 support",
      icon: "✈️",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      title: "Travel Insurance",
      description:
        "Comprehensive travel and health insurance coverage for peace of mind",
      icon: "🛡️",
      gradient: "from-indigo-400 to-indigo-500",
    },
    {
      title: "Airport Assistance",
      description:
        "Professional support at departure and arrival airports worldwide",
      icon: "🛃",
      gradient: "from-purple-400 to-purple-500",
    },
  ];

  const buttonStyle =
    "group relative text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800 font-moderustic overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-24">
          <div className="flex-1 text-center md:text-left animate-fade-in mb-8 md:mb-0">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 text-sm font-medium mb-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
              <span>Student Travel Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-fade-up leading-tight tracking-tight">
              Travel <br className="hidden md:block" />
              Assistance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-in delay-200 leading-relaxed">
              Comprehensive travel support for students, making your journey
              smooth and hassle-free.
            </p>
            <button className={buttonStyle}>
              Start Your Journey
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-[2rem] transform rotate-6 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl">
                <Lottie
                  animationData={travelAnimation}
                  loop={true}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-fade-up ${
                index === 0
                  ? "delay-0"
                  : index === 1
                  ? "delay-150"
                  : "delay-300"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} text-white text-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-[2rem] transform -rotate-2"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-up">
                Ready to Plan Your Journey?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in delay-200 leading-relaxed">
                Let us help you plan your travel and ensure a smooth journey to
                your study destination.
              </p>
              <button className={buttonStyle}>
                Get Travel Support
                <span className="absolute right-6 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAssistance;
