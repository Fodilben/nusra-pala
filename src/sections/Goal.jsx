import React from "react";
import { FormattedMessage } from "react-intl";

const Goal = () => {
  return (
    <div className=" text-center py-8 inline-flex gap-[18px] flex-col section-padding">
      <h1 className=" text-primary font-medium text-2xl leading-[30.47px]">
        هدفنا
      </h1>
      <p className="text-primary-content">
        نصرة عبارة عن مجتمع الكتروني متكون من كل من لديهم هدف نصرة القضية
        الفلسطينية من اجل ايجاد طرق المساهمة في الدعم على حسب مهارات كل فرد
      </p>
    </div>
  );
};

export default Goal;
