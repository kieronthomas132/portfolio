import useStore from "../zustandStore/SmallScreenStore.tsx";
import SmallHomePage from "./SmallHomePage.tsx";
import LargeHomePage from "./LargeHomePage.tsx";

const Home = () => {
  const { smallScreen } = useStore();

  return (
    <div className="font-manrope 2xl:pt-[30px] pt-[20px] 2xl:ml-[20px] overflow-y-hidden h-[100%] 2xl:h-[100vh] text-white flex">
      {!smallScreen ? <LargeHomePage /> : <SmallHomePage />}
    </div>
  );
};

export default Home;
