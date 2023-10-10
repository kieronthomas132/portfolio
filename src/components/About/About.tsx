import Male from "../../assets/male.svg";
import { aboutArray } from "./AboutArray.tsx";
const About = () => {
  return (
    <div className="text-white md:w-[80%] w-full mx-auto h-full  relative font-inter pt-[45px] md:pt-[280px] p-3">
      <div>
        <h1 className="md:text-7xl text-4xl font-bold">
          <span className="text-neutral-500">A little</span> bit about me
          <div className="w-full h-[2px] mt-4 bg-neutral-700" />
        </h1>
        <div className="h-[760px] w-full md:flex mt-10 text-medium font-bold text-neutral-600">
          <div className="relative z-10">
            {aboutArray.map((about, index) => (
              <div key={index}>
                <h3 className="mt-5">{about.title}</h3>
                <p className="text-neutral-400 mt-2 font-semibold text-lg md:w-[600px]">
                  {about.content}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[600px] ml-[30px] relative z-0 hidden lg:flex">
            <img src={Male} className="min-w-[500px] mx-auto" alt={Male} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
