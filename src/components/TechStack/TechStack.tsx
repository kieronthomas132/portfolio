import { useTheme } from "next-themes";
import react from "../../assets/techstack/react.svg";
import css from "../../assets/techstack/css.svg";
import html from "../../assets/techstack/html.svg";
import js from "../../assets/techstack/js.svg";
import nodejs from "../../assets/techstack/nodejs.svg";
import typescript from "../../assets/techstack/typescript.svg";
import vite from "../../assets/techstack/vite.svg";
import tailwind from "../../assets/techstack/tailwind.svg";
import react_query from "../../assets/techstack/react_query.svg";
import framer from "../../assets/techstack/framer.svg";
import github from "../../assets/techstack/github.svg";
import material_ui from "../../assets/techstack/material_ui.svg";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const techStackCard = [
    {
      name: "React",
      type: "Framework",
      img: react,
    },
    {
      name: "Vite",
      type: "Build Tool",
      img: vite,
    },
    {
      name: "TypeScript",
      type: "Language",
      img: typescript,
    },
    {
      name: "HTML",
      type: "Hypertext",
      img: html,
    },
    {
      name: "CSS",
      type: "Styling",
      img: css,
    },
    {
      name: "JavaScript",
      type: "Language",
      img: js,
    },
    {
      name: "NodeJS",
      type: "Runtime",
      img: nodejs,
    },
    {
      name: "Tailwind",
      type: "Styling",
      img: tailwind,
    },
    {
      name: "Github",
      type: "Repository",
      img: github,
    },
    {
      name: "React Query",
      type: "Data Fetch",
      img: react_query,
    },
    {
      name: "Framer",
      type: "Animation",
      img: framer,
    },
    {
      name: "Material UI",
      type: "Library",
      img: material_ui,
    },
  ];

  const { theme } = useTheme();
  
  const techStackHeaderAnimation = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 13
      }
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div id='tech-stack' className="w-full pb-10 flex flex-col text-center">
      <motion.h1
          whileHover={{scale: 1.05, transition: {type:"spring", stiffness: 200, damping: 14} }}
          variants={techStackHeaderAnimation}
          initial='initial'
          animate={isInView ? "animate" : "hidden"}
        className={` mb-8 font-[600] ${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"} text-[40px] md:text-[45px] w-[80%] text-center items-center justify-center flex mx-auto mt-[30px] lg:text-[60px] font-[600] text-transparent bg-clip-text `}
      >
        What's in my Tech Stack?
      </motion.h1>
      <div className="flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          ref={ref}
          className="md:grid flex flex-col md:w-[80%] w-[90%] md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {techStackCard.map((tech, index) => (
            <motion.div key={index} variants={listItem}>
              <div
                className={`flex justify-between ${theme === "dark" ? "bg-[#18181B]" : "bg-[#C6EDFB]"}  p-3 rounded-lg md:hidden items-center gap-4`}
              >
                <img alt={tech.name} src={tech.img} className="w-[60px] rounded-lg" />
                <span className="flex gap-3 text-sm text-neutral-600 ">
                  <h3
                    className={`line-clamp-1 ${theme === "dark" ? "border border-neutral-700" : "border border-[#0093E8] text-[#0093E8]"}  p-2 w-[100px] text-center rounded-full`}
                  >
                    {tech.name}
                  </h3>
                  <h3
                    className={`line-clamp-1 ${theme === "dark" ? "border border-neutral-700" : "border border-[#0093E8] text-[#0093E8]"}  p-2 w-[100px] text-center rounded-full`}
                  >
                    {tech.type}
                  </h3>
                </span>
              </div>

              <motion.div whileHover={{scale: 1.05, transition:{type: "spring", damping: 13, stiffness: 200} }}>
                <Card
                    className={`shadow-neutral-800 hidden md:flex ${theme === "dark" ? "" : "bg-[#C6EDFB]"} `}
                >
                  <CardHeader className="flex justify-center">
                    <Image src={tech.img} />
                  </CardHeader>
                  <CardBody>
                    <div className="flex gap-5 text-sm text-neutral-600 justify-between items-center">
                      <h3
                          className={`line-clamp-1 ${theme === "dark" ? "border border-neutral-700" : "border border-[#0093E8] text-[#0093E8]"}  p-2 w-[100px] text-center rounded-full`}
                      >
                        {tech.name}
                      </h3>
                      <h3
                          className={`line-clamp-1 ${theme === "dark" ? "border border-neutral-700" : "border border-[#0093E8] text-[#0093E8]"}  p-2 w-[100px] text-center rounded-full`}
                      >
                        {tech.type}
                      </h3>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
