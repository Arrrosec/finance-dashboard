import KPICard from "../components/cards/KPICard";
import RevenueExpensesLineChart from "../components/charts/RevenueExpenesesLineChart";
import TransactionsTable from "../components/tables/TransactionsTable";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <KPICard />
        <KPICard />
        <KPICard />
      </div>

      <RevenueExpensesLineChart />

      <TransactionsTable />
    </div>
  );
};

export default Dashboard;
