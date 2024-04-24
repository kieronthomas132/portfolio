import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import HobbiesArray from "./HobbiesArray.tsx";
import HobbiesArray2 from "./HobbiesArray2.tsx";
import CardHeader from "../CardHeader/CardHeader.tsx";

const Hobbies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7 } }}
      className="xs:w-[95%] sm:w-[530px] w-full lg:mt-[10px] text-center h-[270px] p-3 rounded-3xl bg-[#101010] border-2 border-[#191919]"
    >
      <div className="flex gap-1 font-[500] text-[#999999] justify-center items-center">
        <CardHeader
          headerTitle={"My Hobbies"}
          headerSubHeading={"Interest Hall"}
          headerIcon={<FaHeart />}
        />
      </div>
      <HobbiesArray />
      <HobbiesArray2 />
    </motion.div>
  );
};

export default Hobbies;
