import { motion } from "framer-motion";
import Logo from "../../../src/assets/images/Screenshot_4.png";

export const Header = () => {
  const imageLogo = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.9 },
  };
  return (
    <div className="absolute h-20 bg-yellow-200 flex items-center w-full justify-between px-8">
      <motion.div
        variants={imageLogo}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        <img className="h-16 pt-4 cursor-pointer" src={Logo} alt="Logo" />
      </motion.div>
      <p className="text-3xl font-bold">
        SkySkills Projects{" "}
        <span className="text-xl text-red-600">
          ( Feb, 2022 | animation with framer-motion )
        </span>
      </p>
      <select>
        <option>Sample 1</option>
        <option>Sample 2</option>
        <option>Sample 3</option>
        <option>Sample 4</option>
        <option>Sample 5</option>
      </select>
      <p>social buttons area</p>
    </div>
  );
};
