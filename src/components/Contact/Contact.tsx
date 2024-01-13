import {motion, useInView} from 'framer-motion'
import {useRef} from "react";
import {useTheme} from "next-themes";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const {theme} = useTheme()


  return (
    <motion.div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
      id="connect"
      className={`${theme === "dark" ? "text-white" : "text-black"} w-[90%]  justify-center flex flex-col pb-[30px] lg:text-start text-center font-montserrat mx-auto`}
    >
      <div>
      <motion.h1 whileHover={{scale: 1.2, transition: {type: "spring", stiffness: 200, damping: 15}}}  className={`text-[60px] min-w-[25%] font-[600] ${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"}  inline-block md:text-start text-center text-transparent bg-clip-text`}>
        Connect
      </motion.h1>
      </div>
      <h4 className="text-sm lg:w-[700px] my-[15px] leading-7 text-start">
        I'm excited about the opportunity to join as a Junior Front-End
        Developer. I have a strong passion for creating aesthetic and functional
        web interfaces. If you're interested and would like to connect, I'd love
        to chat!
      </h4>
      <div className={`${theme === "dark" ? "bg-gradient-to-r from-[#FE8760] via-[#CD5DAE] to-[#BA4ECB]" : "bg-gradient-to-br from-[#0093E9] to-[#80D0C7]"} text-start items-start justify-start flex text-transparent bg-clip-text gap-[15px]`}>
        <a
          href="mailto: kieron.thomas321@hotmail.co.uk"
          className="hover:underline transition-ease duration-500"
        >
          kieron.thomas321@hotmail.co.uk
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
