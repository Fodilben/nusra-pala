import { useState } from "react";
import { logo, arabic } from "../assets";
const Header = () => {
  const { arabiclang, useArabiclang } = useState(true);
  return (
    <header className="px-4  bg-white w-full h-auto rounded-b-xl">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={logo} alt="logo" className="h-[80px]  rounded-full" />
        </a>
        <button onClick={() => useArabiclang(!arabiclang)}>
          <img src={arabic} alt="langToggle" className="w-[80px]" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
