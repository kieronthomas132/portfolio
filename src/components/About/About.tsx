import Male from "../../assets/generic/male.svg";
import { aboutArray } from "./AboutArray.tsx";
const About = () => {
  return (
    <div className="relative mx-auto h-[1050px] md:h-full w-full p-3 text-white font-inter pt-[45px] md:w-[80%] md:pt-[280px]">
      <div>
        <h1 className="text-4xl font-bold md:text-7xl">
          <span className="text-neutral-500">A little</span> bit about me
          <div className="mt-4 w-full bg-neutral-700 h-[2px]" />
        </h1>
        <div className="mt-10 w-full font-bold text-neutral-600 h-[760px] text-medium md:flex">
          <div className="relative z-10">
            {aboutArray.map((about, index) => (
              <div key={index}>
                <h3 className="mt-5">{about.title}</h3>
                <p className="mt-2 text-lg font-semibold text-neutral-400 md:w-[600px]">
                  {about.content}
                </p>
              </div>
            ))}
          </div>
          <div className="relative z-0 hidden w-[600px] ml-[30px] lg:flex">
            <img src={Male} className="mx-auto min-w-[500px]" alt={Male} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
