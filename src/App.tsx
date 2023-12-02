import "./index.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Header from "./components/Header/Header.tsx";
import Under_Header from "./components/Under_Header/Under_Header.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Connect from "./components/Connect/Connect.tsx";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Cat from "./components/Cat/Cat.tsx";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {showScroll && (
        <span
          className="fixed hidden md:block z-20 right-[50px] bottom-[30px] text-3xl border border-[#7027BA] hover:text-white hover:border-white transition-ease duration-500 rounded-full p-2 text-[#7027BA] cursor-pointer"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </span>
      )}
      <Navbar />
      <Header />
      <Under_Header />
      <Skills />
      <Projects />
      <Connect />
      <Cat />
    </div>
  );
};

export default App;
