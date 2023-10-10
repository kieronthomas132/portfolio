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
    <div className="relative mx-auto w-full p-3 text-white h-[100%] font-inter py-[45px] md:w-[80%] md:h-[100%] md:pt-[280px]">
      <h1 className="text-4xl font-bold md:text-7xl">
        Some of <span className="text-neutral-500"> my Projects</span>
        <div className="mt-4 w-full bg-neutral-700 h-[2px]" />
      </h1>
      <h3 className="mt-5 text-lg font-bold text-neutral-400">
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
          className="relative mx-auto flex flex-col bg-neutral-800 p-2 text-white h-[500px] w-[100%] mt-[40px] md:flex-row"
          key={index}
        >
          <div className="flex flex-col justify-between h-[100%]">
            <CardHeader className="ml-2 flex items-center gap-2 text-2xl font-bold">
              <h1>{project.title}</h1>
            </CardHeader>
            <CardBody className="text-start text-lg text-neutral-400 md:w-[100%]">
              <p>{project.description}</p>
              <div className="mt-5 flex flex-col justify-end gap-2 font-bold h-[100%]">
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
          <div className="hidden mt-[50px] w-[500px] lg:flex">
            <Link isExternal={true} href={`${project.seeLive}`}>
              <Image
                src={project.img}
                className="ml-4 object-cover max-w-[800px] h-[400px] hover:scale-[1.05]"
              />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllProjects;
