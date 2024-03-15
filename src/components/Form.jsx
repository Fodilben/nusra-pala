const Form = () => {
  return (
    <form className="flex flex-col gap-[23px] my-[22px]">
      <input
        type="text"
        placeholder="الاسم الكامل"
        className="input input-bordered w-full max-w-lg border-secondary text-right"
      />
      <input
        type="email"
        placeholder="عنوان البريد الالكتروني"
        className="input input-bordered w-full max-w-lg text-right "
      />
      <input
        type="text"
        placeholder="رقم الهاتف"
        className="input input-bordered w-full max-w-lg text-right"
      />
      <textarea
        className="textarea textarea-bordered min-h-[180px] text-right"
        placeholder="الرسالة"
      ></textarea>
      <button className="btn btn-primary text-white">ارسال </button>
    </form>
  );
};
export default Form;
