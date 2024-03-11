import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  return (
    <section className="w-screen h-screen bg-white relative">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes className="absolute top-1 right-1" />
        </button>
        <div className=""></div>
      </div>
    </section>
  );
};
export default Sidebar;
