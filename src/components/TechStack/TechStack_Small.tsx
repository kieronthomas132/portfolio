import { Card } from "@nextui-org/react";
import { techStackArray } from "./TechStackArray.tsx";

const TechStackSmall = () => {
  return (
    <div className="md:hidden md:grid-cols-3 grid-cols-1 pb-[100px] gap-5 mt-5 grid ">
      {techStackArray.map((stack, index) => (
        <Card
          className="bg-neutral-900 hover:bg-neutral-800 cursor-pointer"
          key={index}
        >
          <a href={stack.link} key={index} target="_blank">
            <div className="flex items-center justify-between text-white font-bold p-1">
              <div className="flex items-center">
                <img src={stack.image} className="w-[70px]" alt={stack.name} />
                <h1>{stack.name}</h1>
              </div>
              <p className="text-xs text-neutral-600 border border-neutral-800 font-normal text-center w-[120px] p-2 rounded-full">
                {stack.type}
              </p>
            </div>
          </a>
        </Card>
      ))}
    </div>
  );
};

export default TechStackSmall;
