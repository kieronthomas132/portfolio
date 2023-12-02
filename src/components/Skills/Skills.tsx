import skills from "../../assets/skills.svg";
import { Suspense, useEffect, useRef } from "react";
import { CircularProgress, Image } from "@nextui-org/react";
import progress from "../../assets/progress.svg";
import gsap from "gsap";
const Skills = () => {
  const lineRef = useRef(null);

  const animateProgress = () => {
    gsap.fromTo(
      lineRef.current,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 2,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(lineRef.current, { width: 0 });
          animateProgress();
        },
      },
    );
  };

  useEffect(() => {
    animateProgress();

    return () => {
      gsap.killTweensOf(lineRef.current);
    };
  }, []);

  return (
    <div className="w-full font-preahvihear flex-col items-center text-white justify-center flex mt-[40px] md:mt-[80px]">
      <div>
        <Suspense fallback={<CircularProgress color="secondary" />}>
          <Image
            src={skills}
            alt="skills"
            className=" w-full md:w-[500px] lg:w-[900px]"
          />
        </Suspense>
      </div>
      <div className="mt-[80px] text-[25px]">
        <h1>Skills in Progress</h1>
        <div ref={lineRef} className="h-[2px] w-[100%] bg-[#7127BA]" />
      </div>
        <Suspense fallback={<CircularProgress color="secondary" />}>
            <Image src={progress} className="md:w-[600px] w-[300px] md:-mt-[50px]" />
        </Suspense>
    </div>
  );
};

export default Skills;
