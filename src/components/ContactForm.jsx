import Form from "./Form";
import SocialSection from "./SocialSection";
import Title from "./TitleGlobal";

const ContactForm = () => {
  return (
    <section>
      <p className="text-secondary text-xl text-center mt-6 mb-3.5">أو</p>
      <Title text="ارسل رسالة" />
      <Form />
      <SocialSection />
    </section>
  );
};
export default ContactForm;
