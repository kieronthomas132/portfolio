import Youtube from '../../../assets/youtube_logo.png'
import freeCodeCamp from '../../../assets/freecodecamp.png'
import scrimba from '../../../assets/scrimba.png'
import codecademy from '../../../assets/codecademy.png'
import sololearn from '../../../assets/sololearn.png'
import { motion } from "framer-motion";
import SliderComponent from "../../SliderComponent/SliderComponent.tsx";
import CardHeader from "../../CardHeader/CardHeader.tsx";
import {RiComputerFill} from "react-icons/ri";

const Stepper = () => {
  const items = [
    {
      stepper: Youtube,
    },
    {
      stepper: freeCodeCamp,
    },
    {
      stepper: scrimba,
    },
    {
      stepper: codecademy,
    },
    {
      stepper: sololearn,
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
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.1 } }}
      className="bg-[#101010] flex flex-col rounded-3xl  border-2 2xl:w-[50%] lg:w-[1010px] md:w-[60%] w-[95%] border-[#191919] p-2 mt-[10px] h-[200px] xl:h-[260px]"
    >
      <CardHeader headerTitle={"Resources"} headerSubHeading={"What Resources Have I Used"} headerIcon={<RiComputerFill/>}/>
      <div className="overflow-hidden h-[50%] items-center justify-center flex relative">
        <div className="w-full mt-5 flex flex-col ">
          <SliderComponent items={items} settings={settings} />
        </div>
      </div>
    </motion.div>
  );
};

export default Stepper;
