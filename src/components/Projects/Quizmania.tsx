import ProjectsCard from "./ProjectsCard.tsx";
import arrow from "../../assets/arrows/curvy_arrow.svg";
import arrow2 from "../../assets/arrows/curvy_arrow_4.svg";
import arrow_2_light from "../../assets/arrows/arrow_2_light.svg";
import arrow_light from "../../assets/arrows/arrow_light.svg";
import quizmania from "../../assets/projects/quizmania.png";

const Quizmania = () => {
  return (
    <section>
      <ProjectsCard
        liveLink={"https://quizmania-phi.vercel.app/"}
        codeLink={"https://github.com/kieronthomas132/quizmania"}
        projectTitle={"Quizmania"}
        arrow={arrow}
        arrow2={arrow2}
        arrow_2_light={arrow_2_light}
        arrow_light={arrow_light}
        projectImage={quizmania}
        arrow2Position={
          "z-30 hidden md:flex xl:hidden pr-5 absolute md:left-[8%] bottom-[25%] lg:bottom-[25%]"
        }
        projectDescription={
          "Quizmania is a React project developed using Vite. With Quizmania, you can challenge yourself with quizzes sourced from the Open Trivia DB API. This project utilizes React Query for efficient data fetching, Context API to manage quiz options such as category, difficulty, and type, and Tailwind CSS for stylish and responsive design. Additionally, NextUI components enhance the user interface with pre-built elements like buttons."
        }
      />
    </section>
  );
};

export default Quizmania;
