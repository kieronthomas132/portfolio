import CardHeader from "../../CardHeader/CardHeader.tsx";
import { motion } from "framer-motion";
import { RiContactsBookFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const contact = [
    {
      contact: "Email",
      link: import.meta.env.VITE_EMAIL,
      icon: <MdEmail />,
    },
    {
      contact: "WhatsApp",
      link: import.meta.env.VITE_WHATSAPP_NUMBER,
      icon: <IoLogoWhatsapp />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4 } }}
      className="2xl:w-[370px] 2xl:h-[270px] lg:w-[1010px] md:w-[60%] w-[95%] text-center mt-[10px] mb-8 2xl:mb-0 p-3 rounded-3xl bg-[#101010] relative border-2 border-[#191919]"
    >
      <CardHeader
        headerTitle={"Contact"}
        headerSubHeading={"Get In Touch"}
        headerIcon={<RiContactsBookFill />}
      />
      <ul className="h-[170px] flex flex-col items-center justify-center gap-5">
        {contact.map(({ contact, link, icon }) => (
          <a
            target="_blank"
            href={link}
            className="bg-[#191919] w-full text-start p-3 text-[#919191] hover:text-[#CCCCCC] transition-colors rounded-xl border-2 border-[#212121]"
          >
            <li className="flex items-center gap-3 text-[17px]">
              <p>{icon}</p>
              <p>{contact}</p>
            </li>
          </a>
        ))}
      </ul>
    </motion.div>
  );
};

export default Contact;
