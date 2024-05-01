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
            className="p-4 hover:bg-active_button_bg transition-background bg-contact_bg text-center justify-center font-[500] flex items-center gap-1 text-gray_text border-2 border-border rounded-lg"
          >
            <p className="text-icon text-[20px]">{icon}</p>
            <p className="text-[15px]">{contact}</p>
          </a>
        ))}
      </div>
      <a
        download
        href={Resume}
        target='_blank'
        className="w-[95%] text-center md:hidden flex items-center justify-center gap-3 mx-auto mt-2 p-2 hover:bg-resume_hover_bg transition-background bg-contact_bg rounded-lg text-gray_text border-2 border-border"
      >
        Resume
        <IoDownload className="bg-resume_bg p-2.5 text-[40px] rounded-lg text-gray_text" />
      </a>
    </>
  );
};

export default ProfileContact;
