import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  text: string;
  name: string;
  university: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div className="w-2 h-2 mx-1 rounded-full bg-gray-200 hover:bg-blue-500 transition-all duration-300 hover:scale-150" />
    ),
  };
  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
    <div className="relative font-poppins overflow-hidden pt-8 pb-16 md:pb-24">
      <svg
        className="absolute inset-0 w-full h-full scale-110"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        <g>
          <motion.path
            d="M-100,20 C50,100 150,0 300,50 S450,100 600,50 S750,0 900,50 S1050,100 1200,50"
            fill="none"
            stroke="rgba(44, 62, 80, 0.15)"
            strokeWidth="4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, x: [-300, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
          <motion.path
            d="M-100,80 C50,0 150,100 300,50 S450,0 600,50 S750,100 900,50 S1050,0 1200,50"
            fill="none"
            stroke="rgba(52, 152, 219, 0.2)"
            strokeWidth="4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, x: [0, -300] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
          <motion.path
            d="M-100,50 Q50,100 200,50 T500,50 T800,50 T1100,50"
            fill="none"
            stroke="rgba(41, 128, 185, 0.25)"
            strokeWidth="4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, y: [-40, 40] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>
      <motion.h2
        className="text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-16 relative z-10 px-4"
        style={{
          background:
            "linear-gradient(345deg, rgb(209, 12, 20), rgb(255, 106, 63), rgb(19, 86, 195), rgb(0, 98, 143))",
          backgroundPosition: "90.8% 50%",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          willChange: "auto",
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        What Our Students Say
      </motion.h2>
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3 py-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-100"
                style={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
                }}
              >
                <div className="flex items-center mb-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur opacity-20 scale-110 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 relative z-10 group-hover:border-3 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white z-20 animate-pulse group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="ml-4 transform transition-transform duration-300">
                    <motion.h4
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="font-bold text-gray-800 text-lg tracking-tight hover:text-blue-600 transition-colors duration-300"
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                    >
                      {testimonial.university}
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6"
                >
                  <span className="absolute -left-2 -top-4 text-6xl text-blue-200 opacity-50 font-serif transform -rotate-6">
                    "
                  </span>
                  <p className="text-gray-600 text-lg leading-relaxed italic relative z-10">
                    {testimonial.text}
                  </p>
                  <span className="absolute -right-2 -bottom-8 text-6xl text-blue-200 opacity-50 font-serif transform rotate-6">
                    "
                  </span>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
