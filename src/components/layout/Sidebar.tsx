import { NavLink } from "react-router-dom";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col min-h-screen">
      {/* Logo / App Name */}
      <div className="text-2xl font-bold p-4 text-gray-800 dark:text-white">
        FinanceApp
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-2 mt-4 flex-1">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-left px-4 py-2 rounded mb-1 w-full ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
