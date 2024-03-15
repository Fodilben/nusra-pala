import { useContext } from "react";
import { useGlobalContext } from "./Context";
import { navLinks } from "../constants";
import ThemToggling from "./ThemToggling";
import LanToggling from "./LanToggling";
import ClosingIcon from "./ClosingIcon";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <section className="w-screen h-screen bg-base-100 absolute z-20 py-20 top-0 left-0">
      <button className="text-2xl " onClick={closeSidebar}>
        {isSidebarOpen && <ClosingIcon className="absolute top-7 right-7 " />}
      </button>
      <div className="">
        <ul className="">
          {navLinks.map((navLink, index) => {
            return (
              <li
                key={index}
                className="border-b-2 border-0 border-solid py-4 px-4 border-b-gray-300 "
              >
                <a href={navLink.href} className=" ">
                  <p className="text-right text-xl text-secondary ">
                    {navLink.label}
                  </p>
                </a>
              </li>
            );
          })}
          <li className="border-b-2 border-0 border-solid py-4 px-4 border-b-gray-300 ">
            <div className="flex justify-between items-center">
              <ThemToggling />
              <p className="text-right text-xl text-secondary ">الوضع الداكن</p>
            </div>
          </li>
          <li className="border-b-2 border-0 border-solid py-4 px-4 border-b-gray-300 ">
            <div className="flex justify-between items-center">
              <LanToggling />
              <p className="text-right text-xl text-secondary ">اللغة</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Sidebar;
