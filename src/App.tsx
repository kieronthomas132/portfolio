import "./index.css";
import Home from "./components/Home/Home.tsx";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage.tsx";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import useStore from "./components/zustandStore/SmallScreenStore.tsx";
import Nav from "./components/Nav/Nav.tsx";

const App = () => {
  const { smallScreen, setSmallScreen } = useStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {smallScreen && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
};

export default App;
