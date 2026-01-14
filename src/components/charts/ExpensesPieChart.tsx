
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { expensesByCategory } from "../../data/mockExpeneses";

const ExpensesPieChart = () => {
  const series = expensesByCategory.map((e) => e.value);
  const labels = expensesByCategory.map((e) => e.category);

  const options: ApexOptions = {
    chart: { type: "donut" },
    labels: labels,
    colors: ["#3B82F6", "#EF4444", "#F59E0B", "#10B981"],
    legend: { position: "bottom" },
    dataLabels: { enabled: true },
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-bold mb-2">Expenses by Category</h3>
      <ReactApexChart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default ExpensesPieChart;
