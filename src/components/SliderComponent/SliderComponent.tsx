// @ts-ignore
import Slider from "react-slick";
import { ReactNode } from "react";

interface SliderComponentProps {
  hobby?: string;
  img?: string;
  alt?: string;
  title?: string;
  icon?: ReactNode;
  projectImg?: string;
  stepper?: string;
}

interface SettingsProps {
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  arrows?: boolean;
  autoplay: boolean;
  speed: number;
  autoplaySpeed: number;
  cssEase: string;
}

const SliderComponent = ({
  items,
  settings,
}: {
  items: SliderComponentProps[];
  settings: SettingsProps;
}) => {

  const freeCodeCamp = "/src/assets/freecodecamp.png?t=1713892839376"
  const sololearn = "/src/assets/sololearn.png?t=1713892839419"


  return (
      <>
    <Slider {...settings}>
      {items.map(
        ({ img, projectImg, alt, hobby, icon, title, stepper }, index) => (
          <div key={index}>
            <div
              className={`bg-[#141414] justify-center ${stepper && "h-[70px]"} h-[50px] ${projectImg && "mt-[30px] h-[70px]"} mx-2 gap-3 flex items-center border-2 border-[#1F1F1F] p-2.5 rounded-xl transition-all duration-300 transform translate-x-0 blur-0`}
            >
              {(img && <img src={img} alt={alt} className="w-[50%]" />) ||
                (hobby && <p>{hobby}</p>) ||
                (title && icon && (
                  <div className="text-start flex items-center gap-3 w-full p-2">
                    <p className="text-[#999999] bg-[#282828] p-2 rounded-lg text-[20px]">
                      {icon}
                    </p>
                    <p className="min-w-[150px]">{title}</p>
                  </div>
                )) ||
                (projectImg && (
                  <div className="flex items-center justify-center">
                    <img className="w-[50%]" src={projectImg} />
                  </div>
                )) || (stepper && <img className={` xl:w-[80%] w-[100%] ${stepper === freeCodeCamp || stepper === sololearn ? "mt-1.5" : ""} `} src={stepper}/>)}
            </div>
          </div>
        ),
      )}
    </Slider>
      </>
  );
};

export default SliderComponent;
