import Poster from "../../public/images/Poster.png";
import NavBar from "./NavBar";
import fruit from "../../public/images/fruit.png";
import imob from "../../public/images/imob.png";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <header className="relative">
      <NavBar className="" />
      <div
        className="h-screen bg-no-repeat bg-center	bg-cover	"
        style={{
          backgroundImage: `url(${Poster})`,
        }}
      >
        <div className="w-11/12 mx-auto">
          <div className="flex items-center h-screen">
            <div className=" text-white w-[404px]">
              <h1 className="text-5xl font-bold leading-[56px]">
                John Wick 3 : Parabellum
              </h1>
              <div className="rating flex items-center space-x-9 mt-4">
                <div className="flex items-center space-x-2">
                  <img src={imob} alt="" />
                  <span className=" text-xs">86.0/100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={fruit} alt="" />
                  <span className="text-xs">97%</span>
                </div>
              </div>
              <p className=" font-medium text-sm w-9/12 mt-4">
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
              <button className="flex items-center space-x-2 bg-rose mt-3 px-4 py-2 rounded-[0.375rem] font-bold">
                <AiFillPlayCircle />
                <span>WATCH TRAILER</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
