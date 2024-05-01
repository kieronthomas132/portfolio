import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import CardHeader from "../CardHeader/CardHeader.tsx";
import OnlineListItem from "./OnlineListItem.tsx";
const Online = () => {

  const onlineOptions = [
    {
      option: "@kieron.thomas",
      icon: <FaGithub />,
      link: "https://github.com/kieronthomas132?tab=repositories",
    },
    {
      option: "@kieron.thomas",
      icon: <FaLinkedin />,
      link: "http://linkedin.com/in/kieron-thomas-aa6038266/",
    },
    {
      option: "@kieron.thomas",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/kieronthomass?igsh=dWR0MHM5eG8wZWdw&utm_source=qr",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.85 } }}
      className="bg-card_background mt-[10px] p-2 w-[480px] mr-3 h-[350px] 2xl:w-[260px] 2xl:mt-[10px] rounded-3xl border-2 border-border"
    >
      <CardHeader
        headerTitle={"Where Am I Online?"}
        headerSubHeading={"Get In Touch"}
        headerIcon={<MdSunny />}
      />
      <div className="w-[100%] mx-auto rounded-xl mt-3">
        <ul>
          {onlineOptions.map(({ link, icon, option }, index) => (
            <a href={link} target="_blank">
              <OnlineListItem
                icon={icon}
                option={option}
                index={index}
              />
            </a>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Online;
