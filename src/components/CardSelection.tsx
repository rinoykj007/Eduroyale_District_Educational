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
        {/* Right content - Swiper Right content - Swiper*/}
        <div className="w-full max-w-[clamp(280px,40vw,400px)] relative mt-8 lg:mt-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(120,157,188)] via-[rgb(255,227,227)] to-[rgb(201,233,210)] rounded-[clamp(1rem,2vw,2rem)] blur-2xl opacity-30 animate-pulse"></div>
          <Swiper
            ref={swiperRef}
            effect="cube"
            grabCursor={true}
            loop={true}
            speed={1000}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCube, Autoplay]}
            className="w-[clamp(260px,35vw,380px)] h-[clamp(340px,45vw,460px)] rounded-[clamp(1rem,2vw,2rem)]"
          >
            {[
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/49db1b5f-09f6-4433-be57-51687585600c",
                title: "Ireland",
                description:
                  "Discover the fascinating beauty of this historic city by strolling through the rich cultural tapestry that makes Florence a timeless destination.",
                cost: "Connect as ",
                reviews: 138,
                stars: 4.5,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847",
                title: "Australia",
                description:
                  "Explore the city's majestic castles and fascinating history by joining our guided tour for an unforgettable journey through Scotland's capital.",
                cost: "Connect as ",
                reviews: 307,
                stars: 5,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d311d1de-7382-4c03-b083-5f7e88458158",
                title: "USA",
                description:
                  "Experience the energy and excitement of New York City from Times Square's dazzling lights to the serene beauty of Central Park.",
                cost: "Connect as",
                reviews: 1152,
                stars: 4.5,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245",
                title: "Canada",
                description:
                  "Embark on a magical journey through Tokyo by discovering the beauty of the city as cherry blossom trees paint the streets in hues of pink.",
                cost: "Connect as ",
                reviews: 619,
                stars: 4,
              },
              {
                img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245",
                title: "UK",
                description:
                  "Embark on a magical journey through Tokyo by discovering the beauty of the city as cherry blossom trees paint the streets in hues of pink.",
                cost: "Connect as ",
                reviews: 619,
                stars: 4,
              },
            ].map((slide, index) => (
              <SwiperSlide
                key={index}
                className="relative rounded-[clamp(1rem,2vw,2rem)] border border-[rgb(120,157,188)]/10 shadow-2xl overflow-hidden group"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[rgb(120,157,188)]/10 backdrop-blur-md rounded-full py-1.5 sm:py-2 px-4 sm:px-6">
                  <span className="text-[rgb(120,157,188)] text-xs sm:text-sm font-semibold">
                    {slide.cost}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl font-['Outfit'] font-bold mb-2 sm:mb-3 transform group-hover:translate-y-[-4px] transition-transform duration-300 text-white">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 line-clamp-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    <div className="flex gap-0.5 sm:gap-1">
                      {Array.from({ length: Math.floor(slide.stars) }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                          />
                        )
                      )}
                      {slide.stars % 1 !== 0 && (
                        <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      {slide.reviews} reviews
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          {/* Social media link */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-10 transform hover:scale-110 transition-transform duration-300"
          >
            <div className="relative group">
              <img
                src="https://assets.codepen.io/9868786/youtube.webp"
                alt="YouTube"
                className="relative w-12 sm:w-14 md:w-16 lg:w-20 rounded-[0.75rem] sm:rounded-[1rem]"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
