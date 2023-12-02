import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const UnderHeader = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      gsap.fromTo(
        lineRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.5,
          duration: 0.5,
          onComplete: () => {
            gsap.to(lineRef.current, {
              opacity: 0,
              duration: 0.5,
              delay: 0.5,
              onComplete: animate,
            });
          },
        },
      );
    };

    animate();
  }, []);
  return (
    <div className="text-white flex-col mt-[40px] mt:0 font-preahvihear w-full text-center md:text-start md:w-[70%] flex justify-center items-center">
      <div className="relative flex items-center gap-1">
        <h1 className="md:text-[30px] text-[20px]">
          I'm a Junior React Developer.
        </h1>
        <div ref={lineRef} className="h-[30px] w-[3px] bg-white" />
      </div>
      <div className="mt-[20px]  w-[80%] md:w-[55%] md:pl-[50px] mx-auto">
        <h4>
          A self-taught developer enthusiastic about creating websites. Each project is a chance for me to expand my knowledge and skills.
        </h4>
      </div>
    </div>
  );
};

export default UnderHeader;
