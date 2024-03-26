import logo from "../../assets/logo.svg";
import {motion} from "framer-motion";
import {borderVariant, navbarVariant} from '../framer-motion/framer-motion.tsx'
import {Button} from "@nextui-org/react";
import Resume from '../../../public/Kieron-Thomas-Resume.pdf'
import {navbarLinks} from './navLinks.tsx'

const Navbar = () => {
    return (
        <motion.nav className='hidden md:block' variants={navbarVariant} initial="hidden" animate="animate">
            <div className="flex justify-between w-[90%] mx-auto items-center p-4">
                <a href='/'>
                    <motion.img whileHover={{rotate: 340}} src={logo} className="w-[50px]" alt="logo"/>
                </a>
                <div>
                    <ul className="flex gap-6 items-center">
                        {navbarLinks.map((link) => (
                            <li key={link.name}
                                className="text-[19px] font-[400] text-[#83614F] hover:font-[500] p-2 hover:underline hover:underline-offset-8">
                                <a className="cursor-pointer" href={link.link}>{link.name}</a>
                            </li>
                        ))}
                        <a download href={Resume}>
                            <Button className='bg-[#D4A190] text-[#F5F5F5] font-[600]'>Download Resumé</Button>
                        </a>
                    </ul>
                </div>
            </div>
            <motion.div variants={borderVariant} initial='hidden' animate='animate'
                        className='h-[3px] w-[90%] mx-auto bg-[#83614F]'/>
        </motion.nav>
    );
};

export default Navbar;
