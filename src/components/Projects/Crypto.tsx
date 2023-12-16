import crypto from "../../assets/Crypto.png";
import { Tooltip } from "@nextui-org/react";
import { RiComputerLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import gradient from "../../assets/gradient.svg";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Crypto = () => {
    gsap.registerPlugin(ScrollTrigger);
    const cryptoTextRef = useRef(null)
  const cryptoHeaderRef = useRef(null);
  const cryptoImageRef = useRef(null);

  useEffect(() => {
      const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      const cryptoText = cryptoTextRef.current;
      const cryptoHeader = cryptoHeaderRef.current;
      const cryptoImage = cryptoImageRef.current;

        const crypto_tl = gsap.timeline({
            scrollTrigger: {
                trigger: cryptoText,
                start: "top 80%",
                end: "bottom 80%",
                scrub: true,
            },
        });


        crypto_tl.fromTo(
            cryptoImage,
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

        crypto_tl.fromTo(
            cryptoHeader,
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

        crypto_tl.fromTo(
            cryptoText,
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
      <div ref={cryptoHeaderRef}>
        <h1 className="mt-[10px] text-[28px] font-preahvihear">
          CryptoCurrency Converter
        </h1>
      </div>
      <div className="flex flex-col items-cnter justify-center">
        <div ref={cryptoTextRef} className="bg-white/5 font-poppins leading-7 rounded-lg font-[400] relative z-10 p-2 text-[14px] lg:w-[750px]  mt-[10px] text-[#CCD6F6] bg-opacity-30 backdrop-blur-md drop-shadow-lg">
            The cryptocurrency converter and news aggregator app utilizes the Alpha Vantage API for seamless currency conversions between cryptocurrencies, providing real-time exchange rates and insights into value changes. Additionally, it offers a curated news feed with headlines and summaries, catering to users tracking crypto trends.
          <div className="flex items-center gap-[30px] text-[20px] mt-[10px]">
            <Tooltip content="see live!" color="secondary">
              <a
                href="https://crypto-currency-livid.vercel.app"
                target="_blank"
                className="text-[#7127BA] hover:text-white"
              >
                <RiComputerLine />
              </a>
            </Tooltip>
            <Tooltip content="see code!" color="secondary">
              <a
                href="https://github.com/kieronthomas132/crypto_currency"
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
        <div ref={cryptoImageRef} className="absolute right-[230px]">
          <img
            src={crypto}
            className="w-[400px] rounded-md hidden lg:flex h-[250px] object-cover"
            alt="crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Crypto;
