import LeftSideBar from "./components/LeftSideBar";
import MainComponent from "./components/MainComponent";
import RightSideBar from "./components/RightSideBar";


const Home = () => {
  return (
    <div className="sticky w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSideBar />
        <MainComponent />
        <RightSideBar />        
      </div>
    </div>
  );
};

export default Home;