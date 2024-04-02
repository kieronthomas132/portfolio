import "./index.css";
import {Route, Routes, useLocation} from "react-router";
import Header from "./components/Header/Header.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Banner from "./components/Banner/Banner.tsx";
import Project from "./components/Project/Project.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";
import SmallNav from "./components/Navbar/SmallNav.tsx";

const App = () => {
    const location = useLocation();

    //show banner on homepage
    const showBanner = !location.pathname.includes("project");

    return (
        <div className="bg-[#DDCFBF] overflow-x-hidden font-montserrat h-full">
            <Navbar/>
            <SmallNav/>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/project/:name" element={<Project/>}/>
            </Routes>
            {/*show banner on condition */}
            {showBanner && (
                <div className="h-[200px] relative hidden 2xl:flex">
                    <Banner/>
                </div>
            )}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export default App;
