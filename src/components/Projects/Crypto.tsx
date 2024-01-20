import crypto from "../../assets/projects/crypto.png";
import arrow from "../../assets/arrows/curvy_arrow.svg";
import arrow_light from '../../assets/arrows/arrow_light.svg'
import arrow2 from "../../assets/arrows/curvy_arrow_4.svg";
import ProjectsCard from "./ProjectsCard.tsx";
import arrow_2_light from '../../assets/arrows/arrow_2_light.svg'
const Crypto = () => {
  return (
    <section>
      <ProjectsCard
        liveLink={"https://crypto-currency-livid.vercel.app/"}
        codeLink={"https://github.com/kieronthomas132/crypto_currency"}
        projectTitle={"CryptoCurrency Converter"}
        arrow={arrow}
        arrow2={arrow2}
        arrow_2_light={arrow_2_light}
        arrow_light={arrow_light}
        projectImage={crypto}
        arrow2Position={
          "z-30 hidden md:flex xl:hidden pr-5 absolute md:left-[8%] bottom-[25%] lg:bottom-[25%]"
        }
        projectDescription={
          "            This cryptocurrency converter and news provider app utilizes the\n" +
          "            Alpha Vantage API for seamless currency conversions between\n" +
          "            cryptocurrencies, providing real-time exchange rates and insights\n" +
          "            into value changes. Additionally, it offers a curated news feed with\n" +
          "            headlines and summaries, catering to users tracking crypto trends."
        }
      />
    </section>
  );
};

export default Crypto;
