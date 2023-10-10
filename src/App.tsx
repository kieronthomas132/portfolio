import "./index.css";
import Nav from "./components/Nav/Nav.tsx";
import Small_Nav from "./components/SmallNav/Small_Nav.tsx";
import logo from "./assets/logo.png";
import {routes} from './components/routes/routes.tsx'
import { Routes, Route } from "react-router";
import BlurHeader from "./components/Blur/BlurHeader.tsx";
import Footer from "./components/Footer/Footer.tsx";
import BlurFooter from "./components/Blur/BlurFooter.tsx";
const App = () => {

  return (
    <div className="relative overflow-x-hidden bg-main-bg">
      <img
        src={logo}
        className="mx-auto flex items-center justify-center text-center w-[100px] md:hidden"
        alt="logo"
      />
      <BlurHeader />
      <div className="hidden md:flex">
        <Nav />
      </div>
      {routes.map((route, index) => (
        <Routes key={index}>
          <Route path={route.path} element={route.element} />
        </Routes>
      ))}
      <div className="flex md:hidden">
        <Small_Nav />
      </div>
      <Footer />
        <BlurFooter/>
    </div>
  );
};

export default App;
