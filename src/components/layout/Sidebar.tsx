import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

// Import your logo image here
import logo from "../../assets/Screenshot_2026-01-20_134418-removebg-preview.png";

type SidebarProps = {
  darkMode: boolean;
};

const Sidebar = ({ darkMode }: SidebarProps) => {
  const links = [
    { name: "Dashboard", path: "/", icon: "home" },
    { name: "Reports", path: "/reports", icon: "bar-chart-2" },
    { name: "Settings", path: "/settings", icon: "settings" },
  ];

  return (
    <aside
      className={`w-64 border-r transition-colors flex flex-col
        ${darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200 text-black"}`}
    >
      {/* Logo */}
      <div
        className={`flex items-center gap-2 px-4 py-4 font-bold text-2xl ${
          darkMode ? "text-[#10b981]" : "text-black"
        }`}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
        >
          <img src={logo} alt="Fynix Logo" className="w-full h-full object-cover" />
        </div>
        <span>Fynix</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-2 mt-2 flex-1">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => {
              // Classes for the NavLink container
              const linkClasses = `group relative flex items-center gap-3 px-4 py-2 rounded-md mb-1 w-full transition-colors border-l-4 ${
                isActive
                  ? darkMode
                    ? "bg-[#10b981] text-white border-[#10b981]"
                    : "bg-emerald-100 text-emerald-700 border-emerald-600"
                  : darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-800 border-transparent"
                  : "text-black hover:text-emerald-700 hover:bg-emerald-100 border-transparent"
              }`;

              // Classes for the icon
              const iconClass = `shrink-0 ${
                isActive
                  ? darkMode
                    ? "text-white"
                    : "text-emerald-700"
                  : darkMode
                  ? "text-gray-400 group-hover:text-white"
                  : "text-black group-hover:text-emerald-700"
              }`;

              return `${linkClasses} ${iconClass}`;
            }}
          >
            <FeatherIcon icon={link.icon} size={18} />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
