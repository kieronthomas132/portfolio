import memoji from "../../assets/Memoji.png";
import { motion } from "framer-motion";
import imageSound from "../../assets/audioAssets/image_sound.mp3";
//@ts-ignore
import useSound from "use-sound";
import Typewriter from "typewriter-effect";
import button_on from "../../assets/audioAssets/button_on.mp3";
import button_off from "../../assets/audioAssets/button_off.mp3";
import Kieron_Thomas_Resume from "../../../public/Kieron-Thomas-Resume.pdf";
import darkArrow from "../../assets/arrows/dark_arrow.svg";
import arrow from "../../assets/arrows/arrow.svg";
import { IoLogoGithub } from "react-icons/io";
import { useTheme } from "next-themes";
import { useState } from "react";
import {Tooltip} from "@nextui-org/react";
const Header = () => {
  const [playbackRate] = useState(2.5);

  const { theme } = useTheme();
  const soundURL = imageSound;
  const buttonOnSoundURL = button_on;
  const buttonOffSoundURL = button_off;

  const [play] = useSound(soundURL, {
    volume: 0.5,
    playbackRate,
    interrupt: true,
  });
  const [buttonOnSound] = useSound(buttonOnSoundURL, { volume: 0.5 });
  const [buttonOffSound] = useSound(buttonOffSoundURL, { volume: 0.5 });

  const imageAnimation = {
    hidden: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 200,
        delay: 0.5,
      },
    },
  };

  const button1Animation = {
    hidden: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 2,
      },
    },
  };

  const button2Animation = {
    hidden: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 200,
        delay: 2,
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 1,
      },
    },
  };

  return (
    <section
      className={`${theme === "dark" ? "text-white" : "text-black"} flex gap-4 relative py-[60px] lg:h-[720px] flex-col items-center justify-center`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            damping: 15,
            stiffness: 200,
          },
        }}
        className="absolute hidden md:flex right-[35%] top-[6%]"
      >
        <img src={theme === "dark" ? arrow : darkArrow} alt="arrow" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 0.8,
            type: "spring",
            damping: 15,
            stiffness: 200,
          },
        }}
        className="absolute hidden md:flex right-[25%] top-[7%] font-montserrat tracking-wide leading-6 text-sm text-neutral-400 font-[300]"
      >
        <h4>Hi! I'm Kieron Thomas</h4>
      </motion.div>
      <motion.div
        className="rounded-full"
        onMouseOver={play}
        whileHover={{ rotate: 25 }}
      >
        <motion.img
          initial="hidden"
          animate="animate"
          variants={imageAnimation}
          alt="memoji of Kieron Thomas"
          src={memoji}
          className={`w-[200px] rounded-full ${theme === "dark" ? "bg-gradient-to-br from-[#F57C6C] to-[#9E20DA]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"}`}
        />
      </motion.div>

      <div className=" text-center w-[80%] lg:w-[40%]">
        <h2 className="text-[35px] xs:h-[200px] sm:h-[150px] lg:h-[110px] font-[700]">
          {theme === "dark" ? (
            <Typewriter
              options={{
                strings: `I code and love picking up new things ${"<span class='animated-text' >along the way</span>"}`,
                autoStart: true,
                loop: false,
                delay: 35,
                cursor: `${"<span class='animated-text' >|</span>"}`,
              }}
            />
          ) : (
            <Typewriter
              options={{
                strings: `I code and love picking up new things ${"<span class='animated-text-light' >along the way</span>"}`,
                autoStart: true,
                loop: false,
                delay: 35,
                cursor: `${"<span class='animated-text-light' >|</span>"}`,
              }}
            />
          )}
        </h2>
      </div>

      <motion.h3
        initial="hidden"
        animate="animate"
        variants={textAnimation}
        className="lg:w-[60%] h-auto lg:h-[140px] w-[90%] font-montserrat tracking-wide leading-6 text-sm  font-[300] text-center"
      >
        Hey there! I'm a React Front-End developer who loves bringing ideas to
        life through creative development. I've got a real hunger for knowledge
        and a genuine excitement for picking up new skills. I love learning
        independently and working collaboratively. My aim is to contribute
        innovative solutions that combine creativity with functionality,
        ultimately elevating user experiences.
      </motion.h3>
      <motion.div
        initial="hidden"
        animate="animate"
        variants={button1Animation}
        className="flex flex-col  md:flex md:flex-row items-center gap-6 text-sm font-[600]"
      >
        <a href={Kieron_Thomas_Resume} download>
          <motion.button
            onMouseDown={buttonOnSound}
            onMouseUp={buttonOffSound}
            whileTap={{ scale: 1 }}
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.5,
              },
            }}
            className={`p-2.5 ${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"}  text-white rounded-full`}
          >
            Download Project Resumé
          </motion.button>
        </a>
        <a href="https://github.com/kieronthomas132" target="_blank">
          <Tooltip content='Github' color='default'>
          <button>
          <IoLogoGithub  className={theme === "dark" ? "text-white text-[50px]" : "text-[#0F95DF] text-[50px]"}/>
          </button>
          </Tooltip>
        </a>
        <a href="#connect">
          <motion.button
            onMouseDown={buttonOnSound}
            onMouseUp={buttonOffSound}
            whileTap={{ scale: 1 }}
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.5,
              },
            }}
            variants={button2Animation}
            className={`p-2.5 border-2 ${theme === "dark" ? "border-white text-white" : "border-[#1698E7] text-[#1698E7]"} w-[150px] text-center rounded-full`}
          >
            Get In Touch
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default Header;
