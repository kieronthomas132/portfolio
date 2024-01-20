import logo from "../../assets/Logo.svg";
import { motion } from "framer-motion";
//@ts-ignore
import useSound from "use-sound";
//@ts-ignore
import DarkModeAnimation from '../DarkModeAnimation.jsx'
import SmallNav from "./SmallNav.tsx";
import { navOptions } from "./navLinks.tsx";
import { useTheme } from "next-themes";
import button_on from "../../assets/audioAssets/button_on.mp3";
import button_off from "../../assets/audioAssets/button_off.mp3";
const Navbar = () => {
  const { theme } = useTheme();

  const buttonOnSoundURL = button_on;
  const buttonOffSoundURL = button_off;

  const [buttonOnSound] = useSound(buttonOnSoundURL, { volume: 0.5 });
  const [buttonOffSound] = useSound(buttonOffSoundURL, { volume: 0.5 });

  const navbarAnimation = {
    hidden: { y: -20, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="animate"
      variants={navbarAnimation}
      className={`${theme === "dark" ? "bg-[#1E1E1E] text-white" : "bg-[#C6EDFB] text-[#0047AB]"}  py-3.5 md:px-10 font-montserrat items-center flex justify-between w-full`}
    >
      <div>
        <img src={logo} className="w-[40px]  md:ml-0 ml-10" alt="logo" />
      </div>
      <div className="flex items-center gap-[20px]">
        <DarkModeAnimation />
        <ul className="hidden md:flex font-[500] items-center gap-5 text-[15px]">
          {navOptions.map((nav) => (
            <li
              key={nav.name}
              onMouseDown={buttonOnSound}
              onMouseUp={buttonOffSound}
            >
              <a href={nav.link}>
                <motion.button
                  whileHover={{ scale: 1.2, type: "spring" }}
                  whileTap={{ scale: 1 }}
                >
                  {nav.name}
                </motion.button>
              </a>
            </li>
          ))}
          <a href="#connect">
            <motion.button
              onMouseDown={buttonOnSound}
              onMouseUp={buttonOffSound}
              whileHover={{ scale: 1.2, type: "spring" }}
              whileTap={{ scale: 1 }}
              className={` ${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7] "} font-[600] p-2 rounded-full w-[100px] text-center`}
            >
              Lets Talk
            </motion.button>
          </a>
        </ul>
        <SmallNav />
      </div>
    </motion.div>
  );
};

export default Navbar;
