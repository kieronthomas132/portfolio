import ProjectLayoutHeader from "./ProjectLayoutHeader.tsx";
import ProjectLayoutProjectOverview from "./ProjectLayoutProjectOverview.tsx";
import { motion } from "framer-motion";
const ProjectLayout = ({
  description,
  image,
  name,
  codeLink,
  liveLink,
  featureName1,
  featureDescription1,
  featureName2,
  featureDescription2,
  techStack,
}: {
  description: string;
  image: string;
  name: string;
  codeLink: string;
  liveLink: string;
  featureName1: string;
  featureDescription1: string;
  featureName2: string;
  featureDescription2: string;
  techStack: { tech: string }[];
}) => {

  return (
    <motion.section

      className="w-[100%] mx-auto mt-[70px]"
    >
      <ProjectLayoutHeader
        name={name}
        description={description}
        liveLink={liveLink}
        codeLink={codeLink}
        image={image}
      />
      <ProjectLayoutProjectOverview
        name={name}
        description={description}
        featureName1={featureName1}
        featureName2={featureName2}
        featureDescription1={featureDescription1}
        featureDescription2={featureDescription2}
        techStack={techStack}
      />
    </motion.section>
  );
};

export default ProjectLayout;
