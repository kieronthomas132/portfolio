import { useState } from "react";
const Nav = () => {
  const url = location.pathname
  const [active, setActive] = useState(url)

  const navOptions = [
    {
      nav: "About",
      link: "/",
    },
    {
      nav: "Work",
      link: "/projects",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center mt-[20px] sm:w-[530px] w-[95%]  p-1.5 border-2 border-[#191919] rounded-2xl justify-center gap-[20px] sm:gap-[70px] bg-[#101010]">
        {navOptions.map(({ nav, link }) => (
          <a href={link} onClick={() => setActive(link)}>
            <button
              className={`${link === active ? "bg-[#A290FC] text-black" : "bg-[#191919] text-white"} w-[150px] p-3 transition-colors text-center border-2 border-[#1F1F1F] rounded-lg`}
            >
              {nav}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
