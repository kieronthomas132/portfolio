import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import SliderLayout from "../SliderComponent/SliderLayout.tsx";

const HobbiesArray2 = () => {

  const items = [
    {
      hobby: "Gaming"
    },
    {
      hobby: "Horror"
    },
    {
      hobby: "Design"
    },
    {
      hobby: "Hiking"
    }
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
    pauseOnMouseEnter: false,
  };

  return (
      <SliderLayout>
        <SliderComponent items={items} settings={settings} />
      </SliderLayout>
  );
};

export default HobbiesArray2;
