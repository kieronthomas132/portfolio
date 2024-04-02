import ProjectsCard from "./ProjectsCard.tsx";
import jotify from "../../assets/projects/jotify_1.png";
const Jotify = () => {
  return (
    <section>
      <ProjectsCard
        codeLink={"https://github.com/kieronthomas132/Jotify"}
        projectType="Notes Application"
        projectName={"Jotify"}
        projectImage={jotify}
        projectDescription={
          "This is a React application built using Vite for fast development and optimized builds. It provides a simple note-taking interface for users with the added feature of categorizing notes. The application utilizes Appwrite for user authentication, signup, and login functionalities. It also leverages NextUI for UI components, Tanstack Query for efficient data fetching, and Redux for state management."
        }
      />
    </section>
  );
};

export default Jotify;
