interface SidebarProps {
  activePage?: string;
}

const Sidebar = ({ activePage = "Dashboard" }: SidebarProps) => {
  const links = ["Dashboard", "Reports", "Settings"];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col h-screen">
      {/* Logo / App Name */}
      <div className="text-2xl font-bold p-4 text-gray-800 dark:text-white">
        FinanceApp
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-2 mt-4">
        {links.map((link) => (
          <button
            key={link}
            className={`text-left px-4 py-2 rounded mb-1 w-full ${
              activePage === link
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {link}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;