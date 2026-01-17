import { useState } from "react";
import Navbar from "./components/layout/NavBar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/layout/Sidebar";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className={darkMode ? "dark min-h-screen bg-gray-900" : "min-h-screen bg-gray-50"}>
      {/* Outer flex container fills full viewport height */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        {sidebarOpen && <Sidebar />}

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleSidebar={toggleSidebar}
            pageTitle="Dashboard"
          />

          {/* Scrollable main content */}
          <main className="flex-1 p-6 overflow-auto">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
