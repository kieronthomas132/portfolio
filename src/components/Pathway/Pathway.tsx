import { TbProgressCheck } from "react-icons/tb";
import { FaCode, FaHandRock } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { IoBuild } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { motion } from "framer-motion";
import CardHeader from "../CardHeader/CardHeader.tsx";
import PathwayItem from "./PathwayItem.tsx";

const Pathway = () => {
  const progressList = [
    {
      title: "Deepen Expertise",
      content:
        "Explore more advanced front-end concepts e.g. data structures & algorithms to deepen experience.",
      icon: <FaCode />,
    },
    {
      title: "Expand into Back-End ",
      content:
        "Delve into backend development with languages e.g, NodeJS, Java, C# etc.",
      icon: <FaDatabase />,
    },
    {
      title: "Build Full-Stack Projects",
      content: "Expand my portfolio into building full-stack applications.",
      icon: <IoBuild />,
    },
    {
      title: "Engage in Real-World Projects",
      content:
        "Participate in end-to-end development projects, collaborating with teams to deploy production-ready applications.",
      icon: <FaHandRock />,
    },
    {
      title: "Progress Towards Senior Developer",
      content:
        "Advance into a senior developer position, mentor juniors and collaborate on exciting projects.",
      icon: <GiGraduateCap />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.9 } }}
      className="bg-[#101010] h-[450px] md:h-auto p-2 xs:w-[95%] sm:w-[530px] md:w-[540px] lg:w-[340px] 2xl:w-[265px] rounded-3xl border-2 border-[#191919]"
    >
      <CardHeader
        headerTitle={"My Pathway"}
        headerSubHeading={"What Are My Goals?"}
        headerIcon={<TbProgressCheck />}
      />
      <ul className="flex flex-col gap-3 h-[85%] w-full justify-center">
        {progressList.map(({ title, content, icon }, index) => (
          <PathwayItem
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

export default Pathway;
