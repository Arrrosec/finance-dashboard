import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./pages/ComingSoon";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <Router>
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
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/reports" element={<ComingSoon page="Reports" />} />
                <Route path="/settings" element={<ComingSoon page="Settings" />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppLayout;
