"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsApp from "./WhatsApp";
import Carousel1 from "../assets/Image/carousel-1.jpg";
import Carousel2 from "../assets/Image/carousel-2.jpg";
import Carousel3 from "../assets/Image/carousel-3.jpeg";
import Carousel4 from "../assets/Image/carousel-4.jpg";
import Carousel5 from "../assets/Image/carousel-5.jpg";
import Carousel6 from "../assets/Image/carousel-6.jpg";

const data = [
  {
    place: "United Kingdom",
    title: "DISCOVER",
    title2: "OXFORD",
    description:
      "Experience centuries of academic excellence in Oxford, where historic colleges meet cutting-edge innovation. Home to world-renowned research facilities and a vibrant international community that shapes global leaders.",
    image: Carousel1,
    id: 1,
  },
  {
    place: "United States",
    title: "EXPLORE",
    title2: "BOSTON",
    description:
      "Boston, America's premier education hub, offers unparalleled opportunities at prestigious institutions. Experience a rich blend of historical heritage and innovative research in a city that breathes academic excellence.",
    image: Carousel2,
    id: 2,
  },
  {
    place: "Australia",
    title: "STUDY IN",
    title2: "SYDNEY",
    description:
      "Sydney combines world-class education with an unmatched quality of life. Our partner universities offer cutting-edge programs, while the city provides a perfect backdrop for personal and professional growth.",
    image: Carousel3,
    id: 3,
  },
  {
    place: "Canada",
    title: "EXPERIENCE",
    title2: "VANCOUVER",
    description:
      "Vancouver offers a unique blend of academic excellence and natural beauty. Study at top-ranked universities while enjoying a safe, multicultural environment that consistently ranks among the world's best cities.",
    image: Carousel4,
    id: 4,
  },
  {
    place: "Germany",
    title: "LEARN IN",
    title2: "MUNICH",
    description:
      "Munich exemplifies German engineering excellence and innovation. Benefit from tuition-free education at prestigious technical universities while experiencing a rich cultural heritage in the heart of Europe.",
    image: Carousel5,
    id: 5,
  },
  {
    place: "New Zealand",
    title: "STUDY IN",
    title2: "WELLINGTON",
    description:
      "Wellington offers world-recognized qualifications in a stunning natural setting. Experience innovative teaching methods and practical learning approaches while enjoying New Zealand's renowned quality of life.",
    image: Carousel6,
    id: 6,
  },
];

export default function Carousel() {
  const [items, setItems] = useState(data);
  const [isPaused, setIsPaused] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.error("Image failed to load:", e.currentTarget.src);
    setImageLoadError(true);
  };

  const rotateItems = useCallback((direction: "next" | "prev") => {
    setItems((prevItems) => {
      if (direction === "next") {
        const [first, ...rest] = prevItems;
        return [...rest, first];
      } else {
        const last = prevItems[prevItems.length - 1];
        return [last, ...prevItems.slice(0, -1)];
      }
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => rotateItems("next"), 4000);
    return () => clearInterval(interval);
  }, [rotateItems, isPaused]);

  return (
    <main
      className="relative w-full min-h-screen h-[100dvh] overflow-hidden bg-[#1a1a1a]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 z-10">
        <div className="relative h-full overflow-hidden">
          {/* Main Images */}
          {items.slice(0, 2).map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
                index === 0
                  ? "opacity-100 z-20 scale-100"
                  : "opacity-0 z-10 scale-105"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out"
                style={{
                  backgroundImage: `url(${item.image})`,
                  transform: index === 0 ? "scale(1)" : "scale(1.05)",
                }}
                role="img"
                aria-label={`${item.place} background`}
                onError={handleImageError}
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 transition-opacity duration-[1500ms]"
                style={{
                  opacity: index === 0 ? 1 : 0,
                }}
              />

              {/* Content */}
              <div
                className="absolute top-[15vh] left-[clamp(1rem,5vw,4rem)] z-20 text-white transition-all duration-[1500ms] max-w-[clamp(300px,50vw,600px)]"
                style={{
                  transform: `translateY(${index === 0 ? "0" : "30px"})`,
                  opacity: index === 0 ? 1 : 0,
                  filter: `blur(${index === 0 ? "0" : "10px"})`,
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div>
                  <h2 className="text-white text-[clamp(1rem,2.5vw,2.5rem)] font-semibold">
                    {item.place}
                  </h2>
                </div>
                <div className="-mt-2 sm:-mt-3">
                  <h1 className="text-white text-[clamp(2rem,5vw,5rem)] font-bold">
                    {item.title}
                  </h1>
                  <h1 className="text-white text-[clamp(2rem,5vw,5rem)] font-bold -mt-3 sm:-mt-5">
                    {item.title2}
                  </h1>
                </div>
                <div className="-mt-2 sm:-mt-3 w-full text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed text-[#FFFFFF] font-['Manrope'] tracking-wide font-medium">
                  {item.description}
                </div>
                <div className="mt-[clamp(1rem,4vh,4rem)] flex items-center gap-[clamp(1rem,2vw,2rem)]">
                  <button className="w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] rounded-full bg-white/10 border-2 border-white/30 grid place-items-center hover:bg-white/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[clamp(1.25rem,3vw,1.5rem)] h-[clamp(1.25rem,3vw,1.5rem)]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <WhatsApp
                    phoneNumber="+1234567890"
                    message="Hello, I'd like to learn more about this location!"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute right-[clamp(1rem,4vw,4rem)] bottom-[max(2rem,min(15vh,8rem))] z-30">
        <div className="relative flex items-center justify-end gap-[clamp(0.5rem,1vw,1rem)]">
          {items.slice(1, 4).map((item, index) => (
            <div
              key={item.id}
              className={`
                relative cursor-pointer overflow-hidden rounded-[clamp(0.75rem,1.5vw,1.25rem)]
                shadow-[0_20px_30px_rgba(255,255,255,0.3)_inset]
                transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:scale-[1.08] hover:-translate-y-2
                group shrink-0
                w-[clamp(80px,15vw,160px)] h-[clamp(120px,22.5vw,240px)]
                max-h-[30vh]
              `}
              onClick={() => rotateItems("next")}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         group-hover:scale-[1.15]"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div
                className="absolute inset-0 bg-black/40 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         group-hover:bg-black/20"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-[clamp(0.75rem,2vw,1.5rem)] text-white transition-transform duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         group-hover:translate-y-1"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                }}
              >
                <div
                  className="text-[clamp(0.625rem,1.25vw,0.875rem)] font-medium mb-[clamp(0.125rem,0.5vw,0.25rem)] opacity-90 transition-all duration-[1200ms] font-['Manrope'] tracking-wider uppercase
                            group-hover:opacity-100"
                >
                  {item.place}
                </div>
                <div
                  className="text-[clamp(0.75rem,1.5vw,1rem)] font-bold leading-tight transition-all duration-[1200ms] font-['Space_Grotesk'] tracking-tight
                            group-hover:opacity-100"
                >
                  {item.title} {item.title2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="nav absolute bottom-[max(1rem,min(8vh,3rem))] left-[clamp(1rem,4vw,4rem)] sm:left-auto sm:right-[clamp(4rem,8vw,8rem)] z-50 select-none flex gap-[clamp(0.5rem,1vw,1rem)]">
        <button
          className="btn bg-white/50 text-black/70 border-2 border-black/60 
                   px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.25rem,1vh,0.5rem)] rounded-full cursor-pointer text-[clamp(0.875rem,1.25vw,1rem)]
                   hover:bg-white/30"
          onClick={() => rotateItems("prev")}
        >
          ←
        </button>
        <button
          className="btn bg-white/50 text-black/70 border-2 border-black/60 
                   px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.25rem,1vh,0.5rem)] rounded-full cursor-pointer text-[clamp(0.875rem,1.25vw,1rem)]
                   hover:bg-white/30"
          onClick={() => rotateItems("next")}
        >
          →
        </button>
      </div>
    </main>
  );
}
