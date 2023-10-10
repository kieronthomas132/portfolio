import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import {
  Tooltip,
  Link,
} from "@nextui-org/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const arrowVariant = {
    hover: {
      rotate: -180,
    },
  };

  return (
    <div className="w-[60%] z-20  font-roboto text-neutral-400  cursor-pointer absolute top-[50px] p-3 bg-opacity-20  rounded-lg left-[20%] bg-neutral-800 ">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <a href="/">
            <img src={logo} className="w-[60px]" alt="logo" />
          </a>
          <div className="flex items-center gap-4">
            <a href="/projects">
              <h1 className="hover:text-white transition-all ease-in-out duration-500 cursor-pointer">
                Projects
              </h1>
            </a>
            <a href="/about">
              <h1 className="hover:text-white transition-all ease-in-out duration-500 cursor-pointer">
                About
              </h1>
            </a>
            <a href="/contact">
              <h1 className="hover:text-white transition-all ease-in-out duration-500 cursor-pointer">
                Contact
              </h1>
            </a>
            <div
              className="flex hover:text-white transition-all ease-in-out duration-500"
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
              className="absolute left-[270px] z-10 h-[120px] -bottom-[80px] flex items-end"
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <div>
                  <ol className="bg-neutral-950 rounded-b-2xl bg-opacity-20 p-4">
                    <a href='/techstack'>
                    <li className="hover:text-white">Tech Stack</li>
                    </a>
                    <a href='/development'>
                      <li className="hover:text-white">Professional Development</li>
                    </a></ol>
                </div>
              ) : null}
            </div>

            <div></div>
          </div>
        </div>
        <Tooltip content="Github" color="secondary">
          <Link
            color="warning"
            isExternal
            href="https://github.com/kieronthomas132"
          >
            <h3 className="hover:text-white text-3xl">
              <FaGithub />
            </h3>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Nav;
