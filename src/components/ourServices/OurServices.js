import React from "react";
import Image1 from "../../assets/images/service.png";

export const OurServices = () => {
  const imgClass = "absolute h-[120px] hover:h-[140px] hover:cursor-pointer";
  return (
    <div className="flex flex-col items-center relative h-[650px] bg-gradient-to-t from-[#ff33cc] to-[#ffffff]">
      <p className="absolute top-8 left-8 font-bold text-3xl text-blue-700">
        Our Services
      </p>
      <div className="relative w-screen justify-center flex mt-20 h-[150px]">
        <img className={` ${imgClass}`} src={Image1} alt="service" />
      </div>
      <div className="relative w-screen justify-center flex h-[150px]">
        <img className={`ml-[350px] ${imgClass}`} src={Image1} alt="service" />
        <img className={`mr-[350px] ${imgClass}`} src={Image1} alt="service" />
      </div>
      <div className="relative w-screen justify-center flex mt-16 h-[150px]">
        <img className={`ml-[235px] ${imgClass}`} src={Image1} alt="service" />
        <img className={`mr-[235px] ${imgClass}`} src={Image1} alt="service" />
      </div>
    </div>
  );
};
