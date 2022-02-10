// import { motion } from "framer-motion";
import { Header } from "../../components/header/Header";

export const Articles = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-gradient-to-t from-[#ff3399] to-[#3399ff] overflow-hidden p-0 m-0 flex justify-center items-center">
        {/* <motion.div
          className="bg-white rounded-[30px] w-[150px] h-[150px]"
          animate={{ scale: 3 }}
          transition={{ duration: 5 }}
        /> */}
        Articles Page
      </div>
    </>
  );
};
