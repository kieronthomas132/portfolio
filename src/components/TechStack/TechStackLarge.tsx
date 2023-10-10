import { techStackArray } from "./TechStackArray.tsx";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const TechStackLarge = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <div className="md:grid md:grid-cols-3 grid-cols-1 gap-5 pb-2 mt-5 hidden ">
      {techStackArray.map((stack, index) => (
        <Card
          key={index}
          onMouseOver={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="p-1 border border-neutral-700 bg-neutral-900 text-white  font-bold hover:bg-neutral-800 transition-all ease-in-out duration-200 cursor-pointer"
        >
          <a href={stack.link} key={index} target="_blank">
            <CardBody>
              <div
                className={`${
                  hoveredIndex === index
                    ? "right-[15px] top-[10px] opacity-100 "
                    : "right-[25px] top-[20px] opacity-0"
                } absolute text-2xl transition-all ease-in-out duration-200 `}
              >
                <FiArrowUpRight />
              </div>
              <div className="flex items-center w-[100%] justify-center">
                <Image
                  src={stack.image}
                  removeWrapper={true}
                  className={`w-[200px] mt-6 ${
                    hoveredIndex === index
                      ? "transform translate-y-[-10px]"
                      : ""
                  } `}
                />
              </div>
              <div className="justify-between flex items-center">
                <h1 className="text-lg">{stack.name}</h1>
                <h2 className="text-sm text-neutral-600 border border-neutral-800 font-normal text-center p-3 rounded-full">
                  {stack.type}
                </h2>
              </div>
            </CardBody>
          </a>
        </Card>
      ))}
    </div>
  );
};

export default TechStackLarge;
