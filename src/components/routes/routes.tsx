import Header from "../Header/Header.tsx";
import Projects from "../Projects/Projects.tsx";
import GetToKnow from "../GetToKnow/GetToKnow.tsx";
import About from "../About/About.tsx";
import AllProjects from "../Projects/AllProjects.tsx";
import TechStack from "../TechStack/TechStack.tsx";
import ProfessionalDevelopment from "../ProfessionalDevelopment/ProfessionalDevelopment.tsx";
import Contact from "../Contact/Contact.tsx";

export   const routes = [
    {
        path: "/",
        element: <Header />,
    },
    {
        path: "/",
        element: <Projects />,
    },
    {
        path: "/",
        element: <GetToKnow />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <AllProjects />,
    },
    {
        path: "/techstack",
        element: <TechStack />,
    },
    {
        path: "/development",
        element: <ProfessionalDevelopment />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
];