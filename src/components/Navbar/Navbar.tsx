import Logo from "../../assets/Logo.svg";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";
const Navbar = () => {
  const navbarOptions = [
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Connect",
      link: "#connect",
    },
    {
      label: "Github",
      link: "https://github.com/kieronthomas132?tab=repositories",
      icon: <FaGithub />,
    },
  ];
  return (
    <nav className="bg-[#1A0A2E] h-[80px] font-inter flex flex-col justify-center text-white">
      <div className="flex justify-around items-center p-2">
        <img src={Logo} className="w-[35px]" alt="logo" />
        <div>
          <ul className="flex items-center text-sm gap-[50px] md:gap-[80px]">
            {navbarOptions.map((nav, index) => (
              <li key={index} >
                <a href={nav?.link}>
                  <h1>{nav?.title}</h1>
                </a>
                <a href={nav?.link} target="_blank">
                  <Tooltip content={nav?.label} color="secondary">
                    <h3 className="text-2xl">{nav?.icon}</h3>
                  </Tooltip>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
