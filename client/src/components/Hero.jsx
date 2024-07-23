import React from "react";
import ImageSliderAuto from "./ImageSliderAuto";
import { ImageData } from "./Images";

const Hero = () => {
  return (
    <div className="w-full">
      {/* <div className="relative overflow-hidden"> */}
        {/* <img className="h-[500px] w-full bg-cover" src={bg_img} alt="Bg_img" /> */}
        {/* <div className="min-h-[400px] text-black bg-slate-200 transition-opacity opacity-20"> */}
          <ImageSliderAuto ImageData={ImageData} SlideInterValTime={ 2000}/>  
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
