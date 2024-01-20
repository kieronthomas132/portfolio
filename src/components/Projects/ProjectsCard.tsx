import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiComputerFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";

const ProjectsCard = ({
  projectTitle,
  projectDescription,
  arrow,
  arrow2,
  projectImage,
  arrow2Position,
  liveLink,
  codeLink,
  arrow_light,
  arrow_2_light,
}: {
  projectTitle: string;
  projectDescription: string;
  arrow?: string;
  arrow2: string;
  projectImage: string;
  arrow2Position: string;
  liveLink: string;
  codeLink: string;
  arrow_light?: string;
  arrow_2_light?: string;
}) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const isArrowInView = useInView(arrowRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  const { theme } = useTheme();

  const imageAnimation = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: -0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const arrowAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const headerAnimation = {
    initial: {
      x: -60,
      opacity: 0,
    },
    animate: {
      x: -0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const contentAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  return (
    <section className="flex relative flex-col text-center md:text-start lg:flex-row w-full xs:pb-0 sm:pb-[80px] xl:pb-[120px]">
      <div className="xl:flex xl:flex-row flex flex-col gap-[20px] xl:gap-[150px] justify-center w-full text-center">
        <div className="xl:w-[40%] w-[80%] mx-auto xl:pl-7">
          <motion.h1
            initial="initial"
            animate={isTextInView ? "animate" : "hidden"}
            variants={headerAnimation}
            className={`${theme === "dark" ? "text-white" : "text-[#289DE3]"} text-[40px] text-start font-[600]`}
          >
            {projectTitle}
          </motion.h1>

          <motion.div
            initial="initial"
            animate={isTextInView ? "animate" : "hidden"}
            variants={contentAnimation}
            ref={textRef}
            className={`leading-8 text-start  w-[100%] mx-auto ${theme === "dark" ? "text-neutral-400" : "text-black"}`}
          >
            <p>{projectDescription}</p>
            <span className="flex gap-[20px] mt-2">
              <Tooltip
                className={`${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7] "} text-white `}
                content="See Live"
              >
                <a href={liveLink} target="_blank">
                  <button
                    className={`${theme === "dark" ? "text-[#D8B9FF]" : "text-[#289DE3]"}`}
                  >
                    <RiComputerFill />
                  </button>
                </a>
              </Tooltip>
              <Tooltip
                className={`${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7] "} text-white `}
                content="See Code"
              >
                <a href={codeLink} target="_blank">
                  <button
                    className={`${theme === "dark" ? "text-[#D8B9FF]" : "text-[#289DE3]"}`}
                  >
                    <FaCode />
                  </button>
                </a>
              </Tooltip>
            </span>
          </motion.div>
        </div>

        <div className="hidden xl:flex pr-5 absolute w-[130px] top-[25%] left-[44%]">
          <motion.img
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, -5, 0],
              transition: {
                duration: 0.3,
                ease: "linear",
                repeat: 1,
                repeatType: "reverse",
              },
            }}
            initial="initial"
            animate={isArrowInView ? "animate" : "hidden"}
            ref={arrowRef}
            variants={arrowAnimation}
            src={theme === "dark" ? arrow : arrow_light}
          />
        </div>

        <div className={arrow2Position}>
          <motion.img src={theme === "dark" ?  arrow2 : arrow_2_light} className="w-[100px]" />
        </div>

        <div className="xl:pr-3 flex xl:block justify-center">
          <motion.img
            whileHover={{
              rotate: 25,
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            ref={imageRef}
            initial="initial"
            animate={isImageInView ? "animate" : "hidden"}
            variants={imageAnimation}
            src={projectImage}
            className={`xl:w-[650px] lg:w-[500px] md:w-[60%] w-[80%] rounded-lg p-[0.5px] ${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;
