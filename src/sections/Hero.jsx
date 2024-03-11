import React from "react";
import { background } from "../assets";

const Hero = () => {
  return (
    <div className="flex justify-center items-center  h-screen ">
      <div className="absolute h-full top-0 -z-10">
        <img src={background} alt="background" />
      </div>
      <div>
        <h1 className="text-4xl font-Aljazeera text-white text-center mt-10  gap-1">
          <span>نوجد </span>
          <span>لك </span>
          <span>طريق </span>
          <span>المساعدة </span>
        </h1>
        <p className="text-xl font-Aljazeera text-white text-center mt-10">
          نصرة عبارة عن مجتمع الكتروني متكون من كل من لديهم هدف نصرة القضية
        </p>
        <div className="grid justify-center items-center gap-2">
          <button className="btn btn-active btn-primary mt-5">
            إضغط للتسجيل
          </button>
          <button className="btn btn-outline btn-primary">تعرف علينا</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
