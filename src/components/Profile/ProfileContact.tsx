import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { IoDownload } from "react-icons/io5";
import Resume from "../../../public/Kieron_Thomas_Resume.pdf";

const ProfileContact = () => {
  const contactOptions = [
    {
      contact: "Email Me",
      link: import.meta.env.VITE_EMAIL,
      icon: <MdEmail />,
    },
    {
      contact: "WhatsApp Me",
      link: import.meta.env.VITE_WHATSAPP_NUMBER,
      icon: <RiWhatsappFill />,
    },
  ];

  return (
    <>
      <div className="md:w-[95%] w-[95%] mx-auto gap-2 text-center mt-[10px] grid grid-cols-2">
        {contactOptions.map(({link, contact, icon}) => (
          <a
            href={link}
            target={contact === "WhatsApp Me" ? "_blank" : ""}
            className="p-4 hover:bg-[#1F1F1F] transition-background bg-[#141414] text-center justify-center font-[500] flex items-center gap-1 text-[#999999] border-2 border-[#191919] rounded-lg"
          >
            <p className="text-[#A18FFC] text-[20px]">{icon}</p>
            <p className="text-[15px]">{contact}</p>
          </a>
        ))}
      </div>
      <a
        download
        href={Resume}
        target='_blank'
        className="w-[95%] text-center md:hidden flex items-center justify-center gap-3 mx-auto mt-2 p-2 hover:bg-[#1F1F1F] transition-background bg-[#141414] rounded-lg text-[#999999] border-2 border-[#191919] "
      >
        Resume
        <IoDownload className="bg-[#1F1F1F] p-2.5 text-[40px] rounded-lg text-[#999999]" />
      </a>
    </>
  );
};

export default ProfileContact;
