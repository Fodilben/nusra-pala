import Title from "../components/TitleGlobal";
import PhoneSection from "../components/PhoneSection";
import ContactForm from "../components/ContactForm";
const About = () => {
  return (
    <section className="text-center pt-[80px] section-padding  inline-flex flex-col gap-[18px] ">
      <Title text="للتواصل معنا" />
      <p className=" text-secondary font-normal text-xl">
        :للمزيد من المعلومات لاتتردد في التواصل معنا عبر الأرقام التالية
      </p>
      <div className="grid place-items-center">
        <PhoneSection />
      </div>
      <ContactForm />
    </section>
  );
};
export default About;
