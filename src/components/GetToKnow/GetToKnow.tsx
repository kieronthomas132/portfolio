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
    <div className="relative z-10 mx-auto p-3 text-white w-[100%] pt-[80px] font-inter md:w-[83%] md:h-[1200px]">
      <h1 className="text-start text-4xl font-bold md:ml-5">Get To Know Me</h1>
      <div
        ref={ref}
        className="mt-5 grid grid-cols-1 items-center gap-5 text-center w-[100%] md:grid-cols-2 md:p-5"
      >
        <motion.a
          href="/about"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Card className="bg-neutral-800 text-white h-[500px]">
            <CardHeader className="mt-10 justify-center h-[450px]">
              <div>
                <h1 className="text-xl font-bold">About Me</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  Get to know who I am
                </h3>
                <Image
                  src={Me}
                  className="rotate-12 scale-[0.9] hover:scale-[1] hover:rotate-0"
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
          <Card className="relative bg-neutral-800 text-white h-[500px]">
            <CardHeader className="mt-10 justify-center h-[100px]">
              <div>
                <h1 className="text-xl font-bold">Passion Projects</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  My professional passions and key projects
                </h3>
                <div className="absolute bottom-0 transition-all duration-200 ease-in-out w-[800px] hover:scale-[1.05]">
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
          <Card className="relative bg-neutral-800 text-white h-[500px]">
            <CardHeader className="mt-10 justify-center h-[100px]">
              <div>
                <h1 className="text-xl font-bold">Tech Stack</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  Tools and Software I use for development
                </h3>
                <div className="absolute bottom-0 -left-20 transition-all duration-200 ease-in-out w-[800px] hover:scale-[1.05]">
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
          <Card className="relative bg-neutral-800 text-white h-[500px]">
            <CardHeader className="mt-10 justify-center h-[100px]">
              <div>
                <h1 className="text-xl font-bold">Professional Development</h1>
                <h3 className="text-lg font-semibold text-neutral-400">
                  My ongoing learning and professional growth
                </h3>
                <div className="absolute bottom-0 left-5 transition-all duration-200 ease-in-out w-[800px] hover:scale-[1.05] md:left-[70px]">
                  <Image src={Development} className="w-[450px]" />
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
