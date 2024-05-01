import { MdShoppingBag } from "react-icons/md";
import { motion } from "framer-motion";
import CardHeader from "../CardHeader/CardHeader.tsx";
import Quizmania from "../../assets/quizmania_logo.png";
import Nexus from "../../assets/nexus_logo.svg";
import Jotify from "../../assets/notes.png";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";

const Projects = () => {
  const items = [
    {
      projectImg: Nexus,
    },
    {
      projectImg: Quizmania,
    },
    {
      projectImg: Jotify,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.6 } }}
      className="p-2 overflow-hidden relative lg:mt-[10px] sm:w-[530px] xs:w-[95%] lg:w-[530px] text-white text-center h-[265px] bg-card_background border-2 border-border 2xl:w-[380px] rounded-3xl"
    >
      <CardHeader
        headerTitle={"Projects"}
        headerSubHeading={"Works Gallery"}
        headerIcon={<MdShoppingBag />}
      />
      <SliderComponent items={items} settings={settings} />
      <a
        href="/projects"
        className="h-[6%] flex text-center justify-center items-end md:w-[80%] mx-auto"
      >
        <button className="absolute bottom-6 bg-icon text-black w-[150px] p-2.5 border-[7px] border-projects_border rounded-2xl">
          View Works
        </button>
      </a>
    </motion.div>
  );
};

export default Projects;
