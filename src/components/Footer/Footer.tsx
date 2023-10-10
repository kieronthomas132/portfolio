import logo from "../../assets/generic/logo.png";
import { LiaSmileWinkSolid } from "react-icons/lia";
import { Image } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="relative z-10 mx-auto p-2 text-white font-inter h-[500px] w-[100%] md:h-[100%]">
      <div className="bg-neutral-600 opacity-50 w-[100%] h-[2.5px]" />
      <div className="mx-auto flex flex-col items-center p-4 w-[80%] h-[400px] md:flex-row md:justify-between">
        <div className="text-sm font-bold italic text-neutral-400 h-[300px]">
          <Image src={logo} className="w-[150px]" />
          <span className="flex items-center gap-1">
            <h2>Thank you for coming by!</h2>
            <LiaSmileWinkSolid style={{ fontSize: "1.8rem" }} />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center h-[100%] w-[400px]">
          <h1 className="font-bold text-white">Links</h1>
          <ol className="flex flex-col gap-4 text-neutral">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/techstack">Tech Stack</a>
            </li>
            <li>
              <a href="/development">Professional Development</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Footer;
