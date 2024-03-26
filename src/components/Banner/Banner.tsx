import { motion } from "framer-motion";
import {
  bannerHobbyOptions,
  bannerTechOptions,
} from "./BannerOptionsArrays.tsx";

const Banner = () => {
  return (
    <motion.div
      initial={{ width: "0%", height: "60px" }}
      animate={{ width: "100%", height: "60px", transition: { duration: 0.5 } }}
      className="relative bg-[#B6A494] text-white top-[100px] rotate-2 overflow-hidden z-10"
      style={{ left: 0, right: 0 }}
    >
      <motion.div
        className="flex justify-center w-full p-4 absolute bottom-0"
        initial={{ x: "100%", display: "none" }}
        animate={{ x: "-100%", display: "block" }}
        transition={{
          delay: 0.5,
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <div className="flex items-center gap-[40px]">
          <div>
            {bannerTechOptions.map((item, index) => (
              <span key={index} className="text-[21px] font-[600] mr-2">
                {item.option} |
              </span>
            ))}
          </div>
          <div>
            {bannerHobbyOptions.map((item, index) => (
              <span key={index} className="text-[21px] font-[600] mr-2">
                {item.option} |
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
