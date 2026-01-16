import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { expensesByRange } from "../../data/mockExpeneses";
import ChartCard from "../cards/ChartCard";

interface Props {
  range: "Today" | "Week" | "Month" | "Year";
}

const ExpensesPieChart = ({ range }: Props) => {
  const data = expensesByRange[range] || [];
  const series = data.map((item) => item.value);
  const labels = data.map((item) => item.category);
  const empty = !series.length;

  const options: ApexOptions = {
    chart: { type: "donut" },
    labels: labels,
    colors: ["#3B82F6", "#EF4444", "#F59E0B", "#10B981", "#8B5CF6"],
    legend: { position: "bottom" },
    dataLabels: { enabled: true },
  };

  return (
    <ChartCard title="Expenses by Category" empty={empty} emptyMessage="No expense data available">
      {!empty && <ReactApexChart options={options} series={series} type="donut" height="100%" />}
    </ChartCard>
  );
};

export default ExpensesPieChart;
