import React from "react";
import { background } from "../assets";
import Title from "../components/Title";

const Hero = () => {
  return (
    <div className="flex flex-col	relative items-center  h-screen ">
      <div className="absolute top-0 left-0 h-full  bg-white -z-10">
        <img src={background} alt="background" />
      </div>
      <button className=" bg-white font-bold border-orange-500 border-[3px] rounded-full py-2 px-4 text-orange-500 absolute top-[100px] left-3">
        تواصل معنا
      </button>
      <div className="w-full mt-[120px] px-10">
        <Title />

        <p className="text-xl font-Aljazeera text-white text-center -mt-3 px-8">
          مجتمع الكتروني متكون من كل من لديهم هدف نصرة القضية
        </p>
        <div className="grid justify-center items-center gap-2 mt-4">
          <button className="btn btn-active btn-primary mt-5 px-10">
            إضغط للتسجيل
          </button>
          <button className="btn btn-outline btn-primary">تعرف علينا</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
