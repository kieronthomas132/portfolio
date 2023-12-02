import arrow from "../../assets/arrow.svg";
import {Suspense} from "react";
import {dotArray} from "./HeaderDots.tsx";
import {Image, CircularProgress} from '@nextui-org/react'
import Gradient from "../../assets/gradient.svg";
import ellipse from "../../assets/Ellipse.svg";
import Memoji from "../../assets/Memoji.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const animate = () => {
      gsap.fromTo(
        dotRefs.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.5,
          onComplete: () => {
            gsap.to(dotRefs.current, {
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
    <main className="md:w-[80%] w-full md:h-[500px] font-preahvihear items-center relative justify-center flex">
      <div className="z-10 flex-col md:flex md:flex-row justify-center items-center relative">
        <div className="flex justify-center">
          <img
            src={Gradient}
            className="md:w-[400px] h-[420px] -left-[5px] md:-left-[45px] absolute z-0"
            alt="Gradient Background"
          />
          <Suspense fallback={<CircularProgress color='secondary'/>}>
            <Image
                isZoomed={true}
                isBlurred={true}
                src={Memoji}
                alt="Kieron Thomas Memoji"
                className="w-[300px] relative z-10 -mt-4 md:mt-0 "
            />
          </Suspense>
        </div>

        <div className="absolute hidden md:block top-[30px] right-[160px] w-[300px] h-[100px]">
          <img src={arrow} className="absolute left-3 bottom-1" alt="arrow" />
          <div className="text-white text-end">
            <h1>
              Hi!, <span className="text-[#7127BA]">I'm Kieron Thomas</span>
            </h1>
          </div>
        </div>

        <div className="text-white mt-9 z-10 flex text-center md:text-start flex-col md:w-auto w-full">
          <h1 className="my-5 md:hidden">
            Hi!,{" "}
            <span className="text-[#7127BA] relative">I'm Kieron Thomas</span>
          </h1>
          <h3 className="text-[15px] relative underline decoration-2 decoration-slate-300 font-[200]">
            A Junior Front-End Developer that
          </h3>
          <h1 className="text-[30px] md:w-[350px] text-center md:text-start mt-[5px]">
            Sculpts functionality,
          </h1>
          <div className="relative">
            <div className="absolute right-[45px] md:right-2 w-[160px] md:w-auto -bottom-[4px]">
              <img src={ellipse} alt="background" />
            </div>
            <h1 className="md:text-[30px] mx-auto md:text-start text-center text-[20px] mt-[4px]">
              not just <span className="text-[#7127BA]">appearances!</span>{" "}
              <span>
                {dotArray.map((dot, index) => (
                  <span
                    key={index}
                    ref={(el) => (dotRefs.current[index] = el)}
                    className="dot"
                  >
                    {dot.dot}
                  </span>
                ))}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
