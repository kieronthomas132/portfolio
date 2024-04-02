import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const ProjectsCard = ({
  projectImage,
  projectName,
  projectDescription,
  projectType,
}: {
  projectImage: string;
  projectName: string;
  projectDescription: string;
  codeLink: string;
  projectType: string;
}) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 200, damping: 10 },
      }}
      href={`/project/${projectName.toLowerCase()}`}
      className="w-full md:w-[calc(33.33% - 30px)] lg:w-[calc(33.33% - 30px)] "
    >
      <section className="2xl:w-[440px] w-auto mx-auto rounded-t-lg hover:shadow-[#C0A790] hover:shadow-xl border-2 border-[#623D2F]">
        <div className="bg-[#623D2F] h-[200px] p-10 flex items-center justify-center">
          <img className="w-[130px]" src={projectImage} alt={projectName} />
        </div>
        <div className="w-[90%] mx-auto">
          <h1 className="text-[17px] mt-4 font-[700]">{projectType}</h1>
          <h1 className="text-[25px] mb-4 mt-3 font-[500]">{projectName}</h1>
          <p className="font-[400] text-[17px]">{projectDescription}</p>
        </div>
        <div className="w-[90%] mx-auto mt-[40px] bg-[#83604F] h-[2px]" />
        <div className="w-[90%] flex items-center justify-between mx-auto mt-[40px] font-[500] mb-[20px] text-[17px]">
          <a>View Project</a>
          <IoMdArrowForward className="text-[25px]" />
        </div>
      </section>
    </motion.a>
  );
};

export default ProjectsCard;
