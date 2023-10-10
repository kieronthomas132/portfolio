import logo from "../../assets/logo.png";
import { LiaSmileWinkSolid } from "react-icons/lia";
import { Image } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="text-white z-10 font-inter h-[500px] md:h-[100%] relative p-2 w-[100%] mx-auto">
      <div className="w-[100%] h-[2.5px] bg-neutral-600 opacity-50" />
      <div className="w-[80%] items-center md:justify-between md:flex-row flex-col flex h-[400px] mx-auto p-4">
        <div className="h-[300px] text-sm italic text-neutral-400 font-bold ">
          <Image src={logo} className="w-[150px]" />
          <span className="flex items-center gap-1">
            <h2>Thank you for coming by!</h2>
            <LiaSmileWinkSolid style={{ fontSize: "1.8rem" }} />
          </span>
        </div>
        <div className=" h-[100%] w-[400px] gap-2 flex-col flex items-center justify-center text-center">
          <h1 className="text-white font-bold">Links</h1>
          <ol className="text-neutral flex flex-col gap-4">
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
