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


  return (
    <div className="p-6 space-y-6">
       <TimeRangeFilter selectedRange={selectedRange} onChange={setSelectedRange} />
      {/* KPI Cards */}
  <div className="grid grid-cols-3 gap-4">
  {aggregatedKPIs.map((kpi) => (
    <KPICard key={kpi.title} title={kpi.title} value={kpi.value} />
  ))}
</div>


      {/* Charts */}
    <RevenueExpensesLineChart range={selectedRange} />

     <ExpensesPieChart range={selectedRange} />


      {/* Transactions Table */}
     <TransactionsTable range={selectedRange} />

    </div>
  );
};

export default Dashboard;
