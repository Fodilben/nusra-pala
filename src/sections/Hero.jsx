import React from "react";
import { background } from "../assets";

const Hero = () => {
  return (
    <main className="">
      <div className="absolute h-full">
        <img src={background} alt="background" />
      </div>
    </main>
  );
};

export default Hero;
