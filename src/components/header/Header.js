import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Logo from "../../../src/assets/images/Screenshot_4.png";
import { Sample } from "../sample/Sample";

export const Header = () => {
  const imageLogo = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.9 },
  };
  const [count, setCount] = useState(0);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="absolute h-20 bg-yellow-200 flex items-center w-full justify-between px-8">
      <Sample onClick={() => setCount(count + 1)} />
      <motion.div
        variants={imageLogo}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        <Link to="/">
          <img className="h-16 pt-4 cursor-pointer" src={Logo} alt="Logo" />
        </Link>
      </motion.div>
      <p className="text-3xl font-bold">
        SkySkills Projects{" "}
        <span className="text-xl text-red-600">
          ( Feb, 2022 | animation with framer-motion )
        </span>
      </p>
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
            <ul className="bg-slate-300 rounded-b-lg border-red-200 border-solid border-t-4 border-b-4">
              <li className="hover:bg-slate-100 text-left px-4 py-2 border-b-2">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-slate-100 text-left px-4 py-2 border-b-2">
                <Link to="/scaledElement">Scaled Element</Link>
              </li>
              <li className="hover:bg-slate-100 text-left px-4 py-2 border-b-2">
                <Link to="/scaledElement">Users</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <p>social buttons area</p>
    </div>
  );
};
