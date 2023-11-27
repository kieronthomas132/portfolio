import image from "../../assets/generic/image.svg";
import { Button } from "@nextui-org/react";
import Resume from '../../assets/Kieron_Thomas_Resume.pdf'
const Header = () => {

  const download = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = "Kieron_Thomas_Resume";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="relative z-10 p-3 text-white h-[500px] font-inter md:h-[700px] md:pt-[150px]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-[30px] md:flex-row">
        <div className="flex flex-col gap-2 text-center text-5xl font-bold md:text-7xl">
          <h1>
            <span className="text-neutral-500">I'm</span> Kieron Thomas
          </h1>
          <p className="text-xl font-medium text-neutral-300 md:w-[600px] md:text-start">
            Crafting Dynamic Web Experiences: Eager to Learn, Ready to Grow -
            Your Junior React Developer
          </p>
          <div className="mt-5 flex flex-col gap-3 md:flex-row">
              <Button
                  onClick={() => download(Resume)}
                  className="flex w-full hover:scale-[1.05] md:w-[150px]"
                  color="secondary"
                  variant="shadow"
              >
                Project Resumé
              </Button>
            <a href="/contact">
              <Button
                className="mt-2 flex w-full hover:scale-[1.05] md:w-[100px] md:mt-0"
                color="secondary"
                variant="ghost"
              >
                Get in touch
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden text-center lg:block">
          <img src={image} className="w-[450px]" alt="header_image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
