import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

const ProjectLayoutHeader = ({
  name,
  description,
  codeLink,
  liveLink,
  image,
}: {
  name: string;
  description: string;
  codeLink: string;
  liveLink: string;
  image: string;
}) => {
  return (
    <div className="bg-[#C0A790] items-center lg:grid grid grid-cols-1 lg:grid-cols-2 h-[500px]">
      <div className="lg:w-[60%] text-center mt-10 lg:mt-0 md:text-start text-[#623D2F] mx-auto">
        <motion.h3
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[20px] tracking-tight font-[500]"
        >
          Project Details
        </motion.h3>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
          className="my-5 text-[35px] font-[600]"
        >
          {name}
        </motion.h1>
        <motion.h5
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
          className="leading-7 w-[80%] md:w-full mx-auto font-[500]"
        >
          {description}
        </motion.h5>

        <div className="md:flex md:flex-row flex flex-col mt-5 md:justify-start justify-center items-center gap-5 md:gap-10">
          <a href={codeLink} target="_blank">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 1 } }}
              className="flex items-center gap-4"
            >
              <IoMdArrowForward className="text-[40px] rounded-full p-2 border border-[#623D2F]" />
              View on Github
            </motion.span>
          </a>
          <a href={liveLink} target="_blank">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 1.1 } }}
              className="flex items-center gap-4"
            >
              <IoMdArrowForward className="text-[40px] rounded-full p-2 border border-[#623D2F]" />
              View Website
            </motion.span>
          </a>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <motion.img
          initial={{ x: 140, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.8 } }}
          className="lg:w-[300px] w-[20%]"
          src={image}
          alt={name}
        />
      </div>
    </div>
  );
};

export default ProjectLayoutHeader;
