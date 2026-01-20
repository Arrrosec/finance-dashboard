import FeatherIcon from "feather-icons-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  pageTitle: string;
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Navbar = ({
  darkMode,
  toggleDarkMode,
  pageTitle,
  toggleSidebar,
  sidebarOpen,
}: NavbarProps) => {
  const headerBg = darkMode ? "bg-gray-900" : "bg-white";
  const headerText = darkMode ? "text-gray-100" : "text-gray-900";
  const btnBg = darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300";
  const btnText = darkMode ? "text-gray-100" : "text-gray-900";

  return (
    <header
      className={`${headerBg} shadow flex justify-between items-center h-16 px-6 transition-colors duration-300`}
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          className={`${btnBg} ${btnText} p-2 rounded transition-colors duration-200`}
        >
          <FeatherIcon icon={!sidebarOpen ? "x" : "menu"} size={20} />
        </button>

        <h1 className={`text-2xl font-bold ${headerText}`}>{pageTitle}</h1>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className={`${btnBg} ${btnText} p-2 rounded transition-colors duration-200`}
        >
          <FeatherIcon icon={darkMode ? "moon" : "sun"} size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
