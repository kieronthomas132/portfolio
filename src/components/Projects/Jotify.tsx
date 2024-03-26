import ProjectsCard from "./ProjectsCard.tsx";
import arrow from "../../assets/arrows/curvy_arrow.svg";
import arrow2 from "../../assets/arrows/curvy_arrow_4.svg";
import arrow_2_light from "../../assets/arrows/arrow_2_light.svg";
import arrow_light from "../../assets/arrows/arrow_light.svg";
import jotify from "../../assets/projects/jotify_1.png";

const Jotify = () => {
  return (
    <section>
      <ProjectsCard
        liveLink={"https://jotify-nine.vercel.app/login"}
        codeLink={"https://github.com/kieronthomas132/Jotify"}
        projectTitle={"Jotify"}
        arrow={arrow}
        arrow2={arrow2}
        arrow_2_light={arrow_2_light}
        arrow_light={arrow_light}
        projectImage={jotify}
        arrow2Position={
          "z-30 hidden md:flex xl:hidden pr-5 absolute md:left-[8%] bottom-[25%] lg:bottom-[25%]"
        }
        projectDescription={
          "This is a React application built using Vite for fast development and optimized builds. It provides a simple note-taking interface for users with the added feature of categorizing notes. The application utilizes Appwrite for user authentication, signup, and login functionalities. It also leverages NextUI for UI components, Tanstack Query for efficient data fetching, and Redux for state management."
        }
      />
    </section>
  );
};

export default Jotify;
