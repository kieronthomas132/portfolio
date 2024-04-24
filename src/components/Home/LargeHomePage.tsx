import TechStack from "../TechStack/TechStack.tsx";
import Projects from "../Projects/Projects.tsx";
import WhyMe from "../WhyMe/WhyMe.tsx";
import YEO from "../Projects/YOE.tsx";
import Profile from "../Profile/Profile.tsx";
import Hobbies from "../Hobbies/Hobbies.tsx";
import TruthLies from "../Truths&Lies/Truth&Lies.tsx";
import Pathway from "../Pathway/Pathway.tsx";
import Online from "../Online/Online.tsx";
import Achievements from "../Achievements/Achievements.tsx";

const LargeHomePage = () => {
  return (
    <div className="2xl:flex 2xl:flex-row flex flex-col justify-center w-full 2xl:w-auto 2xl:justify-start">
      <div className="flex justify-center w-full 2xl:w-auto 2xl:justify-start gap-3">
        <div className="flex flex-col">
          <TechStack />
          <Projects />
          <WhyMe />
        </div>
        <div className="flex flex-col">
          <YEO />
          <Profile />
          <Hobbies />
        </div>
      </div>

      <div className="2xl:flex 2xl:flex-col items-center 2xl:items-start flex flex-col w-full 2xl:justify-start ">
        <div className="flex w-full mt-[10px] 2xl:mt-0 2xl:ml-[10px] 2xl:justify-start justify-center 2xl:w-full">
          <TruthLies />
          <Pathway />
        </div>
        <div className="ml-[10px] w-full justify-center 2xl:justify-start 2xl:w-[95%] flex">
          <Online />
          <div>
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeHomePage;
