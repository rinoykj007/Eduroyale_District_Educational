import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/animations/Animation.json";

const DotLottiePlayer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] aspect-square">
        <Lottie
          animationData={animation}
          loop={true}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default DotLottiePlayer;
