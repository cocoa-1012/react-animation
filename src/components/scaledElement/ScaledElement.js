import { motion } from "framer-motion";

export const ScaledElement = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#ff008c] to-[#d309e1] overflow-hidden p-0 m-0 flex justify-center items-center">
      <motion.div
        className="bg-white rounded-[30px] w-[150px] h-[150px]"
        animate={{ scale: 3 }}
        transition={{ duration: 5 }}
      />
    </div>
  );
};
