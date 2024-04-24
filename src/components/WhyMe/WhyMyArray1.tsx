import { FaBoltLightning, FaCompass, FaHandBackFist } from "react-icons/fa6";
import { IoMdTrophy } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";

const WhyMeArray1 = () => {

  const items = [
    {
      title: "Hard Working",
      icon: <FaHandBackFist />,
    },
    {
      title: "Ambitious",
      icon: <IoMdTrophy />,
    },
    {
      title: "Determined",
      icon: <FaCompass />,
    },
    {
      title: "Fast Learner",
      icon: <FaBoltLightning />,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    swipe: false,
    speed: 8000,
    autoplaySpeed: 100,
    cssEase: "linear"
  };

  return (
      <div className="overflow-hidden w-full h-[60px] mt-[20px] relative text-[#CCCCCC] font-[600] text-[15px]">
        <div className="md:w-[680px] w-[550px] flex flex-col ">
          <SliderComponent items={items} settings={settings}/>
        </div>
      </div>
  );
};

export default WhyMeArray1;
