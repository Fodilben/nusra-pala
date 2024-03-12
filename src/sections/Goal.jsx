import React from "react";
import goal1 from "../assets/goal1.png";
import CardHow from "../components/CardHow";
const Goal = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-bold text-orange-500 text-2xl text-center">
        كيف تشارك ؟
      </h1>
      <div className="mt-5 ">
        <CardHow
          image={goal1}
          title="المشاركة في المشاريع"
          text="أيا كان تخصصك, يمكنك الدخول
و التسجيل و العمل على المشاريع
المتاحة, ستجد دائما المهمة الخاصة 
بك موجودة للمساهمة"
        />
      </div>
    </section>
  );
};

export default Goal;
