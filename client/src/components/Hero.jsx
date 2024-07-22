import React from "react";
import bg_img from "../assets/hero_img.jpeg"

const Hero = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        {/* <img className="h-[500px] w-full bg-cover" src={bg_img} alt="Bg_img" /> */}
        <div className="min-h-[400px] bg-gray-200 transition-opacity opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;
