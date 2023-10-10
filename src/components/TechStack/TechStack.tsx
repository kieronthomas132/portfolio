import TechStackSmall from "./TechStack_Small.tsx";
import TechStackLarge from "./TechStackLarge.tsx";


const TechStack = () => {
  return (
    <div className="relative mx-auto h-full w-full p-8 text-white font-inter pt-[200px] md:w-[80%] md:pt-[280px]">
      <div>
        <h1 className="text-6xl font-bold md:text-7xl">
          <span className="text-neutral-500">Tech </span>
          Stack
        </h1>
        <div className="mt-4 w-full bg-neutral-700 h-[2px]" />
      </div>
      <div className="mt-10">
        <h2 className="text-5xl font-bold text-neutral-200">Dev Tools</h2>
        <div>
          <TechStackSmall />
          <TechStackLarge />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
