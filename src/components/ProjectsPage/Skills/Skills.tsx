import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedux, SiNextui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import CardHeader from "../../CardHeader/CardHeader.tsx";
import { GiStarSwirl } from "react-icons/gi";
import SkillItem from "./SkillItem.tsx";

const Skills = () => {
  const skills = [
    {
      skill: "React",
      icon: <FaReact />,
      type: "Frontend Framework"
    },
    {
      skill: "Framer Motion",
      icon: <TbBrandFramerMotion />,
      type: "Animation Library"

    },
    {
      skill: "Typescript",
      icon: <SiTypescript />,
      type: "Language"

    },
    {
      skill: "TailwindCSS",
      icon: <SiTailwindcss />,
      type: "Styling Sheet"

    },
    {
      skill: "Redux",
      icon: <SiRedux />,
      type: "State Management"

    },
    {
      skill: "NextUI",
      icon: <SiNextui />,
      type: "Component Library"

    },
  ];
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8 } }}
      className="bg-[#101010] h-[530px] p-2 mt-[10px] 2xl:mt-0 2xl:w-[380px] xl:w-[1010px] lg:w-[1010px] md:w-[60%] w-[95%] border-2 border-[#191919] rounded-3xl"
    >
      <CardHeader
        headerTitle={"My Skills"}
        headerSubHeading={"My Most Used Technologies"}
        headerIcon={<GiStarSwirl />}
      />
      <ul className="flex border-t mt-2 border-[#212121] flex-col gap-2 h-[85%] justify-center">
        {skills.map(({skill, icon, type}, index) => (
            <SkillItem skill={skill} icon={icon} index={index} type={type}/>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
