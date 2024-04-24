import Typewriter from "typewriter-effect";

const ProfileName = () => {
  return (
    <div>
      <h1 className=" mt-2 ml-[30px] text-[22px] font-[600] text-[#E6E6E6]">
        Kieron Thomas
      </h1>
      <div className="flex text-[#999999] text-[15px] font-[400] mt-2 items-center gap-1">
        <p className="ml-[30px] ">I'm </p>
        <span className="text-[#A18FFC] font-[500]">
          <Typewriter
            options={{
              strings: ["a Developer", "An Animal Lover", "Movie Buff", "Techie"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default ProfileName;
