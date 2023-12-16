import Spotify from "./Crypto.tsx";
import Homeland from "./Homeland.tsx";
import { FaGithub } from "react-icons/fa";

const Projects = () => {

  return (
    <div
      id="projects"
      className=" w-full lg:h-[800px] md:h-[550px] xs:h-full xxs:h-full  text-white relative flex-col mt-[50px] md:text-start flex  "
    >
      <div className="w-[90%] md:w-[70%] mx-auto">
        <Spotify/>
        <Homeland/>
      </div>
      
      <div className="mt-[30px] lg:mt-[130px] md:text-start text-center relative z-10 md:flex md:flex-row flex flex-col items-center gap-2 w-[70%] mx-auto font-preahvihear">
        To see all projects visit my github!{" "}
        <a
          href="https://github.com/kieronthomas132?tab=repositories"
          target="_blank"
        >
          <FaGithub className="text-[#7127BA] hover:text-white text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
