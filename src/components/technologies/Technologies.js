import React from "react";
import Image1 from "../../assets/images/tech.png";

export const Technologies = () => {
  return (
    <div className="flex flex-col items-center relative h-[550px]">
      <p className="absolute top-8 left-8 font-bold text-3xl text-blue-700">
        Technologies We Use
      </p>
      <div className="justify-center flex mt-20">
        <img className="h-[550px]" src={Image1} alt="service" />
      </div>
    </div>
  );
};
