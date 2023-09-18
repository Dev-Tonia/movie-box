import React from "react";
import logoBlack from "../../public/images/Logo-black.png";
import Home from "../../public/images/Home.png";
import MovieProjector from "../../public/images/Movie Projector.png";
import TvShow from "../../public/images/TV Show.png";
import Calendar from "../../public/images/Calendar.png";
import Logout from "../../public/images/Logout.png";
import { HiMenuAlt4 } from "react-icons/hi";

function MenuBar() {
  return (
    <div className="">
      <nav className=" hidden md:block w-52 border rounded-r-[45px] py-11 bg-white overflow-hidden">
        <div className="px-8 mb-8">
          <img
            className=" h-10 w-full object-contain"
            src={logoBlack}
            alt="Movie Logo Black"
          />
        </div>
        <ul className="flex flex-col items-center">
          <li className=" flex items-center px-10 text-gray-500 gap-2 cursor-pointer w-full">
            <div>
              <img className="nav-icons" src={Home} alt="Home Icon" />
            </div>
            <p className="nav-name">Home</p>
          </li>
          <li className="active flex items-center text-gray-500 gap-2  cursor-pointer px-10  w-full">
            <div>
              <img
                className="nav-icons"
                src={MovieProjector}
                alt="MovieProjector Icon"
              />
            </div>
            <p className="nav-name ">Movies</p>
          </li>
          <li className=" flex items-center px-10 text-gray-500 gap-2 cursor-pointer w-full">
            <div>
              <img className="nav-icons" src={TvShow} alt="TvShow Icon" />
            </div>
            <p className="nav-name">TV Series</p>
          </li>

          <li className=" flex items-center px-10 text-gray-500 gap-2 cursor-pointer w-full">
            <div>
              <img className="nav-icons" src={Calendar} alt="Calendar Icon" />
            </div>
            <p className="nav-name">Upcoming</p>
          </li>
        </ul>
        <div className=" w-2/3 mx-auto pt-8 bg-[#f8e7eb67] rounded-2xl border border-rose text-center mt-10">
          <div className="">
            <p className=" text-xs font-semibold mb-2">
              Play movie quizes and earn free tickets
            </p>
            <p className=" text-xs">50k people are playing now</p>
          </div>

          <div className=" mb-3">
            <button className="text-rose text-[12px]  border-none rounded-[48px] py-1 px-2 bg-[#be123d23] font-semibold">
              Start playing
            </button>
          </div>
        </div>

        <div className=" flex items-center px-10 text-gray-500 gap-2 cursor-pointer w-full">
          <div>
            <img className="nav-icons" src={Logout} alt="LogoutIcon" />
          </div>
          <p className="nav-name">Log out</p>
        </div>
      </nav>
      <nav className=" md:hidden">
        <div className=" bg-rose h-8 w-8 flex items-center justify-center rounded-full">
          <HiMenuAlt4 className=" text-white text-xl" />
        </div>
      </nav>
    </div>
  );
}

export default MenuBar;
