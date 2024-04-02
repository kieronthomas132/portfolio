import ProjectsCard from "./ProjectsCard.tsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectCards } from "./ProjectCardsArray.tsx";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={
        isInView ? { y: 0, opacity: 1, transition: { duration: 0.5 } } : ""
      }
      id="projects"
      className="lg:w-[85%] mt-[60px] lg:mt-0 w-[90%] text-[#623D2F] mx-auto"
    >
      <h1 className="uppercase tracking-widest text-[25px] font-montserrat font-[500]">
        Featured & Recent Projects
      </h1>
      <motion.div
        ref={ref}
        className="py-9 gap-5 md:grid md:grid-cols-2 grid grid-cols-1 lg:grid lg:grid-cols-3"
      >
        {projectCards.map((project, index) => (
          <ProjectsCard
            key={index}
            projectImage={project.projectImage}
            projectDescription={project.projectDescription}
            codeLink={project.codeLink}
            projectName={project.projectName}
            projectType={project.projectType}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        animate={{
          width: "100%",
          opacity: 1,
          transition: { duration: 1, delay: 1.5 },
        }}
        className="w-full h-[2px] bg-[#835F4F]"
      />
    </motion.section>
  );
};

export default Projects;
