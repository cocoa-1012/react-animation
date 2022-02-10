import { motion } from "framer-motion";
import React from "react";
import Image1 from "../../assets/images/service.png";

export const OurServices = () => {
  const imgButton = {
    rest: { scale: 1 },
    hover: {
      scale: 1.2,
      transition: { type: "tween", duration: 0.4 },
    },
  };
  const imgClass = "absolute h-[120px] hover:cursor-pointer";
  return (
    <div className="flex flex-col items-center relative h-[650px]">
      <p className="absolute top-8 left-8 font-bold text-3xl text-blue-700">
        Our Services
      </p>
      <div className="relative w-screen justify-center flex mt-20 h-[150px]">
        <motion.img
          className={` ${imgClass}`}
          src={Image1}
          alt="service"
          variants={imgButton}
          initial="rest"
          whileHover="hover"
        />
      </div>

      <div className="relative w-screen justify-center flex h-[150px]">
        <motion.img
          className={`ml-[350px] ${imgClass}`}
          variants={imgButton}
          initial="rest"
          whileHover="hover"
          src={Image1}
          alt="service"
        />
        <motion.img
          className={`mr-[350px] ${imgClass}`}
          variants={imgButton}
          initial="rest"
          whileHover="hover"
          src={Image1}
          alt="service"
        />
      </div>
      <div className="relative w-screen justify-center flex mt-16 h-[150px]">
        <motion.img
          className={`ml-[235px] ${imgClass}`}
          variants={imgButton}
          initial="rest"
          whileHover="hover"
          src={Image1}
          alt="service"
        />
        <motion.img
          className={`mr-[235px] ${imgClass}`}
          variants={imgButton}
          initial="rest"
          whileHover="hover"
          src={Image1}
          alt="service"
        />
      </div>
    </div>
  );
};
