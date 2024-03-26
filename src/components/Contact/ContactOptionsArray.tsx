import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
export const contactOptions = [
  {
    icon: <MdEmail />,
    tooltip: "Email",
    link: import.meta.env.VITE_EMAIL,
  },
  {
    icon: <FaGithub />,
    tooltip: "Github",
    link: import.meta.env.VITE_GITHUB,
  },
  {
    icon: <FaLinkedinIn />,
    tooltip: "Linkedin",
    link: import.meta.env.VITE_LINKEDIN
  },
];
