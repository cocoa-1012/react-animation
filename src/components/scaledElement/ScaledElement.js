import { motion } from "framer-motion";
import { Header } from "../header/Header";

export const ScaledElement = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-gradient-to-r from-[#ff008c] to-[#d309e1] overflow-hidden p-0 m-0 flex justify-center items-center">
        <motion.div
          className="bg-white rounded-[30px] w-[150px] h-[150px]"
          animate={{ scale: 3 }}
          transition={{ duration: 5 }}
        />
      </div>
      {/* <div className="mt-[200px]">
        <motion.div
          className="bg-red-300 rounded-[30px] w-[150px] h-[150px]"
          animate={{
            scale: [1, 2, 1],
            boxShadow: ["0 0 0px white", "0 0 20px white", "0 0 0 white"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div> */}
    </>
  );
};
