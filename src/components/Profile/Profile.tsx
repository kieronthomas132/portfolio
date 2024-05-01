import Resume from "../../../public/Kieron_Thomas_Resume.pdf";
import profile from "../../assets/Profile.png";
import { motion } from "framer-motion";
import { IoDownload } from "react-icons/io5";
import ProfileCreds from "./profileCreds.tsx";
import ProfileContact from "./ProfileContact.tsx";
import ProfileName from "./ProfileName.tsx";
import ProfileAvailableToWork from "./profileAvailableToWork.tsx";
const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7 } }}
      className="p-2 rounded-[20px] xs:w-[95%] sm:w-[530px] pb-5 border-2 border-border mt-[10px] bg-card_background"
    >
      <div className="flex items-center p-4 w-full">
        <img
          src={profile}
          className="w-[120px] rounded-2xl"
          alt="profile-pic"
        />
        <div className="flex flex-col ">
          <div className="flex items-center gap-7">
            <ProfileAvailableToWork />
            <div className=" items-center hidden md:flex gap-2">
              <p className="text-list_header font-[600] text-[13px]">Resumé</p>
              <motion.a
                whileTap={{ y: "0px" }}
                whileHover={{ y: "-5px" }}
                download
                href={Resume}
              >
                <IoDownload className="bg-icon_bg p-2.5 text-[45px] rounded-lg text-inactive_icon" />
              </motion.a>
            </div>
          </div>
          <ProfileName />
        </div>
      </div>
      <ProfileCreds />
      <ProfileContact />
    </motion.div>
  );
};

export default Profile;
