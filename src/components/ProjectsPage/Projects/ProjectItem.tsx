import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import {useState} from "react";

const ProjectItem = ({
  link,
  img,
  title,
  type,
  index,
}: {
  link: string;
  img: string;
  title: string;
  type: string;
  index: number;
}) => {
  const [cardHovered, setCardHovered] = useState<number | null>(null);

  const arrowVariant = {
    initial: {
      x: "0px",
    },
    animate: {
      x: "50px",
      transition: {
        duration: 0.5,
        ease: "backInOut",
      },
    },
  };

  const arrow2Variant = {
    initial: {
      x: "-40px",
    },
    animate: {
      x: "0px",
      transition: {
        duration: 0.5,
        ease: "backInOut",
      },
    },
  };

  return (
    <Card
      onMouseEnter={() => setCardHovered(index)}
      onMouseLeave={() => setCardHovered(null)}
      className="bg-[#191919] mt-3"
    >
      <a href={link} target='_blank'>
        <CardBody className="flex items-center text-white">
          <img
            src={img}
            className="2xl:w-[30%] xl:w-[20%] w-[20%] rounded-xl"
            alt={title}
          />
          <p className="text-start w-full mt-3 text-[#CCCCCC] text-[17px] font-[600] ">
            {title}
          </p>
          <p className="text-start w-full text-[14px] mt-1 text-[#999999] font-[500]">
            {type}
          </p>
        </CardBody>
      </a>
      <div className="text-[35px] overflow-hidden -rotate-45 absolute p-1 right-4 bottom-4 border-2 bg-[#1F1F1F] border-[#272727] rounded-full text-[#CCCCCC]">
        <motion.p
          variants={arrowVariant}
          initial="initial"
          animate={cardHovered === index ? "animate" : ""}
          className="absolute"
        >
          <IoIosArrowRoundForward />
        </motion.p>
        <motion.p
          variants={arrow2Variant}
          initial="initial"
          animate={cardHovered === index ? "animate" : ""}
        >
          <IoIosArrowRoundForward />
        </motion.p>
      </div>
    </Card>
  );
};

export default ProjectItem;
