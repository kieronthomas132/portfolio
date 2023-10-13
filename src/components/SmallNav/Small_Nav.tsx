import { AiFillHome } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import { VscProject } from "react-icons/vsc";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import MenuIcon from "@mui/icons-material/Menu";
import SmallModal from './SmallModal.tsx'
import {useDisclosure} from "@nextui-org/react";

const Small_Nav = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const navOptions = [
    {
      title: "Home",
      icon: <AiFillHome />,
      link: "/",
    },
    { title: "Projects", icon: <VscProject />, link: "/projects" },
    {
      title: "Contact",
      icon: <MarkunreadIcon />,
      link: "/contact",
    },
  ];

  return (
    <div className="fixed right-0 bottom-5 left-0 z-20 p-5">
      <div className=" bg-small_nav rounded-[10px] text-white   shadow-small_nav backdrop-blur-[8px] border border-small_nav w-[100%]">
        <div className="flex items-center justify-evenly gap-2 p-2">
          {navOptions.map((option) => (
            <a href={option.link} key={option.title}>
              <Tooltip content={option.title}>
                <div className="flex cursor-pointer justify-center rounded-md bg-neutral-600 bg-opacity-60 p-2 text-2xl w-[50px] hover:bg-opacity-100">
                  {option.icon}
                </div>
              </Tooltip>
            </a>
          ))}
          <Tooltip content="Menu" >
            <span onClick={onOpen} className="flex justify-center cursor-pointer rounded-md bg-neutral-600 bg-opacity-60 p-2 text-2xl w-[50px] hover:bg-opacity-100">
              <MenuIcon />
            </span>
          </Tooltip>
          <SmallModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
      </div>
    </div>
  );
};

export default Small_Nav;
