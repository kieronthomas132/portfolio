import TechStackSmall from "./TechStack_Small.tsx";
import TechStackLarge from "./TechStackLarge.tsx";


const TechStack = () => {
  return (
    <div className="text-white md:w-[80%] w-full mx-auto h-full  relative font-inter pt-[200px] md:pt-[280px] p-8">
      <div>
        <h1 className="md:text-7xl text-6xl font-bold">
          <span className="text-neutral-500">Tech </span>
          Stack
        </h1>
        <div className="w-full h-[2px] mt-4 bg-neutral-700" />
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
