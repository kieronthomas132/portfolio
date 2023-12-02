import arrow from "../../assets/small_arrow.svg";
import { Button, CircularProgress, Image } from "@nextui-org/react";
import { Suspense, useState } from "react";
import axios from "axios";
const Cat = () => {
  const [image, setImage] = useState("");

  const handleOnClick = async () => {
    const res = await axios.get(import.meta.env.VITE_CAT_API);
    const data = await res.data;
    setImage(data[0].url);
  };


  return (
    <div className="text-white font-preahvihear mt-[40px] w-[90%] md:w-[80%] mx-auto">
      <div className=" md:w-[50%] relative">
        <h1>
          Thank you for visiting my portfolio! <br /> As a thank you click this
          button for a nice surprise!
        </h1>
        <img
          src={arrow}
          className="hidden md:flex absolute right-[100px] w-[50px] top-[40px]"
          alt="arrow"
        />
      </div>
      <div className="md:py-[45px] py-[30px] md:w-[35%] md:text-end">
        <Button color="secondary" variant="ghost" onClick={handleOnClick}>
          Click Here!
        </Button>
      </div>
      <Suspense fallback={<CircularProgress color="secondary" />}>
        <Image src={image} className="my-[30px]" />
      </Suspense>
    </div>
  );
};

export default Cat;
