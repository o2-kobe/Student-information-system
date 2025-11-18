import { NavLink } from "react-router-dom";
import { FiHome, FiList, FiUsers, FiBook, FiClipboard } from "react-icons/fi";

const Sidebar = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `${
      isActive ? "bg-blue-400 font-bold text-white hover:text-black" : ""
    } rounded-sm px-3 py-1 text-sm hover:bg-blue-200 transition-all duration-[0.3s]`;

  const NavigationLinks = [
    { path: "/", name: "Dashboard", icon: <FiHome size={16} /> },
    { path: "/students", name: "Students", icon: <FiUsers size={16} /> },
    { path: "/departments", name: "Department", icon: <FiList size={16} /> },
    { path: "/courses", name: "Courses", icon: <FiBook size={16} /> },
    {
      path: "/registrations",
      name: "Registrations",
      icon: <FiClipboard size={16} />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-[90%] mx-auto mt-14">
      <h3 className="text-balance text-lg font-bold text-blue-400 roboto">
        Student Information System
      </h3>
      {NavigationLinks.map((link) => (
        <NavLink key={link.name} to={link.path} className={navClass}>
          <span className="flex gap-2 items-center ">
            {" "}
            {link.icon} <span>{link.name}</span>{" "}
          </span>
        </NavLink>
      ))}
    </div>
  );
};
export default Sidebar;
