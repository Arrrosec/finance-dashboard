
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { revenueExpensesData } from "../../data/mockChatData";

interface Props {
  range: "Today" | "Week" | "Month" | "Year";
}

const RevenueExpensesLineChart = ({ range }: Props) => {
  const now = new Date();

  const filteredIndices = revenueExpensesData.categories
    .map((dateStr, index) => {
      const date = new Date(dateStr);
      switch (range) {
        case "Today":
          return date.toDateString() === now.toDateString() ? index : -1;
        case "Week":
          const weekAgo = new Date();
          weekAgo.setDate(now.getDate() - 7);
          return date >= weekAgo && date <= now ? index : -1;
        case "Month":
          return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear() ? index : -1;
        case "Year":
          // Show last 12 months
          const yearAgo = new Date();
          yearAgo.setFullYear(now.getFullYear() - 1);
          return date >= yearAgo && date <= now ? index : -1;
        default:
          return -1;
      }
    })
    .filter((i) => i !== -1);

  const filteredCategories = filteredIndices.map((i) => revenueExpensesData.categories[i]);
  const filteredSeries = revenueExpensesData.series.map((s) => ({
    ...s,
    data: filteredIndices.map((i) => s.data[i]),
  }));

  const options: ApexOptions = {
    chart: { id: "revenue-expenses", toolbar: { show: false } },
    xaxis: { categories: filteredCategories },
    stroke: { curve: "smooth" },
    colors: ["#3B82F6", "#EF4444"],
    grid: { row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 } },
    legend: { position: "top" },
    dataLabels: { enabled: false },
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-bold mb-2">Revenue vs Expenses</h3>
      <ReactApexChart options={options} series={filteredSeries} type="line" height={350} />
    </div>
  );
};

export default RevenueExpensesLineChart;
