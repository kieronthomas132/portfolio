import { techStackArray } from "./TechStackArray.tsx";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const TechStackLarge = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <div className="mt-5 hidden grid-cols-1 gap-5 pb-2 md:grid md:grid-cols-3">
      {techStackArray.map((stack, index) => (
        <Card
          key={index}
          onMouseOver={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="cursor-pointer border border-neutral-700 bg-neutral-900 p-1 font-bold text-white transition-all duration-200 ease-in-out hover:bg-neutral-800"
        >
          <a href={stack.link} key={index} target="_blank">
            <CardBody>
              <div
                className={`${
                  hoveredIndex === index
                    ? "right-[15px] top-[10px] opacity-100 "
                    : "right-[25px] top-[20px] opacity-0"
                } absolute text-2xl transform transition-all ease-in-out duration-200 `}
              >
                <FiArrowUpRight />
              </div>
              <div className="flex items-center justify-center w-[100%]">
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
              <div className="flex items-center justify-between">
                <h1 className="text-lg">{stack.name}</h1>
                <h2 className="rounded-full border border-neutral-800 p-3 text-center text-sm font-normal text-neutral-600">
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
