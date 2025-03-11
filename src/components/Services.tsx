import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaGraduationCap,
  FaPassport,
  FaPlane,
  FaLanguage,
  FaHandshake,
  FaHome,
} from "react-icons/fa";

interface ServiceType {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: ServiceType[] = [
  {
    icon: FaGraduationCap,
    title: "Education Counseling",
    description: "Expert guidance for your academic journey abroad.",
  },
  {
    icon: FaPassport,
    title: "Visa Assistance",
    description: "Streamlined visa application process for hassle-free travel.",
  },
  {
    icon: FaPlane,
    title: "Travel Planning",
    description: "Comprehensive travel arrangements for your convenience.",
  },
  {
    icon: FaLanguage,
    title: "Language Support",
    description: "Language training to boost your confidence abroad.",
  },
  {
    icon: FaHandshake,
    title: "Career Guidance",
    description: "Professional advice for your international career prospects.",
  },
  {
    icon: FaHome,
    title: "Accommodation",
    description: "Assistance in finding suitable housing options abroad.",
  },
];

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
        stroke="rgba(44, 62, 80, 0.15)" // Dark slate with higher opacity
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
        stroke="rgba(52, 152, 219, 0.2)" // Bright blue with higher opacity
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
        stroke="rgba(41, 128, 185, 0.25)" // Another blue shade with higher opacity
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

const getCardStyle = (index: number) => {
  const colors = [
    "rgb(255, 227, 227)", // Soft Pink
    "rgb(201, 233, 210)", // Sage Green
    "rgb(230, 230, 250)", // Lavender
    "rgb(255, 218, 185)", // Peach
    "rgb(176, 224, 230)", // Powder Blue
    "rgb(255, 240, 245)", // Lavender Blush
  ];
  return colors[index];
};

const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceType;
  index: number;
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const bgColor = getCardStyle(index);
  const textColor = "#2C3E50";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group hover:bg-white"
      style={{
        backgroundColor: bgColor,
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <motion.div
        className="text-4xl text-[#2C3E50] mb-4 transition-colors duration-300 group-hover:text-[#2C3E50]"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <service.icon />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 tracking-tight text-[#2C3E50] group-hover:text-[#2C3E50]">
        {service.title}
      </h3>
      <p className="leading-relaxed text-[#34495E] group-hover:text-[#34495E]">
        {service.description}
      </p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden px-4">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50] tracking-tight">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
