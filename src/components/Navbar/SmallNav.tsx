import { motion } from "framer-motion";
import { useState } from "react";
import { navOptions } from "./navLinks.tsx";
import { useTheme } from "next-themes";
import button_on from "../../assets/audioAssets/button_on.mp3";
import button_off from "../../assets/audioAssets/button_off.mp3";
//@ts-ignore
import useSound from "use-sound";
import {Link} from "react-router-dom";

const SmallNav = () => {
  const { theme } = useTheme();

  const buttonOnSoundURL = button_on;
  const buttonOffSoundURL = button_off;

  const [buttonOnSound] = useSound(buttonOnSoundURL, { volume: 0.5 });
  const [buttonOffSound] = useSound(buttonOffSoundURL, { volume: 0.5 });

  const [isClicked, setIsClicked] = useState(false);

  const topLineAnimation = {
    initial: {
      y: -5,
      x: 0,
    },
    animate: {
      height: "3px",
      y: [-5, 0],
      rotate: [0, 0, -45],
      x: [0, 3],
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const middleLineAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: { delay: -10 },
    },
  };

  const bottomLineAnimation = {
    initial: {
      y: 5,
      x: 0,
    },
    animate: {
      height: "3px",
      y: [5, -4.7],
      rotate: [0, 0, 45],
      x: [0, 3],
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const circleToRect = {
    initial: {
      scale: 0,
      borderRadius: ["10px", "50%"],
    },
    animate: {
      scale: 1,
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "0px",
      height: "300px",
      right: "-8px",
      top: "45px",
      width: "150px",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <div className="flex md:hidden mr-2 flex-col relative">
      <motion.div
        animate={isClicked ? circleToRect.animate : circleToRect.initial}
        className={`font-[600] ${theme === "dark" ? "bg-[#1E1E1E] text-white" : "bg-[#C6EDFB] text-[#0047AB]"} text-medium absolute z-10`}
      >
        <motion.div
          animate={isClicked ? "open" : "closed"}
          className="flex w-full text-center list-none h-[100%] justify-center items-center"
        >
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isClicked ? "auto" : "none" }}
            className="flex flex-col gap-6 font"
          >
            {navOptions.map((nav, i) => (
              <motion.li
                onClick={() => setIsClicked(false)}
                key={i}
                variants={itemVariants}
              >
                <a href={nav.link}>
                  <motion.button>{nav.name}</motion.button>
                </a>
              </motion.li>
            ))}
            <Link to="#connect" onClick={() => setIsClicked(false)}>
              <motion.button
                variants={itemVariants}
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.ul>
        </motion.div>
      </motion.div>
      <button
        onMouseDown={buttonOnSound}
        onMouseUp={buttonOffSound}
        className="h-full p-2 z-20"
        onClick={handleClick}
      >
        <motion.div
          animate={
            isClicked ? topLineAnimation.animate : topLineAnimation.initial
          }
          className={`${theme === "dark" ? "bg-white" : "bg-[#0093E8]"} w-[25px] h-[2.5px] rounded-full`}
        />
        <motion.div
          initial="initial"
          animate={isClicked ? middleLineAnimation.animate : {}}
          className={`${theme === "dark" ? "bg-white" : "bg-[#0093E8]"} w-[25px] h-[2.5px] rounded-full`}
        />
        <motion.div
          animate={
            isClicked
              ? bottomLineAnimation.animate
              : bottomLineAnimation.initial
          }
          className={`${theme === "dark" ? "bg-white" : "bg-[#0093E8]"} w-[25px] h-[2.5px] rounded-full`}
        />
      </button>
    </div>
  );
};

export default SmallNav;
