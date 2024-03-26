import {useParams} from "react-router";
import ProjectLayout from "./ProjectLayout.tsx";
import {projectsArray} from './ProjectsArray.tsx'

const Project = () => {
    const {name: projectName} = useParams();

    const projectInfo = projectsArray.find(
        (project) => project.name.toLowerCase() === projectName,
    );

    if (!projectInfo) {
        return <div>Project not found</div>;
    }

    return (
        <ProjectLayout
            description={projectInfo.description}
            name={projectInfo.name}
            image={projectInfo.image}
            liveLink={projectInfo.liveLink}
            codeLink={projectInfo.codeLink}
            featureName1={projectInfo.featureName1}
            featureDescription1={projectInfo.featureDescription1}
            featureName2={projectInfo.featureName2}
            featureDescription2={projectInfo.featureDescription2}
            techStack={projectInfo.techStack}
        />
    );
};

export default Project;
