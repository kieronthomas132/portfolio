import { FaGithub } from "react-icons/fa";
import logo from "../../assets/generic/logo.png";
import {
  Tooltip,
  Link,
} from "@nextui-org/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [isSafari, setIsSafari] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsSafari(userAgent.includes('safari') && !userAgent.includes('chrome'));

  }, [])

  const arrowVariant = {
    hover: {
      rotate: -180,
    },
  };

  return (
    <div className="absolute z-20 cursor-pointer rounded-lg bg-neutral-800 bg-opacity-20 p-3 text-neutral-400 w-[60%] font-roboto top-[50px] left-[20%]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} className="w-[60px]" alt="logo" />
          </a>
          <div className="flex items-center gap-4">
            <a href="/projects">
              <h1 className="cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
                Projects
              </h1>
            </a>
            <a href="/about">
              <h1 className="cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
                About
              </h1>
            </a>
            <a href="/contact">
              <h1 className="cursor-pointer transition-all duration-500 ease-in-out hover:text-white">
                Contact
              </h1>
            </a>
            <div
              className={`flex transition-all ${isSafari ? "pt-[5px]" : ""}  duration-500 ease-in-out hover:text-white`}
              onMouseEnter={() => setIsHovered(true)}
            >
              <h1>More</h1>
              <motion.div
                variants={arrowVariant}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
              >
                <KeyboardArrowDownIcon />
              </motion.div>
            </div>
            <div
              className="absolute z-10 flex items-end left-[270px] h-[120px] -bottom-[80px]"
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <div>
                  <ol className="rounded-b-2xl bg-opacity-20 p-4 bg-neutral-950">
                    <a href='/techstack'>
                    <li className="hover:text-white">Tech Stack</li>
                    </a>
                    <a href='/development'>
                      <li className="hover:text-white">Professional Development</li>
                    </a></ol>
                </div>
              ) : null}
            </div>

          </div>
        </div>
        <Tooltip content="Github" color="secondary">
          <Link
            color="warning"
            isExternal
            href="https://github.com/kieronthomas132"
          >
            <h3 className="text-3xl hover:text-white">
              <FaGithub />
            </h3>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Nav;
