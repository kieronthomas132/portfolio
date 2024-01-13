import nexus from "../../assets/Nexus.png";
import { Tooltip } from "@nextui-org/react";
import { RiComputerLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import gradient from "../../assets/gradient.svg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Nexus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
      >
        <h1 className="mt-[10px] text-[28px] font-preahvihear">Nexus Blog</h1>
      </motion.div>
      <div className="flex flex-col items-cnter justify-center">
        <motion.div
          className="bg-white/5 font-poppins leading-7 rounded-lg font-[400] relative z-10 p-2 text-[14px] lg:w-[750px]  mt-[10px] text-[#CCD6F6] bg-opacity-30 backdrop-blur-md drop-shadow-lg"
          style={{
            transform: isInView ? "none" : "translateX(-400px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        >
          <h4>
            A blog application that utilises appwrite for database, user auth,
            storage and search queries to allow users to create an account,
            upload blogs, search for users and also like posts. Future
            improvements may include a bookmarking and friend feature to
            bookmark posts and add friends.
          </h4>
          <div className="flex items-center gap-[30px] text-[20px] mt-[10px]">
            <Tooltip content="see live!" color="secondary">
              <a
                href="https://nexus-blog-sigma.vercel.app"
                target="_blank"
                className="text-[#7127BA] hover:text-white"
              >
                <RiComputerLine />
              </a>
            </Tooltip>
            <Tooltip content="see code!" color="secondary">
              <a
                href="https://github.com/kieronthomas132/nexus_blog"
                target="_blank"
                className="text-[#7127BA] hover:text-white"
              >
                <FaCode />
              </a>
            </Tooltip>
          </div>
        </motion.div>
        <div className=" hidden lg:flex absolute right-[450px]">
          <img src={gradient} alt="gradient" />
        </div>
        <div className="absolute right-[230px]">
          <motion.img
            src={nexus}
            className=" rounded-md hidden lg:flex h-[250px] object-cover"
            alt="crypto"
            style={{
              transform: isInView ? "none" : "translateX(400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nexus;
