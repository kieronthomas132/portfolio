import { motion } from "framer-motion";
import CardHeader from "../../CardHeader/CardHeader.tsx";
import { MdShoppingBag } from "react-icons/md";
import Nexus from "../../../assets/nexus_logo.svg";
import Quizmania from "../../../assets/quizmania_logo.png";
import Jotify from "../../../assets/notes.png";
import Crypto from "../../../assets/crypto.png";
import ProjectItem from "./ProjectItem.tsx";

const Projects = () => {
  const projects = [
    {
      title: "Nexus",
      img: Nexus,
      type: "Blog Application",
      link: "https://nexus-blog-sigma.vercel.app/",
    },
    {
      title: "Jotify",
      img: Jotify,
      type: "Notes Application",
      link: "https://jotify-nine.vercel.app/",
    },
    {
      title: "Quizmania",
      img: Quizmania,
      type: "Quiz Application",
      link: "https://quizmania-phi.vercel.app/",
    },
    {
      title: "Crypto",
      img: Crypto,
      type: "CryptoCurrency Converter",
      link: "http://crypto-currency-livid.vercel.app",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="bg-[#101010] xl:h-[540px] p-2 w-[95%] md:w-[60%] lg:w-[1010px] 2xl:w-full border-2 border-[#191919] rounded-3xl"
    >
      <CardHeader
        headerTitle={"My Works"}
        headerSubHeading={"Recent & Featured Projects"}
        headerIcon={<MdShoppingBag />}
      />
      <ul className="md:grid md:grid-cols-2 text-center relative items-center h-[80%] gap-9 justify-center mt-[20px]">
        {projects.map(({ link, title, type, img }, index) => (
          <ProjectItem
            link={link}
            title={title}
            type={type}
            img={img}
            index={index}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default Projects;
