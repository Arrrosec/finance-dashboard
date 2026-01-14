
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts"; // <-- type-only import
import { revenueExpensesData } from "../../data/mockChatData";

const RevenueExpensesLineChart = () => {
  const options: ApexOptions = {
    chart: {
      id: "revenue-expenses",
      toolbar: { show: false },
    },
    xaxis: {
      categories: revenueExpensesData.categories,
    },
    stroke: { curve: "smooth" },
    colors: ["#3B82F6", "#EF4444"], // Blue revenue, Red expenses
    grid: { row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 } },
    legend: { position: "top" },
    dataLabels: { enabled: false },
  };

  const series = revenueExpensesData.series;

  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-bold mb-2">Revenue vs Expenses (Last 12 Months)</h3>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default RevenueExpensesLineChart;
