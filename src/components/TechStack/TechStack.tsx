import { motion } from "framer-motion";
import { PiStackFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import CardHeader from "../CardHeader/CardHeader.tsx";
import TechStackItem from "./TechStackItem.tsx";

const TechStack = () => {

  const techStack = [
    {
      tech: "React",
      icon: <FaReact />,
      arrow: <GoArrowUpRight />,
      link: "https://react.dev/",
    },
    {
      tech: "TypeScript",
      icon: <SiTypescript />,
      arrow: <GoArrowUpRight />,
      link: "https://www.typescriptlang.org/",
    },
    {
      tech: "Tailwind",
      icon: <SiTailwindcss />,
      arrow: <GoArrowUpRight />,
      link: "https://tailwindcss.com",
    },
    {
      tech: "Framer Motion",
      icon: <TbBrandFramerMotion />,
      arrow: <GoArrowUpRight />,
      link: "https://www.framer.com/motion/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      className="p-2 text-white text-center xs:w-[95%] sm:w-[530px] lg:w-auto xs:mt-[5px] sm:mt-0 h-[260px] bg-[#101010] border-2 border-[#191919] rounded-3xl"
    >
      <CardHeader
        headerTitle={"My Stacks"}
        headerSubHeading={"Tech Arsenal"}
        headerIcon={<PiStackFill />}
      />
      <div className="grid mt-[20px] text-[#CCCCCC] p-1 font-[600] text-[14px] gap-3 grid-cols-2">
        {techStack.map(({ link, icon, tech, arrow }, index) => (
          <a href={link} target="_blank">
            <TechStackItem icon={icon} tech={tech} arrow={arrow} index={index}/>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
