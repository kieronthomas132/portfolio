import SpotifyImage from "../../assets/spotify_image.png";
import { Tooltip } from "@nextui-org/react";
import { RiComputerLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import gradient from "../../assets/Gradient.svg";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Spotify = () => {
    gsap.registerPlugin(ScrollTrigger);
  const spotifyTextRef = useRef(null);
  const spotifyHeaderRef = useRef(null);
  const spotifyImageRef = useRef(null);

  useEffect(() => {
      const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      const spotifyText = spotifyTextRef.current;
      const spotifyHeader = spotifyHeaderRef.current;
      const spotifyImage = spotifyImageRef.current;

        const spotify_tl = gsap.timeline({
            scrollTrigger: {
                trigger: spotifyText,
                start: "top 80%",
                end: "bottom 80%",
                scrub: true,
            },
        });


        spotify_tl.fromTo(
            spotifyImage,
            {
                x: 500,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 5,
            },
        );

        spotify_tl.fromTo(
            spotifyHeader,
            {
                x: -500,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 5,
            },
        );

        spotify_tl.fromTo(
            spotifyText,
            {
                x: -500,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 5,
            },
        );


    }
  });

  return (
    <div>
      <div ref={spotifyHeaderRef}>
        <h4 className="text-[#7127BA] font-preahvihear">Featured Project</h4>
        <h1 className="mt-[10px] text-[28px] font-preahvihear">
          Spotify Clone
        </h1>
      </div>
      <div className="flex flex-col items-cnter justify-center">
        <div ref={spotifyTextRef} className="bg-white/5 font-poppins leading-7 rounded-lg font-[400] relative z-10 p-2 text-[14px] lg:w-[750px]  mt-[10px] text-[#CCD6F6] bg-opacity-30 backdrop-blur-md drop-shadow-lg">
          My first full stack project! As a avid music fan it seemed only right
          to make a variation of the music streaming site Spotify. This
          application allows users to create their own accounts and make their
          own playlists!
          <h3 className="text-orange-400 text-[12px] mt-[5px]">
            The backend of this project is hosted on the free tier of Render,
            and so may take a minute to get the server running on initial fetch.
            Please be patient, thank you :)
          </h3>
          <div className="flex items-center gap-[30px] text-[20px] mt-[10px]">
            <Tooltip content="see live!" color="secondary">
              <a
                href="https://spotify-fullstack-alpha.vercel.app/home"
                target="_blank"
                className="text-[#7127BA] hover:text-white"
              >
                <RiComputerLine />
              </a>
            </Tooltip>
            <Tooltip content="see code!" color="secondary">
              <a
                href="https://github.com/kieronthomas132/spotify_fullstack"
                target="_blank"
                className="text-[#7127BA] hover:text-white"
              >
                <FaCode />
              </a>
            </Tooltip>
          </div>
        </div>
        <div className=" hidden lg:flex absolute right-[450px]">
          <img src={gradient} alt="gradient" />
        </div>
        <div ref={spotifyImageRef} className="absolute right-[230px]">
          <img
            src={SpotifyImage}
            className="w-[400px] rounded-md hidden lg:flex h-[250px] object-cover"
            alt="spotify"
          />
        </div>
      </div>
    </div>
  );
};

export default Spotify;
