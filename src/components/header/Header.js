import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Logo from "../../../src/assets/images/Screenshot_4.png";
import { routers } from "../config/Router";
// import { Sample } from "../sample/Sample";

export const Header = () => {
  const imageLogo = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.9 },
  };
  // const [count, setCount] = useState(0);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="absolute h-20 bg-yellow-200 flex items-center w-full justify-between px-8">
      {/* Refresh button sample */}
      {/* <Sample onClick={() => setCount(count + 1)} /> */}
      {/* Logo Button */}
      <motion.div
        variants={imageLogo}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        <Link to={routers.home}>
          <img className="h-16 pt-4 cursor-pointer" src={Logo} alt="Logo" />
        </Link>
      </motion.div>
      {/* Title */}
      <p className="text-3xl font-bold">
        SkySkills Projects{" "}
        {/* <span className="text-xl text-red-600">( Feb, 2022 | animation )</span> */}
      </p>
      {/* Contact Us */}
      <div className="flex text-xl font-bold cursor-pointer">
        <Link
          className="px-8 border-b-4 hover:border-red-400"
          to={routers.externals.aboutUs}
        >
          About Us
        </Link>
        <Link
          className="px-8 border-b-4 hover:border-red-400"
          to={routers.externals.contactUs}
        >
          Contact Us
        </Link>
        <Link
          className="px-8 border-b-4 hover:border-red-400"
          to={routers.externals.articles}
        >
          Articles
        </Link>
      </div>
      {/* Sample Lists */}
      <div
        className="cursor-pointer"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <p className="text-xl font-bold">Samples</p>
        {isHover && (
          <nav
            className="absolute pt-[10px] w-[150px]"
            onMouseOver={() => setIsHover(true)}
          >
            <ul className="bg-slate-300 rounded-b-md border-red-200 border-solid border-t-4 border-b-4">
              <li className="hover:bg-slate-100 text-left px-4 py-2 border-b-2">
                <Link to={routers.home}>Home</Link>
              </li>
              <li className="hover:bg-slate-100 text-left px-4 py-2 border-b-2">
                <Link to={routers.samples.scaledElement}>Scaled Element</Link>
              </li>
              <li className="hover:bg-slate-100 text-left px-4 py-2">
                <Link to={routers.samples.sample1}>Sample1</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {/* Social buttons List */}
      {/* <p>social buttons</p> */}
    </div>
  );
};
