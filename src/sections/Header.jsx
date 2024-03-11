import { useState } from "react";
import { logo } from "../assets";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 bg-white w-full h-auto rounded-b-xl">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={logo} alt="logo" className="h-[80px]  rounded-full" />
        </a>
        <div onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="w-[80px]" />
        </div>
        {/* <img
            src={arabiclang ? arabic : logo}
            alt="langToggle"
            className="w-[80px]"
          /> */}
        {isOpen && <Sidebar />}
      </nav>
    </header>
  );
};

export default Header;
