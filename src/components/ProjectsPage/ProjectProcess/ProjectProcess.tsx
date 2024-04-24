import CardHeader from "../../CardHeader/CardHeader.tsx";
import { FaGear, FaRegLightbulb } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { AiFillLayout } from "react-icons/ai";
import { FaCode, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import ProjectProcessItem from "./ProjectProcessItem.tsx";

const ProjectProcess = () => {
  const projectProcess = [
    {
      title: "Establish Project Idea",
      content:
        "Establish and project to create, usually one that is a challenge for me to develop individually.",
      icon: <FaRegLightbulb />,
    },
    {
      title: "Identify Technologies",
      content:
        "Identify what appropriate technologies are to be used e.g. state management (Redux, Zustand), query management (Axios, Tanstack Query) etc.",
      icon: <MdOutlineQuestionMark />,
    },
    {
      title: "Design Layout",
      content:
        "Design the layout of the application, including colour scheme, interactivity and responsive layout.",
      icon: <AiFillLayout />,
    },
    {
      title: "Develop Front-End Components",
      content:
        "Write reusable and clean components using React.js, incorporating best practices such as functional components, hooks and the technologies established previously.",
      icon: <FaCode />,
    },
    {
      title: "Perform Testing & Debugging",
      content:
        "Conduct unit testing, integration testing, and end-to-end testing to ensure frontend components function correctly. Debug and fix issues as needed.",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      className="bg-[#101010] 2xl:h-[530px] 2xl:w-[370px] xl:w-[1010px] lg:w-[1010px] md:w-[60%] w-[95%] mt-[10px] 2xl:mt-0 p-2 rounded-3xl border-2 border-[#191919]"
    >
      <CardHeader
        headerTitle={"Project Process"}
        headerSubHeading={"Systematic Approach"}
        headerIcon={<FaGear />}
      />
      <ul className="flex border-t mt-2 border-[#212121] flex-col gap-7 h-[85%] w-full justify-center">
        {projectProcess.map(({ title, content, icon }, index) => (
          <ProjectProcessItem
            title={title}
            content={content}
            icon={icon}
            index={index}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectProcess;
