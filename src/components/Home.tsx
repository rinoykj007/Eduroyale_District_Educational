import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import Services from "./Services";
import CardSelection from "./CardSelection";

const Home = () => {
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
    </motion.div>
  );
};

export default Home;
