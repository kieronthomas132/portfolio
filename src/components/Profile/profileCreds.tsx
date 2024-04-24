import {FaLocationDot} from "react-icons/fa6";
import {FaGlobeEurope, FaGraduationCap, FaSmile} from "react-icons/fa";
import {RiComputerFill} from "react-icons/ri";

const ProfileCreds = () => {

    const profileCreds = [
        {
            cred: "England",
            icon: <FaLocationDot />,
        },
        {
            cred: "English",
            icon: <FaGlobeEurope />,
        },
        {
            cred: "Software Developer",
            icon: <RiComputerFill />,
        },
        {
            cred: "Biomed Grad",
            icon: <FaGraduationCap />,
        },
        {
            cred: "Good Boy",
            icon: <FaSmile />,
        },
    ];

    return (
        <div
            className="bg-[#141414] relative w-[95%] flex flex-wrap gap-4 mx-auto p-3 border-2 rounded-xl border-[#191919]">
            {profileCreds.map(({cred, icon}) => (
                <div
                    className="flex items-center p-2 text-center border-2 border-[#212121] rounded-full bg-[#191919] gap-2">
                    <span className="text-[#A291FD]">{icon}</span>
                    <p className="text-[#999999] text-[13px] font-[500]">
                        {cred}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ProfileCreds;