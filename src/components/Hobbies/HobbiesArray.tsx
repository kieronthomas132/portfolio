import Marvel from "../../assets/marvel.png";
import Youtube from "../../assets/youtube.png";
import Spotify from "../../assets/spotify.png";
import PS5 from "../../assets/ps5.png";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import SliderLayout from "../SliderComponent/SliderLayout.tsx";

const HobbiesArray = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const items = [
    { img: Marvel, alt: "Marvel Logo" },
    { img: Spotify, alt: "Spotify Logo" },
    { img: Youtube, alt: "Youtube Logo" },
    { img: PS5, alt: "PS5 Logo" },
  ];

  return (
    <SliderLayout>
      <SliderComponent items={items} settings={settings} />
    </SliderLayout>
  );
};

export default HobbiesArray;
