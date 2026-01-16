interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  pageTitle: string;
  toggleSidebar: () => void; // new prop
}

const Navbar = ({ darkMode, toggleDarkMode, pageTitle, toggleSidebar }: NavbarProps) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow flex justify-between items-center h-16 px-6">
      
      <div className="flex items-center gap-4">
        {/* Sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          ☰
        </button>

        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded text-gray-800 dark:text-white"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
