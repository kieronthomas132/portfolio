import profile from "../../../assets/Profile.png";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Portfolio = () => {
  const profileImage = [
    <p>
      <FaLinkedin />
    </p>,
    <p>
      <FaGithub />
    </p>,
    <p>
      <FaInstagram />
    </p>,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="bg-[#101010] overflow-hidden relative 2xl:h-[260px] h-[250px] 2xl:w-[380px] xl:w-[1000px] lg:w-[1010px] md:w-[60%] w-[95%] sm:h-[390px] mt-[10px] 2xl:mt-0 p-2 border-2 border-[#191919] rounded-3xl"
    >
      <div className="w-full z-20 relative flex flex-col items-center justify-center h-[100%]">
        <img alt="profilePic" src={profile} className="w-[20%]" />
        <div className="flex flex-col text-[25px] text-[#A7A7A7]  mt-[5px] items-center gap-2">
          <h3 className="text-[#E6E6E6] font-[600]">Kieron T</h3>
          <div className="flex gap-2 items-center">
            {profileImage.map((profile) => (
              <p className="bg-[#181818] p-2 rounded-lg border-2 border-[#212121]">
                {profile}
              </p>
            ))}
          </div>
          <a href="/">
            <button className=" w-[150px] border-4 border-[#212121] bg-[#A290FC] text-black p-2.5 rounded-xl text-sm">About Me</button>
          </a>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[#181818] w-[400px] from-5% to-80% to-[#101010] left-0 top-0 clip-path h-[260px]" />
      <div className="absolute top-0 clip-path-2 h-[260px] right-0 bg-gradient-to-b from-[#181818] w-[400px] from-5% to-80% to-[#101010] " />
    </motion.div>
  );
};

export default Portfolio;
