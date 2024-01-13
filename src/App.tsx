import "./index.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Header from "./components/Header/Header.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";
import {useTheme} from "next-themes";
import {useEffect} from "react";

const App = () => {
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setTheme("dark")
    }, [])

  return (
    <div className={`${theme === "dark" ? "bg-[#161513]" : "bg-[#E7F9FF]"} h-[100%] transition-all ease-in-out duration-300 text-white font-inter`}>
      <Navbar />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
