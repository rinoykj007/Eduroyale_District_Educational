"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import { Star, StarHalf } from "lucide-react";
import "./style/CardSelection.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const AnimatedBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} />
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
        animate={{ pathLength: 1, opacity: 1, y: [-50, 50] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </g>
  </svg>
);

export default function CardSelection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden px-4">
      <AnimatedBackground />
      {/* Main content */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[calc(100vh-4rem)] w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 gap-8 sm:gap-12 lg:gap-16 font-['Plus_Jakarta_Sans']">
        {/* Left content */}
        <div className="w-full max-w-xl mx-auto lg:max-w-none text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="font-['Outfit'] font-bold text-[clamp(1.25rem,3vw,3.25rem)] text-[#1a365d] leading-[1.2] tracking-tight text-center">
              <div className="flex flex-row justify-center flex-wrap items-center gap-[clamp(0.5rem,1vw,1rem)]">
                <div className="flex flex-row flex-wrap items-center justify-center gap-[clamp(0.5rem,0.75vw,1rem)] whitespace-nowrap">
                  <span className="text-[clamp(1.25rem,3vw,3.25rem)]">
                    EDUROYALE is
                  </span>
                  <div className="word-cycle-container inline-flex items-center">
                    <span className="word-cycle inline-flex items-center justify-center w-[clamp(100px,20vw,190px)] h-[clamp(2rem,4vw,4rem)]">
                      {(() => {
                        const [wordIndex, setWordIndex] = useState(0);
                        const words = ["incredibly", "especially", "extremely"];

                        useEffect(() => {
                          const interval = setInterval(() => {
                            setWordIndex((prev) => (prev + 1) % words.length);
                          }, 2000);

                          return () => clearInterval(interval);
                        }, []);

                        return (
                          <span
                            className="cycle-word flex items-center justify-center text-[clamp(1.25rem,3vw,3.25rem)] whitespace-nowrap font-bold"
                            style={{
                              background:
                                "linear-gradient(45deg, rgb(120,157,188), rgb(255,227,227), rgb(201,233,210), rgb(254,249,242))",
                              backgroundSize: "200% 200%",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              opacity: 1,
                              transition: "all 0.5s ease-in-out",
                              animation: "gradient 8s ease infinite",
                              lineHeight: "1.1",
                            }}
                          >
                            {words[wordIndex]}
                          </span>
                        );
                      })()}
                    </span>
                  </div>
                </div>
                <span className="whitespace-nowrap text-[clamp(1.25rem,3vw,3.25rem)]">
                  simple,
                </span>
                <span className="whitespace-nowrap text-[clamp(1.25rem,3vw,3.25rem)]">
                  welcome to EDUROYALE!
                </span>
              </div>
            </h1>

            <p className="text-[clamp(0.875rem,1.5vw,1.5rem)] font-medium text-[#2d4a77] leading-relaxed tracking-wide max-w-[90%] mx-auto lg:mx-0">
              Your dream of an exciting education and career abroad is not any
              more a dream. Join our hands, welcome and experience hassle free
              visa process and enjoy the joy of flying in less time.
              <span className="block mt-[clamp(0.75rem,2vw,1.5rem)] font-bold text-[#1a365d] font-['Outfit']">
                EDUROYALE's expertise in Visa Processes is more than an
                assurance, it's a guarantee!!!
              </span>
            </p>

            <div className="flex flex-wrap gap-[clamp(0.5rem,1.5vw,1.5rem)] justify-center lg:justify-start">
              <button className="group relative px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(0.75rem,1.25vw,1rem)] font-semibold text-white">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[rgb(201,233,210)] rounded-[clamp(0.5rem,1.5vw,1rem)] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-[rgb(120,157,188)] border-2 border-white rounded-[clamp(0.5rem,1.5vw,1rem)] group-hover:bg-[rgb(201,233,210)]"></span>
                <span className="relative">Explore Tours</span>
              </button>
              <button className="group relative overflow-hidden rounded-[clamp(0.5rem,1.5vw,1rem)] bg-transparent border-2 border-[rgb(120,157,188)]/30 backdrop-blur-sm">
                <span className="relative inline-flex items-center gap-2 px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(0.75rem,1.25vw,1rem)] text-[rgb(120,157,188)] transition-all duration-300 group-hover:text-[rgb(201,233,210)]">
                  Learn More
                  <svg
                    className="w-[clamp(0.875rem,1.5vw,1.25rem)] h-[clamp(0.875rem,1.5vw,1.25rem)] -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[rgb(120,157,188)] to-[rgb(201,233,210)] opacity-0 transition-all duration-300 group-hover:opacity-20"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
