import React from "react";
import Title from "../components/TitleGlobal";

const AboutUs = () => {
  return (
    <div className=" text-center py-8 inline-flex gap-[18px] flex-col section-padding">
      <Title text="معلومات عنا" />
      <p className="text-primary-content text-[22px]">
        نصرة عبارة عن مجتمع الكتروني متكون من كل من لديهم هدف نصرة القضية
        الفلسطينية من اجل ايجاد طرق المساهمة في الدعم على حسب مهارات كل فرد
      </p>
    </div>
  );
};

export default AboutUs;
