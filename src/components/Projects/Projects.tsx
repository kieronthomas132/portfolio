import ProjectsCard from "./ProjectsCard.tsx";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import {projectVariant} from "../framer-motion/framer-motion.tsx";
import {projectCards} from './ProjectCardsArray.tsx'

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <section
            id="projects"
            className="lg:w-[85%] mt-[60px] lg:mt-0 w-[90%] text-[#623D2F] mx-auto"
        >
            <motion.h1
                variants={projectVariant}
                initial="hidden"
                animate={isInView ? "animate" : "hidden"}
                className="uppercase tracking-widest text-[25px] font-montserrat font-[500]"
            >
                Featured & Recent Projects
            </motion.h1>
            <motion.div
                variants={projectVariant}
                animate={isInView ? "animate" : ""}
                initial="hidden"
                ref={ref}
                className=" py-3 gap-5 md:grid md:grid-cols-2 grid grid-cols-1 lg:grid lg:grid-cols-3"
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
            <motion.div ref={ref} initial={{width: '0%', opacity: 0}}
                        animate={{width: '100%', opacity: 1, transition: {duration: 1, delay: 1.5}}}
                        className="w-full h-[2px] bg-[#835F4F]"/>
        </section>
    );
};

export default Projects;
