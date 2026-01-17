import { useState } from "react";
import KPICard from "../components/cards/KPICard";
import { kpisByRange } from "../data/mockKPIs";
import RevenueExpensesLineChart from "../components/charts/RevenueExpenesesLineChart";
import ExpensesPieChart from "../components/charts/ExpensesPieChart";
import TransactionsTable from "../components/tables/TransactionsTable";
import TimeRangeFilter from "../components/filters/TimeRangeFilterProps";

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState<"Today" | "Week" | "Month" | "Year">("Month");
  const aggregatedKPIs = kpisByRange[selectedRange];

  const handleExport = () => {
    console.log("Exporting dashboard data...");
    alert("Export functionality is mocked for MVP");
  };

  return (
    <div className="space-y-8">
      {/* Time Range Filter + Export button can stay inside the page if you want per-page controls */}
      <div className="flex justify-between items-center">
        <TimeRangeFilter selectedRange={selectedRange} onChange={setSelectedRange} />
        <button
          onClick={handleExport}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        >
          Export CSV / PDF
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {aggregatedKPIs.map((kpi) => (
          <KPICard key={kpi.title} title={kpi.title} value={kpi.value} />
        ))}
      </div>
        {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-96">
          <RevenueExpensesLineChart range={selectedRange} />
        </div>
        <div className="h-96">
          <ExpensesPieChart range={selectedRange} />
        </div>
      </div>

      {/* Transactions Table */}
      <TransactionsTable range={selectedRange} />
    </div>
  );
};

export default Dashboard;
