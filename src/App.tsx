import { useState } from "react";
import Navbar from "./components/layout/NavBar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/layout/Sidebar";
const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark min-h-screen bg-gray-900" : "min-h-screen bg-gray-50"}>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} pageTitle="Finance Dashboard" />

          <main className="p-6 flex-1 overflow-auto">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
