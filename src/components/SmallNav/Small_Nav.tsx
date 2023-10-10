import { AiFillHome } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import { VscProject } from "react-icons/vsc";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SpeedDialMenu from "./SpeedDialMenu.tsx";
const Small_Nav = () => {

  const navOptions = [
    {
      title: "Home",
      icon: <AiFillHome />,
      link: "/",
    },
    { title: "Projects",
      icon: <VscProject/>,
      link: '/projects'
    },
    {
      title: "Contact",
      icon: <MarkunreadIcon/>,
      link: "/contact"
    }
  ];

  return (
    <div className="fixed bottom-5 left-0 right-0 p-5 z-20">
      <div className="text-white w-[100%] backdrop-blur-lg bg-opacity-40 rounded-lg bg-neutral-900 ">
        <div
          className="flex items-center justify-evenly gap-2 p-2"
        >
          {navOptions.map((option) => (
              <a href={option.link} key={option.title}>
                <Tooltip content={option.title}>
                  <div className='text-2xl w-[50px] bg-neutral-600 flex hover:bg-opacity-100 cursor-pointer justify-center p-2 rounded-md bg-opacity-60'>
                    {option.icon}
                  </div>
                </Tooltip>
              </a>
          ))}
          <div className='xxs:p-3 xs:p-0.5 sm:p-0'>
            <SpeedDialMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Small_Nav;
