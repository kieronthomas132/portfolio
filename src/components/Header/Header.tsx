import image from "../../assets/image.svg";
import { Button } from "@nextui-org/react";
import Resume from '../../assets/resume/Kieron-Thomas-Resume.pdf'
const Header = () => {
  return (
    <div className="text-white  md:h-[700px] h-[500px] z-10 relative font-inter md:pt-[150px] p-3">
      <div className="flex flex-col md:flex-row justify-center gap-[30px] items-center w-full h-full">
        <div className="text-center flex flex-col gap-2 text-5xl md:text-7xl font-bold">
          <h1>
            <span className="text-neutral-500">I'm</span> Kieron Thomas
          </h1>
          <p className="text-xl md:w-[600px] text-neutral-300 font-medium md:text-start">
            Crafting Dynamic Web Experiences: Eager to Learn, Ready to Grow -
            Your Junior React Developer
          </p>
          <div className="flex flex-col md:flex-row mt-5 gap-3 ">
            <a
              href={Resume}
              download="Kieron-Thomas-Resume"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="w-full md:w-[150px] flex hover:scale-[1.05]"
                color="secondary"
                variant="shadow"
              >
                Project Resumé
              </Button>
            </a>
            <a href="/contact">
              <Button
                className="w-full md:w-[100px] flex mt-2 md:mt-0 hover:scale-[1.05]"
                color="secondary"
                variant="ghost"
              >
                Get in touch
              </Button>
            </a>
          </div>
        </div>
        <div className="text-center hidden lg:block">
          <img src={image} className="w-[450px]" alt="header_image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
