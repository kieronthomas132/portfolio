import { FaHandBackFist, FaCompass, FaBoltLightning } from "react-icons/fa6";
import { IoMdTrophy } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";

const WhyMeArray2 = () => {

    const items = [
        {
            title: "Problem Solver",
            icon: <FaHandBackFist />,
        },
        {
            title: "Team Player",
            icon: <IoMdTrophy />,
        },
        {
            title: "Critical Thinker",
            icon: <FaCompass />,
        },
        {
            title: "Continuous Learner",
            icon: <FaBoltLightning />,
        },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        draggable: false,
        swipe: false,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: true,
    };

    return (
        <div className="overflow-hidden w-full h-[80px] mt-[20px] relative text-[#CCCCCC] font-[600] text-[15px]">
            <div className="w-[700px] flex flex-col">
                <SliderComponent items={items} settings={settings}/>
            </div>
        </div>
    );
};

export default WhyMeArray2;
