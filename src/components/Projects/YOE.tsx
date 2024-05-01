import { FaFlag } from "react-icons/fa6";
import { PiShootingStarFill } from "react-icons/pi";
import {motion} from "framer-motion";

const YEO = () => {
  return (
    <div className="grid text-center xs:w-[95%] sm:w-[530px] gap-3 h-[150px] grid-cols-2">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6} }} className="bg-card_background relative flex flex-col w-full justify-center border-2 border-border rounded-2xl">
        <div className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-b from-30% from-[rgba(35,35,35,0)] to-[rgba(16,16,16,1)] to-90% rounded-2xl" />
        <p className="text-[60px] text-gray_text">15</p>
        <span className="flex mb-3 justify-center">
          <div className="flex items-center border-2 border-border xs:text-[13px] text-sm font-[500] bg-[#141414] rounded-full gap-2 p-2 w-[80%] text-center justify-center">
            <FaFlag className="text-icon text-[20px]" />
            <h4>Projects</h4>
          </div>
        </span>
      </motion.div>

      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.7} }} className="bg-[#101010] relative flex flex-col justify-center w-full border-2 border-[#191919] rounded-2xl">
        <div className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-b from-30% from-[rgba(35,35,35,0)] to-[rgba(16,16,16,1)] to-90% rounded-2xl" />
        <p className="text-[60px] text-[#999999]">02</p>
        <span className="flex mb-3 justify-center">
          <div className="flex items-center text-[#CCCCCC] xs:text-[13px] text-sm font-[500] border-2 border-[#191919] bg-[#141414] rounded-full gap-2 p-2 w-[80%] text-center justify-center">
            <PiShootingStarFill className="text-[#A291FD] text-[20px] rotate-[280deg]" />
            <h4>Year Expertise</h4>
          </div>
        </span>
      </motion.div>
    </div>
  );
};

export default YEO;
