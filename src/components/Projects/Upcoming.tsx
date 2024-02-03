import ProjectsCard from "./ProjectsCard.tsx";
import arrow from "../../assets/arrows/curvy_arrow.svg";
import arrow2 from "../../assets/arrows/curvy_arrow_4.svg";
import arrow_2_light from "../../assets/arrows/arrow_2_light.svg";
import arrow_light from "../../assets/arrows/arrow_light.svg";
import ocean from "../../assets/projects/Ocean.png";
import {useTheme} from "next-themes";

const Upcoming = () => {
    const {theme} = useTheme()
  return (
    <section className="start mx-auto">
      <h3 className={`text-[25px] ${theme === "dark" ? "text-white" : "text-[#289DE3]"} font-semibold underline-offset-8 underline ml-[60px]`}>
        Project in Development
      </h3>
      <ProjectsCard
        projectTitle={"Ocean Social Media"}
        arrow={arrow}
        arrow2={arrow2}
        arrow_2_light={arrow_2_light}
        arrow_light={arrow_light}
        projectImage={ocean}
        arrow2Position={
          "z-30 hidden md:flex xl:hidden pr-5 absolute md:left-[8%] bottom-[25%] lg:bottom-[25%]"
        }
        projectDescription={
          "I'm developing Ocean, a social media app using Appwrite for secure backend storage and Tanstack Query for efficient data handling. The frontend, designed with NextUI and Tailwind CSS, promises a polished user experience. I am expecting to implement more features into this project such as friends and messaging to allow users to add friends and send messages in the near future."
        }
      />
    </section>
  );
};

export default Upcoming;
