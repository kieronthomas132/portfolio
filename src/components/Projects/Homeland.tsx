import {Tooltip} from "@nextui-org/react";
import HomelandImage from "../../assets/homeland.png";
import {RiComputerLine} from "react-icons/ri";
import {FaCode} from "react-icons/fa6";
import gradient from "../../assets/Gradient.svg";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Homeland = () => {
    gsap.registerPlugin(ScrollTrigger);
    const homelandHeaderRef = useRef(null);
    const homelandTextRef = useRef(null);
    const homelandImageRef = useRef(null);


    useEffect(() => {
        const screenWidth = window.innerWidth;

        if(screenWidth > 768) {
            const homelandText = homelandTextRef.current;
            const homelandImage = homelandImageRef.current;
            const homelandHeader = homelandHeaderRef.current;

            const homeland_tl = gsap.timeline({
                scrollTrigger: {
                    trigger: homelandHeader,
                    start: "top 95%",
                    end: "bottom 80%",
                    scrub: true,
                },
            });

            homeland_tl.fromTo(
                homelandHeader,
                {
                    x: 500,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                },
            );

            homeland_tl.fromTo(
                homelandText,
                {
                    x: 500,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                },
            );

            homeland_tl.fromTo(
                homelandImage,
                {
                    x: -700,
                    opacity: 1,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                },
            );
        }

    }, [])


    return (
        <div className="lg:mt-[120px]  mt-[40px] flex">
            <div className=" hidden lg:flex w-[300px]">
                <div className="absolute z-10" ref={homelandImageRef}>
                    <img
                        src={HomelandImage}
                        className="w-[400px] z-10 hidden md:flex"
                        alt="homeland"
                    />
                </div>
            </div>
            <div className=" lg:w-[690px] text-start md:text-end">
                <h1
                    ref={homelandHeaderRef}
                    className="mt-[10px] text-[28px] font-preahvihear"
                >
                    Homeland Real Estate
                </h1>
                <div className="bg-white/5 leading-7 rounded-lg font-poppins font-[400] relative z-10 p-2 text-[14px] w-[100%] mx-auto lg:w-[700px]  mt-[10px] text-[#CCD6F6] bg-opacity-30 backdrop-blur-md drop-shadow-lg">
                    <h3 ref={homelandTextRef}>
                        A fairly older project of mine is this front-end real estate
                        site that utilises the Zoopla API from RapidAPI. This site uses
                        firebase to sign up and login and add properties to favorites.
                        This project also utilises filter options to filter bedroom,
                        price etc
                    </h3>
                    <div className="flex md:justify-end gap-[30px] text-[20px] mt-[10px]">
                        <Tooltip content="see live!" color="secondary">
                            <a
                                href="https://homeland-real-estate-mu.vercel.app/"
                                target="_blank"
                                className="text-[#7127BA] hover:text-white"
                            >
                                <RiComputerLine />
                            </a>
                        </Tooltip>
                        <Tooltip content="see code!" color="secondary">
                            <a
                                href="https://github.com/kieronthomas132/homeland"
                                target="_blank"
                                className="text-[#7127BA] hover:text-white"
                            >
                                <FaCode />
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className=" hidden z-0 bottom-[40px] lg:flex absolute left-[300px]">
                <img src={gradient} alt="gradient" />
            </div>
        </div>
    );
}

export default Homeland;