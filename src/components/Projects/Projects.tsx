import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Nexus from '../Projects/Nexus.tsx'
import Crypto from '../Projects/Crypto.tsx'
import {useTheme} from "next-themes";
const Projects = () => {
  const {theme} = useTheme()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headerAnimation = {
    initial: {
      opacity: 0,
      x: -150,
    },
    animate: {
      opacity: 1,
      x: -0,
      transition: {
        duration: 0.9,
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.8,
      },
    },
  };

  return (
    <section
      id="projects"
      className="flex relative overflow-x-hidden z-30 gap-4 pt-[10px] flex-col items-center justify-center"
    >
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 250, damping: 15 },
        }}
      >
        <motion.h1
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={headerAnimation}
          ref={ref}
          className={`${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"}  inline-block text-transparent bg-clip-text text-[40px] lg:text-[60px] font-[600]`}
        >
          Featured Projects
        </motion.h1>
      </motion.div>
      <Nexus />
      <Crypto />
    </section>
  );
};

export default Projects;
