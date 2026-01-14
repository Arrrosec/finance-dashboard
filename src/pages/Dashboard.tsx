import KPICard from "../components/cards/KPICard";
import { kpis } from "../data/mockKPIs";
import RevenueExpensesLineChart from "../components/charts/RevenueExpenesesLineChart";
import ExpensesPieChart from "../components/charts/ExpensesPieChart";
import TransactionsTable from "../components/tables/TransactionsTable";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} title={kpi.title} value={kpi.value} />
        ))}
      </div>

      {/* Charts */}
      <RevenueExpensesLineChart />
      <ExpensesPieChart />

      {/* Transactions Table */}
      <TransactionsTable />
    </div>
  );
};

export default Dashboard;
