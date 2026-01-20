import { useState } from "react";
import KPICard from "../components/cards/KPICard";
import { kpisByRange } from "../data/mockKPIs";
import RevenueExpensesLineChart from "../components/charts/RevenueExpenesesLineChart";
import ExpensesPieChart from "../components/charts/ExpensesPieChart";
import TransactionsTable from "../components/tables/TransactionsTable";
import TimeRangeFilter from "../components/filters/TimeRangeFilterProps";

type DashboardProps = {
  darkMode: boolean;
};

const Dashboard = ({ darkMode }: DashboardProps) => {
  const [selectedRange, setSelectedRange] = useState<"Today" | "Week" | "Month" | "Year">("Month");
  const aggregatedKPIs = kpisByRange[selectedRange];

  const handleExport = () => {
    console.log("Exporting dashboard data...");
    alert("Export functionality is mocked for MVP");
  };

  return (
    <div className={`space-y-8 ${darkMode ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>
      {/* Time Range Filter + Export button */}
      <div className="flex justify-between items-center">
        <TimeRangeFilter selectedRange={selectedRange} onChange={setSelectedRange}  darkMode={darkMode}  />
        <button
          onClick={handleExport}
          className={` bg-[#10b981] hover:bg-[#059669] text-white  px-4 py-2 rounded shadow transition`}
        >
          Export CSV / PDF
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {aggregatedKPIs.map((kpi) => (
          <KPICard key={kpi.title} title={kpi.title} value={kpi.value}  darkMode={darkMode}/>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-96">
          <RevenueExpensesLineChart range={selectedRange}  darkMode={darkMode} />
        </div>
        <div className="h-96">
          <ExpensesPieChart range={selectedRange} darkMode={darkMode} />
        </div>
      </div>

      {/* Transactions Table */}
      <TransactionsTable range={selectedRange} darkMode={darkMode} />
    </div>
  );
};

export default Dashboard;
