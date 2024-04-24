import Profile from "../Profile/Profile.tsx";
import YEO from "../Projects/YOE.tsx";
import WhyMe from "../WhyMe/WhyMe.tsx";
import TechStack from "../TechStack/TechStack.tsx";
import Projects from "../Projects/Projects.tsx";
import Hobbies from "../Hobbies/Hobbies.tsx";
import TruthLies from "../Truths&Lies/Truth&Lies.tsx";
import Pathway from "../Pathway/Pathway.tsx";
import Achievements from "../Achievements/Achievements.tsx";

const SmallHomePage = () => {
    return (
        <div className="flex flex-col gap-3 items-center w-full ">
            <Profile/>
            <YEO/>
            <WhyMe/>
            <TechStack/>
            <Projects/>
            <Hobbies/>
            <TruthLies/>
            <Pathway />
            <Achievements/>
        </div>
    );
}

export default SmallHomePage;