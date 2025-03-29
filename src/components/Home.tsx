import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import Services from "./Services";
import CardSelection from "./CardSelection";
import TestimonialCarousel from "./TestimonialCarousel";
import ImageCarousel from "./ImageCarousel";
const Home = () => {
  // Testimonials array is defined
  const testimonials = [
    {
      text: "EduAbroadConsult made my dream of studying abroad a reality. Their guidance was invaluable throughout the entire process.",
      name: "John Doe",
      university: "University of XYZ",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "I couldn't have navigated the complex application process without EduAbroadConsult. They were there every step of the way.",
      name: "Jane Smith",
      university: "ABC University",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      text: "Thanks to EduAbroadConsult, I'm now studying at my dream university. Their expertise and support were crucial to my success.",
      name: "Mike Johnson",
      university: "Global Institute",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      text: "The personalized attention I received from EduAbroadConsult was amazing. They truly care about each student's journey.",
      name: "Emily Brown",
      university: "International College",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 min-h-screen w-full"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
              "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
              "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="relative z-10 h-full">
          <Carousel />
        </div>
      </section>
      <section className=" w-full">
        <Services />
      </section>
      <section>
        <CardSelection />
      </section>
      {/* Testimonials Section */}
      <section className="bg-white w-full">
        <TestimonialCarousel testimonials={testimonials} />
      </section>
      <section className="bg-white w-full pb-2">
        <ImageCarousel />
      </section>
    </motion.div>
  );
};

export default Home;
