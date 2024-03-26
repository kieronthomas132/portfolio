import {motion, useInView} from "framer-motion";
import {container, item} from "../framer-motion/framer-motion.tsx";
import {useRef} from "react";

const ProjectLayoutProjectOverview = ({
                                          description,
                                          name,
                                          featureName1,
                                          featureDescription1,
                                          featureName2,
                                          featureDescription2,
                                          techStack,
                                      }: {
    description: string;
    name: string;
    featureName1: string;
    featureDescription1: string;
    featureName2: string;
    featureDescription2: string;
    techStack: { tech: string }[];
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <section className="w-[80%] text-lg text-[#623D2F] mt-[60px] mx-auto">
            <motion.h4
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                className="text-[25px] my-4 tracking-tight font-[600]"
            >
                Project Overview
            </motion.h4>
            <motion.h3
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1, transition: {delay: 0.5}}}
            >
                {description}
            </motion.h3>

            <div className="lg:flex lg:flex-row flex flex-col relative">
                <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={
                        isInView
                            ? {height: "90%", opacity: 1, transition: {duration: 1}}
                            : ""
                    }
                    className="absolute hidden lg:flex w-[2px] bg-[#623D2F] top-5 right-[39%]"
                />
                <div className="lg:w-[60%] w-full my-4">
                    <motion.h4
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1, transition: {delay: 0.8}}}
                        className="mt-10"
                    >
                        {name} features:{" "}
                    </motion.h4>
                    <motion.ol
                        ref={ref}
                        className="list-decimal bg-red px-5 flex flex-col gap-5 w-[100%] mt-[20px]"
                    >
                        <motion.li
                            initial={{x: -100, opacity: 0}}
                            animate={
                                isInView ? {x: 0, opacity: 1, transition: {delay: 0.5}} : ""
                            }
                            className="leading-9"
                        >
                            <span className="font-[600]">{featureName1}</span>:{" "}
                            {featureDescription1}
                        </motion.li>
                        <motion.li
                            className="leading-9"
                            initial={{x: -100, opacity: 0}}
                            animate={
                                isInView ? {x: 0, opacity: 1, transition: {delay: 1}} : ""
                            }
                        >
                            <span className="font-[600]">{featureName2}</span>:{" "}
                            {featureDescription2}
                        </motion.li>
                    </motion.ol>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="lg:ml-[80px]"
                >
                    <h4 className="lg:mt-[60px]">Tech Stack:</h4>
                    <motion.ol variants={item} className="list-disc ml-[20px] mt-[20px]">
                        {techStack?.map((tech) => (
                            <li className="my-4 font-[600]">{tech?.tech}</li>
                        ))}
                    </motion.ol>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectLayoutProjectOverview;
