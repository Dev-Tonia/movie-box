import Logo from "../../public/images/Logo.png";
import { RiSearchLine } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";

const NavBar = () => {
  return (
    <>
      <nav className="py-4 font-DM-Sans absolute top-0 left-0 right-0">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center ">
            <div className="logo">
              <img src={Logo} alt="" className="" />
            </div>
            <div className=" border flex justify-between items-center w-96 py-1.5 px-2.5 rounded-md border-gray-300">
              <input
                type="text"
                placeholder="What do you want to watch?"
                className="w-full bg-transparent border-none outline-none placeholder:text-gray-200 text-gray-200"
              />
              <RiSearchLine className=" cursor-pointer text-white" />
            </div>
            <div className="flex items-center justify-between space-x-3">
              <a href="#" className="text-white">
                Sign in
              </a>
              <div className=" bg-rose h-8 w-8 flex items-center justify-center rounded-full">
                <HiMenuAlt4 className=" text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
