import { Tooltip } from "@nextui-org/react";
import crypto from "../../assets/Crypto.png";
import { RiComputerLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import gradient from "../../assets/gradient.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Crypto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="lg:mt-[120px]  mt-[40px] flex" ref={ref}>
      <div className=" hidden lg:flex w-[300px]">
        <div className="absolute z-10">
          <motion.img
            src={crypto}
            className="w-[470px] z-10 hidden md:flex rounded-lg"
            alt="homeland"
            style={{
              transform: isInView ? "none" : "translateX(-400px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          />
        </div>
      </div>
      <motion.div
        className=" lg:w-[690px] text-start md:text-end"
        style={{
          transform: isInView ? "none" : "translateX(400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
      >
        <h1 className="mt-[10px] text-[28px] font-preahvihear">
          Crypto Currency Converter
        </h1>
        <div className="bg-white/5 leading-7 rounded-lg font-poppins font-[400] relative z-10 p-2 text-[14px] w-[100%] mx-auto lg:w-[700px]  mt-[10px] text-[#CCD6F6] bg-opacity-30 backdrop-blur-md drop-shadow-lg">
          <h3>
            The cryptocurrency converter and news aggregator app utilizes the
            Alpha Vantage API for seamless currency conversions between
            cryptocurrencies, providing real-time exchange rates and insights
            into value changes. Additionally, it offers a curated news feed with
            headlines and summaries, catering to users tracking crypto trends.
          </h3>
          <div className="flex md:justify-end gap-[30px] text-[20px] mt-[10px]">
            <Tooltip content="see live!" color="secondary">
              <a
                href="https://crypto-currency-livid.vercel.app/"
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
      </motion.div>
      <div className=" hidden z-0 bottom-[40px] lg:flex absolute left-[300px]">
        <img src={gradient} alt="gradient" />
      </div>
    </div>
  );
};

export default Crypto;
