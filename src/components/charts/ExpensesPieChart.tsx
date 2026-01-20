import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { expensesByRange } from "../../data/mockExpeneses";
import ChartCard from "../cards/ChartCard";

interface Props {
  range: "Today" | "Week" | "Month" | "Year";
  darkMode?: boolean;
}

const ExpensesPieChart = ({ range, darkMode = false }: Props) => {
  const data = expensesByRange[range] || [];
  const series = data.map((item) => item.value);
  const labels = data.map((item) => item.category);
  const empty = !series.length;

  const total = series.reduce((a, b) => a + b, 0);

  // Colors for each slice
  const sliceColors = darkMode
    ? ["#3B82F6", "#8B5CF6", "#FBBF24"] // Blue, Purple, Softer Orange for dark mode
    : ["#2563EB", "#D97706", "#10B981"]; // Blue (Salaries), Amber (Marketing), Green (Operations) for light mode

  const options: ApexOptions = {
    chart: {
      type: "donut",
      background: darkMode ? "#1e293b" : "#ffffff", // <-- White for light mode
    },
    labels: labels,
    colors: sliceColors,
    legend: {
      position: "bottom",
      labels: {
        colors: darkMode ? "#cbd5e1" : "#374151",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Number(val).toFixed(1)}%`,
      style: {
        colors: ["#f1f5f9"], // always readable
        fontWeight: 600,
      },
    },
    tooltip: {
      theme: "dark", // dark theme ensures white text even in light mode
      y: {
        formatter: (val: number) => `$${Number(val).toLocaleString()}`,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
              color: darkMode ? "#cbd5e1" : "#374151",
            },
            value: {
              show: true,
              fontSize: "16px",
              color: darkMode ? "#f1f5f9" : "#0f172a",
            },
            total: {
              show: true,
              label: "Total",
              color: darkMode ? "#f1f5f9" : "#0f172a",
              formatter: () => `$${total.toLocaleString()}`,
            },
          },
        },
      },
    },
  };

  return (
    <ChartCard
      title="Expenses by Category"
      empty={empty}
      emptyMessage="No expense data available"
      darkMode={darkMode}
    >
      {!empty && (
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height="100%"
        />
      )}
    </ChartCard>
  );
};

export default ExpensesPieChart;
