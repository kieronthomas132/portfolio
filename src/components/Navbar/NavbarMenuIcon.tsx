import {Dispatch, SetStateAction} from "react";
import {motion} from "framer-motion";

const NavbarMenuIcon = ({
                            isMenuOpen,
                            setIsMenuOpen,
                        }: {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <button
            className="flex p-4 flex-col gap-1 cursor-pointer bg-transparent rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <motion.div
                initial={{rotate: 0, y: 0, opacity: 1}}
                animate={
                    isMenuOpen ? {rotate: -45, y: 9} : {rotate: 0, y: 0, opacity: 1}
                }
                className="w-[30px] h-[4px] bg-[#623D2F] rounded-lg"
            />
            <motion.div
                initial={{opacity: 1}}
                animate={
                    isMenuOpen
                        ? {opacity: 0, transition: {duration: 0}}
                        : {opacity: 1}
                }
                className="w-[30px] h-[4px] bg-[#623D2F] rounded-lg"
            />
            <motion.div
                initial={{rotate: 0, y: 0, opacity: 1}}
                animate={
                    isMenuOpen ? {rotate: 45, y: -7} : {rotate: 0, y: 0, opacity: 1}
                }
                className="w-[30px] h-[4px] bg-[#623D2F] rounded-lg"
            />
        </button>
    );
};

export default NavbarMenuIcon;
