import nexus from "../../assets/projects/nexus.png";
import arrow from "../../assets/arrows/curvy_arrow.svg";
import arrow2 from "../../assets/arrows/curvy_arrow_2.svg";
import arrow_light from "../../assets/arrows/arrow_light.svg"
import ProjectsCard from "./ProjectsCard.tsx";
import arrow_2_light from "../../assets/arrows/arrow_light_2.svg";

const Nexus = () => {
  return (
    <section>
      <ProjectsCard
        liveLink={"https://nexus-blog-sigma.vercel.app/"}
        codeLink={"https://github.com/kieronthomas132/nexus_blog"}
        projectImage={nexus}
        projectTitle={"Nexus"}
        arrow={arrow}
        arrow2={arrow2}
        arrow_2_light={arrow_2_light}
        arrow_light={arrow_light}
        projectDescription={
          "           This project is a modern Blog Application built with React Vite\n" +
          "              for the frontend, NextUI for UI components, and React Query for\n" +
          "              efficient data fetching. Using end-to-end backend service powered\n" +
          "              by Appwrite, users can undergo authentication, post creation,\n" +
          "              liking, commenting, and user search functionality. Users can\n" +
          "              personalize their profiles by updating profile pictures and bios,\n" +
          "              fostering a personalized and interactive community experience. The\n" +
          "              project is styled using Tailwind CSS, ensuring a sleek and\n" +
          "              responsive design. ✍🏼"
        }
        arrow2Position={
          "z-30 hidden md:flex xl:hidden pr-5 absolute md:right-[5%] md:top-[35%] lg:top-[32%] lg:right-[10%] xl:top-[35%] xl:right-[12%]"
        }
      />
    </section>
  );
};

export default Nexus;
