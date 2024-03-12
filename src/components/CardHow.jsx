import React from "react";

const CardHow = ({ image, title, text }) => {
  return (
    <div className="bg-orange-400 rounded-[33px] pb-4 flex flex-col gap-5 relative w-[260px]">
      <img src={image} className="h-[153px] px-2 py-4 " />
      <div className="flex flex-col gap-2 px-3 text-white">
        <h1 className="font-bold text-center text-2xl">{title}</h1>
        <p className="text-lg text-center leading-6">{text}</p>
      </div>
    </div>
  );
};

export default CardHow;
