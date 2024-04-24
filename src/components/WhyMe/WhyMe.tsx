import { TbAtom2Filled } from "react-icons/tb";
import WhyMeArray1 from "./WhyMyArray1.tsx";
import { motion } from "framer-motion";
import WhyMeArray2 from "./WhyMeArray2.tsx";
import CardHeader from "../CardHeader/CardHeader.tsx";

const WhyMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7 } }}
      className=" xs:w-[95%]  sm:w-[530px]  2xl:w-[380px] lg:mt-[10px] text-center h-[270px] p-3 rounded-3xl bg-[#101010] relative border-2 border-[#191919]"
    >
      <CardHeader
        headerTitle={"Why Me?"}
        headerSubHeading={"Why Choose Me?"}
        headerIcon={<TbAtom2Filled />}
      />
      <WhyMeArray1 />
      <WhyMeArray2 />
    </motion.div>
  );
};

export default WhyMe;
