import ProjectProcess from "./ProjectProcess/ProjectProcess.tsx";
import Skills from "./Skills/Skills.tsx";
import Projects from "./Projects/Projects.tsx";
import Portfolio from "./Portfolio/Portfolio.tsx";
import Stepper from "./Stepper/Stepper.tsx";
import Contact from "./Contact/Contact.tsx";

const ProjectsPage = () => {
  return (
    <div className="font-manrope 2xl:pt-[30px] pt-[20px] flex-col overflow-y-hidden h-[100%] 2xl:h-[100vh] text-white flex">
      <div className="2xl:flex 2xl:flex-row hidden justify-center gap-3">
        <div className="flex items-center gap-3 justify-center">
          <Skills />
          <div className="w-[50%]">
            <Projects />
          </div>
          <ProjectProcess />
        </div>
      </div>
      <div className=" w-full hidden  2xl:flex 2xl:flex-row items-center gap-3">
        <div className="xl:ml-[15px] mt-[5px]">
          <Portfolio />
        </div>
        <Stepper />
        <Contact />
      </div>{" "}
      <div className="2xl:hidden flex items-center flex-col">
        <Projects />
        <Skills />
        <div className="md:flex w-full justify-center md:flex-row flex flex-col items-center gap-3">
          <Portfolio />
        </div>
        <ProjectProcess />
        <Stepper />
        <Contact />
      </div>
    </div>
  );
};

export default ProjectsPage;
