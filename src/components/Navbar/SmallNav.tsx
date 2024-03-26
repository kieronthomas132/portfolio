import {motion} from "framer-motion";
import {useState} from "react";
import {navbarLinks} from "./navLinks.tsx";
import NavbarMenuIcon from "./NavbarMenuIcon.tsx";

const SmallNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="relative">
            <section className="flex md:hidden justify-between w-[90%] mx-auto items-center p-3">
                <div className="border-b-3 border-[#623D2F] rounded-full shadow-lg shadow-[#623D2F] w-full ">
                    <NavbarMenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                </div>
            </section>

            {isMenuOpen && (
                <motion.nav
                    initial={{scale: 0}}
                    animate={
                        isMenuOpen
                            ? {scale: 1, transition: {type: "spring", duration: 0.5}}
                            : {scale: 0}
                    }
                    className="absolute z-20 left-[8%] p-2 bg-[#D4A190] w-[84%] text-[#623D2F] rounded-lg font-[600]"
                >
                    {navbarLinks.map((link) => (
                        <li
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            key={link.name}
                            className="text-[15px] p-2 hover:underline hover:underline-offset-8"
                        >
                            <a className="cursor-pointer" href={link.link}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </motion.nav>
            )}
        </nav>
    );
};

export default SmallNav;
