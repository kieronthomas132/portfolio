import Logo from "../../assets/Logo.svg";
import {Button, Tooltip} from "@nextui-org/react";
import Resume from '../../../public/Kieron-Thomas-Resume.pdf'
import {navbarOptions} from './navbarOptions.tsx'
const Navbar = () => {
  return (
    <nav className="bg-[#1A0A2E] h-[80px] font-inter flex flex-col justify-center text-white">
      <div className="flex justify-around items-center p-2">
        <img src={Logo} className=" w-[35px]" alt="logo" />
        <div>
          <ul className="flex items-center text-sm gap-[10px] md:gap-[80px]">
            {navbarOptions.map((nav, index) => (
              <li key={index} >
                <a href={nav?.link}>
                  <h1>{nav?.title}</h1>
                </a>
                <a href={nav?.link} target="_blank" className='hidden md:flex'>
                  <Tooltip content={nav?.label} color="secondary">
                    <h3 className="text-2xl">{nav?.icon}</h3>
                  </Tooltip>
                </a>
              </li>
            ))}
            <a href={Resume} download={true}>
            <Button size='sm' color='secondary' variant='shadow'>
              Project Resumé
            </Button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
