import memoji from "../../assets/memoji.png";
import {motion} from "framer-motion";
import {container, item, memojiVariant,} from "../framer-motion/framer-motion.tsx";

const Header = () => {
    return (
        <header id='home' className="w-[90%] md:pt-[80px] mx-auto">
            <section className="lg:grid w-full items-center grid grid-cols-1 h-auto lg:grid-cols-2">
                <div
                    className="flex relative text-[#623D2F] flex-col items-center lg:w-[60%] h-[200px] md:h-[400px] justify-center">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="lg:absolute uppercase lg:left-[60px]"
                    >
                        <motion.h4
                            variants={item}
                            className="lg:text-[40px] text-[#B6A494] font-[700] w-full"
                        >
                            Hi!, I'm
                        </motion.h4>
                        <motion.h1
                            variants={item}
                            className="font-montserrat text-[9vw] lg:text-[7vw] font-[800]"
                        >
                            Kieron Thomas
                        </motion.h1>
                        <motion.p
                            variants={item}
                            className="font-[700] text-[#C6826B] tracking-widest lg:text-[20px]"
                        >
                            A FrontEnd Developer
                        </motion.p>
                    </motion.div>
                </div>
                <motion.div
                    whileHover={{scale: 0.8}}
                    variants={memojiVariant}
                    initial="hidden"
                    animate="animate"
                    className="lg:w-[60%] justify-center flex mx-auto"
                >
                    <img
                        src={memoji}
                        className="md:w-full w-[50%] bg-[#D4A190] rounded-full"
                        alt="memoji"
                    />
                </motion.div>
            </section>
        </header>
    );
};

export default Header;
