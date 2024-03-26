import jotify from "../../assets/notes.png";
import nexus from "../../assets/nexus_logo.svg";
import quizmania from "../../assets/quizmania.png";

export const projectsArray = [
    {
        name: "Jotify",
        description:
            "Notes application with categories, filtering and user auth.",
        image: jotify,
        liveLink: "https://jotify-nine.vercel.app",
        codeLink: "https://github.com/kieronthomas132/Jotify",
        featureName1: "Categories",
        featureDescription1:
            "This application offers a wide range of categories for users to choose from, including areas such as Personal, Health, Shopping, and more. This comprehensive selection allows users to efficiently filter their notes based on these categories, enhancing organization and accessibility within the platform.",
        featureName2: "User Authentication",
        featureDescription2:
            "This application utilises Appwrite, an end-to-end service offering authentication of users and storage capabilities. By integrating Appwrite, this platform ensures secure user authentication and efficient data storage, providing a reliable foundation for seamless user experiences and streamlined data management.",
        techStack: [
            {
                tech: "React"
            },
            {
                tech: "Tailwind CSS"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "Appwrite",
            },
            {
                tech: "NextUI"
            },
            {
                tech: "Tanstack Query"
            },
            {
                tech: "Redux"
            }
        ]
    },
    {
        name: "Nexus",
        description:
            "Blog application with images, comments, replies, user auth and user search.",
        image: nexus,
        liveLink: "https://nexus-blog-sigma.vercel.app/",
        codeLink: "https://github.com/kieronthomas132/nexus_blog",
        featureName1: "Post Creation and Interaction",
        featureDescription1:
            "Nexus allows users to create and publish posts. Users can engage with posts by leaving comments, replies and even liking posts. Enhancing the overall blogging experience.",
        featureName2: "User Authentication",
        featureDescription2:
            "This application utilises Appwrite, an end-to-end service offering authentication of users and storage capabilities. By integrating Appwrite, this platform ensures secure user authentication and efficient data storage, providing a reliable foundation for seamless user experiences and streamlined data management.",
        techStack: [
            {
                tech: "React"
            },
            {
                tech: "Appwrite"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "Redux"
            },
            {
                tech: "Tanstack Query"
            },
            {
                tech: "NextUI"
            },
            {
                tech: "Tailwind CSS"
            }
        ]
    },
    {
        name: "Quizmania",
        description:
            "A quiz application to test your knowledge on a variety of subjects.",
        image: quizmania,
        liveLink: "https://quizmania-phi.vercel.app/",
        codeLink: "https://github.com/kieronthomas132/quizmania",
        featureName1: "Customizable Quiz Parameters",
        featureDescription1:
            "Quizmania offers users the flexibility to customize their quiz-taking experience. Users can specify the number of questions they want to answer and choose the type of questions they prefer, such as multiple-choice or true or false. This feature empowers users to tailor quizzes to their preferences and learning goals.",
        featureName2: " Scoring System",
        featureDescription2:
            "Quizmania provides users with instant score on their quiz performance through an scoring system.",
        techStack: [
            {
                tech: "React"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "Tanstack Query"
            },
            {
                tech: "Context API"
            },
            {
                tech: "Open Trivia DB"
            }
        ]
    },
];