import { Card, CardHeader, Image } from "@nextui-org/react";
import TechStack from "../../assets/techstack.png";
import Project_Collage from "../../assets/project_collage.svg";
import Me from "../../assets/me.png";
import Development from "../../assets/goal.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GetToKnow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="text-white md:w-[83%] w-[100%] md:h-[1200px] pt-[80px] mx-auto z-10 relative font-inter p-3">
      <h1 className="text-4xl md:ml-5 text-start font-bold">Get To Know Me</h1>
      <div
        ref={ref}
        className="grid md:grid-cols-2 grid-cols-1 md:p-5 gap-5 w-[100%] items-center text-center mt-5"
      >
        <motion.a
          href="/about"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Card className="bg-neutral-800 text-white h-[500px]">
            <CardHeader className="justify-center h-[450px] mt-10">
              <div>
                <h1 className="text-xl font-bold ">About Me</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  Get to know who I am
                </h3>
                <Image
                  src={Me}
                  className="rotate-12 hover:rotate-0 hover:scale-[1] scale-[0.9]"
                />
              </div>
            </CardHeader>
          </Card>
        </motion.a>
        <motion.a
          href="/projects"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        >
          <Card className="bg-neutral-800 relative text-white h-[500px]">
            <CardHeader className="justify-center h-[100px] mt-10">
              <div>
                <h1 className="text-xl font-bold ">Passion Projects</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  My professional passions and key projects
                </h3>
                <div className="absolute bottom-0 w-[800px] hover:scale-[1.05] transition-all ease-in-out duration-200">
                  <Image src={Project_Collage} className="" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.a>
        <motion.a
          href="/techstack"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
          }}
        >
          <Card className="bg-neutral-800 relative text-white h-[500px]">
            <CardHeader className="justify-center h-[100px] mt-10">
              <div>
                <h1 className="text-xl font-bold ">Tech Stack</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  Tools and Software I use for development
                </h3>
                <div className="absolute bottom-0 -left-20 w-[800px] hover:scale-[1.05] transition-all ease-in-out duration-200">
                  <Image src={TechStack} className="" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.a>
        <motion.a
          href="/development"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
        >
          <Card className="bg-neutral-800 relative text-white h-[500px]">
            <CardHeader className="justify-center h-[100px] mt-10">
              <div>
                <h1 className="text-xl font-bold ">Professional Development</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  My ongoing learning and professional growth
                </h3>
                <div className="absolute bottom-0 left-5 md:left-[70px] w-[800px] hover:scale-[1.05] transition-all ease-in-out duration-200">
                  <Image src={Development} className=" w-[450px]" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.a>
      </div>
    </div>
  );
};

export default GetToKnow;
