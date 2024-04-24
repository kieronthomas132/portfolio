import { motion } from "framer-motion";
import {ReactNode, useState} from "react";

const TechStackItem = ({icon, tech, index, arrow}: {icon: ReactNode, tech:string, arrow: ReactNode, index: number}) => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
    <div
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
      className="flex items-center justify-between border-2 border-[#212121] w-full bg-[#191919] rounded-2xl"
    >
      <div className="flex items-center p-1 gap-1">
        <p className="text-[20px] bg-[#282828] text-[#999999] rounded-lg p-2.5">
          {icon}
        </p>
        <p>{tech}</p>
      </div>
      <motion.p
        className="text-[20px] mr-2"
        initial={{ opacity: 0, rotate: "45deg" }}
        animate={hoveredItem === index ? { opacity: 1, rotate: "0deg" } : {}}
      >
        {arrow}
      </motion.p>
    </div>
  );
};

export default TechStackItem;
