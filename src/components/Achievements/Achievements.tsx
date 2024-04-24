import { motion } from "framer-motion";
import CardHeader from "../CardHeader/CardHeader";
import { PiMedalBold } from "react-icons/pi";
const Achievements = () => {

  const achievements = [
    {
      achievement: "1st Class Honours Degree in Biomedical Science.",
    },
    {
      achievement: "Most Dedicated Member of Human Biology Society.",
    },
    {
      achievement: "Member of the Programming Society",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.9 } }}
      className="lg:mt-[10px] lg:mr-5 bg-[#101010] xs:w-[95%] sm:w-[540px] lg:w-[580px] md:h-[350px] mb-5 2xl:w-full flex flex-col p-2 rounded-3xl xl:h-[350px] border-2 border-[#191919]"
    >
      <CardHeader
        headerTitle={"Achievements"}
        headerSubHeading={"What Am I Proud Of?"}
        headerIcon={<PiMedalBold />}
      />
      <ul>
        {achievements.map(({ achievement }, index) => (
          <li
            key={index}
            className="p-3 mt-3 bg-[#191919] my-6 text-[14px] text-[#919191] rounded-lg border-2 border-[#212121]"
          >
            {achievement}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Achievements;
