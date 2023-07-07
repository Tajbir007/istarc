import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const handleIcon = () => {
    setIcon(!icon);
  };

  return (
    <div className="fixed  w-full bg-gray-100 z-[999]">
      <div className="flex justify-between items-center container_fluid">
        <div>
          <a href="/">
            <div className="flex items-center gap-5 p-2 w-full text-xl font-bold text-black cursor-pointer">
              <img className=" w-16 lg:w-[75px] rounded-full" src={logo} alt="" />
              <p className=" hidden lg:inline-block font-extrabold lg:text-xl xl:text-3xl">
                Ideal Science and Technology <br /> Aiming Research Council
              </p>
            </div>
          </a>
        </div>
        <ul className="hidden md:flex font-bold space-x-8">
          <a href="/">
            <li className="menu_items">Home</li>
          </a>
          <a href="#about">
            <li className="menu_items">About</li>
          </a>
          <a href="#history">
            <li className="menu_items">History</li>
          </a>
          <a href="#executives">
            <li className="menu_items">Executives</li>
          </a>
          <a href="#gallery">
            <li className="menu_items">Gallery</li>
          </a>
          <a href="#contact">
            <li className="menu_items">Contact</li>
          </a>
        </ul>
        <div onClick={handleIcon} className="block md:hidden">
          {icon ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>

        <ul
          className={
            icon
              ? "fixed right-0 shadow-custom2 w-[40vw] md:w-3/4 bg-white overflow-hidden top-14 text-sm duration-500"
              : "ease-in-out duration-500 fixed top-14 right-[-100%]"
          }
        >
          <a href="/">
            <li className="p-4 border-b border-gray-600/20 hover:bg-slate-500 hover:text-white">Home</li>
          </a>
          <a href="#about">
            <li className="p-4 border-b border-gray-600/20 hover:bg-slate-500 hover:text-white">About Us</li>
          </a>
          <a href="#history">
            <li className="p-4 border-b border-gray-600/20 hover:bg-slate-500 hover:text-white">History</li>
          </a>
          <a href="#executives">
            <li className="p-4 border-b border-gray-600/20 hover:bg-slate-500 hover:text-white">Executives</li>
          </a>
          <a href="#gallery">
            <li className="p-4 border-b border-gray-600/20 hover:bg-slate-500 hover:text-white">Gallery</li>
          </a>
          <a href="#contact">
            <li className="p-4 border-b border-gray-600/20 hover:bg-slate-500 hover:text-white">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
