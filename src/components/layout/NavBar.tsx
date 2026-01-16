

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  pageTitle: string;
}

const Navbar = ({ darkMode, toggleDarkMode, pageTitle }: NavbarProps) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow flex justify-between items-center h-16 px-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        {pageTitle}
      </h1>

      <div className="flex items-center gap-4">
        {/* You can add filters or export button here if needed */}
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