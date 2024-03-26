import { container, item } from "../framer-motion/framer-motion.tsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { contactOptions } from "./ContactOptionsArray.tsx";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      variants={container}
      initial="hidden"
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      id="contact"
      className="md:w-[90%] mx-auto text-[#623D2F] p-8 rounded-lg"
    >
      <motion.h1 variants={item} className="font-bold text-3xl mb-6">
        GET IN TOUCH
      </motion.h1>
      <motion.ul
        variants={item}
        className="text-[30px] gap-5 flex justify-center md:justify-start items-center"
      >
        {contactOptions.map((item, index) => (
          <li key={index}>
            <Tooltip
              className="bg-[#623D2F] text-[#f5f5f5] font-[600]"
              content={item.tooltip}
            >
              <a target="_blank" href={item.link}>
                <Button
                  className="md:text-[30px] text-[7vw] rounded-full text-[#623D2F] bg-transparent"
                  isIconOnly={true}
                  size={"lg"}
                >
                  {item.icon}
                </Button>
              </a>
            </Tooltip>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Contact;
