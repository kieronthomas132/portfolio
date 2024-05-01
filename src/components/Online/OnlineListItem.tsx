import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { ReactNode, useState } from "react";

const OnlineListItem = ({
  icon,
  option,
  index,
}: {
  icon: ReactNode;
  option: string;
  index: number;
}) => {

  const [hovered, setHovered] = useState<null | number>(null);

  return (
    <li
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="bg-list_bg border-2 border-list_border mt-3 p-2 rounded-xl flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        <p
          className={`bg-icon_bg ${hovered === index ? "text-hovered_icon" : "text-inactive_icon"} transition-all p-3 text-[25px] rounded-xl`}
        >
          {icon}
        </p>
        <p className="text-gray_text text-[14px] font-[500]">{option}</p>
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: "45deg" }}
        animate={hovered === index ? { opacity: 1, rotate: "0deg" } : {}}
      >
        <GoArrowUpRight className="text-icon text-[25px] font-[500]" />
      </motion.div>
    </li>
  );
};

export default OnlineListItem;
