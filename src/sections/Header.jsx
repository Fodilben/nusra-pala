import { useContext, useState } from "react";
import { logo } from "../assets";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../components/Context";
const Header = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <header className="px-4 bg-base-100   w-full h-auto rounded-b-xl absolute z-10">
      {isSidebarOpen ? (
        <Sidebar className="text-xl" />
      ) : (
        <nav className="flex justify-between  items-center max-container ">
          <a href="/">
            <img src={logo} alt="logo" className="h-[80px]  rounded-full" />
          </a>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-primary">تعرف علينا</button>
            <button className="btn btn-outline btn-primary"> تواصل معنا</button>
          </div>
          <div onClick={openSidebar}>
            {isSidebarOpen || (
              <button className="text-2xl ">
                <FaBars className="w-[80px]" />
              </button>
            )}
          </div>

          {/* <img
            src={arabiclang ? arabic : logo}
            alt="langToggle"
            className="w-[80px]"
          /> */}
        </nav>
      )}
    </header>
  );
};

export default Header;
