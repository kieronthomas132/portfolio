import { useTheme } from "next-themes";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import skills_under_construction from "../../assets/skills_under_construction.svg";
import skills_under_construction_light from '../../assets/skills_under_construction_light.svg'
import { Progress } from "@nextui-org/react";
const Skills = () => {
  const [value, setValue] = useState(0);
  const { theme } = useTheme();
  const ref = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null)
  const isInView = useInView(ref, { once: true });
  const [progressBarBG, setProgressBarBG] = useState("");

  const progressDarkBG =
    "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]";
  const progressLightBG = "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]";

  useEffect(() => {
    if (theme === "dark") {
      setProgressBarBG(progressDarkBG);
    } else {
      setProgressBarBG(progressLightBG);
    }
  }, [theme]);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + 1;
          return newValue <= 100 ? newValue : 100;
        });
      }, 25);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  const skillsHeaderAnimation = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.9,
        stiffness: 300,
        damping: 12,
      },
    },
  };
  
  const imageAnimation = {
      hidden: {
          opacity: 0,
          y: '50px'
      }, 
      animate: {
          opacity: 1,
          y: "0px",
          transition: {
              duration: 0.8,
              delay: 0.5
          }
    }
  }

  return (
    <div  className="w-full lg:mt-[80px] flex flex-col items-center text-center ">
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: {
            type: "spring",
            duration: 0.5,
            stiffness: 200,
            damping: 13,
          },
        }}
      >
        <motion.h1
          ref={ref}
          variants={skillsHeaderAnimation}
          initial="initial"
          animate={isInView ? "animate" : "hidden"}
          className={`min-w-[25%] font-[600] ${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"} text-[40px] lg:text-[60px] font-[600] text-transparent bg-clip-text `}
        >
          Skills Under Construction
        </motion.h1>
      </motion.div>
        <div className='md:w-full w-[80%] flex  justify-center'>
      <Progress
        aria-label="Downloading..."
        size="md"
        value={value}
        classNames={{
          base: "max-w-md",
          track: "drop-shadow-md border border-default",
          indicator: progressBarBG,
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
        showValueLabel={false}
        className="md:max-w-md w-[80%]"
      />
        </div>
      <motion.img ref={imageRef} variants={imageAnimation} initial='hidden' animate={isInView ? "animate" : "hidden"} className="xl:w-[500px] w-[80%] " src={theme === "dark" ? skills_under_construction : skills_under_construction_light} />
    </div>
  );
};

export default Skills;
