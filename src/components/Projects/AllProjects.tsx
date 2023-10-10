import { reactProjects } from "./ProjectsArray.tsx";
import { FaGithub } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

const AllProjects = () => {
  return (
    <div className="text-white md:w-[80%] w-full mx-auto h-[100%] md:h-[100%]  relative font-inter py-[45px] md:pt-[280px] p-3">
      <h1 className="md:text-7xl text-4xl font-bold">
        Some of <span className="text-neutral-500"> my Projects</span>
        <div className="w-full h-[2px] mt-4 bg-neutral-700 " />
      </h1>
      <h3 className="mt-5 font-bold text-neutral-400 text-lg">
        Exhibition of the evolution of my skills as a frontend developer over
        the past year. The projects listed below are presented in order, from
        the most recent to the oldest, illustrating the evolution of my
        abilities and proficiency. These projects feature a variety of
        technologies including Tailwind CSS, Material UI, APIs etc and focus
        more on functionality with an aim to improve upon my development skills.
      </h3>
      <Link
        href="https://github.com/kieronthomas132"
        isExternal={true}
      >
        <Button className="mt-4 font-bold" variant="ghost" color="primary">
          To see all projects visit my Github <FaGithub className="text-lg" />
        </Button>
      </Link>
      {reactProjects.map((project, index) => (
        <Card
          className=" h-[500px] relative w-[100%] flex flex-col md:flex-row mx-auto bg-neutral-800 mt-[40px] text-white p-2"
          key={index}
        >
          <div className="flex h-[100%] flex-col justify-between">
            <CardHeader className="text-2xl ml-2 font-bold flex gap-2 items-center">
              <h1>{project.title}</h1>
            </CardHeader>
            <CardBody className="md:w-[100%] text-lg text-start text-neutral-400">
              <p>{project.description}</p>
              <div className="flex h-[100%] justify-end font-bold flex-col mt-5 gap-2 ">
                <Link
                  isExternal={true}
                  href={`${project.seeLive}`}
                  color={index % 2 === 0 ? "success" : "secondary"}
                >
                  <span>See Live Version</span>
                </Link>
                <Link
                  isExternal={true}
                  href={`${project.seeCode}`}
                  color={index % 2 === 0 ? "success" : "secondary"}
                >
                  <span>See Code</span>
                </Link>
              </div>
            </CardBody>
          </div>
          <div className="mt-[50px] w-[500px] hidden lg:flex">
            <Link isExternal={true} href={`${project.seeLive}`}>
              <Image
                src={project.img}
                className="max-w-[800px] h-[400px] object-cover ml-4 hover:scale-[1.05]"
              />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllProjects;
