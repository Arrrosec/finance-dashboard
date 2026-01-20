import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import ChartCard from "../cards/ChartCard";
import { revenueExpensesData } from "../../data/mockChatData";
import { formatXAxisLabel, getChartTitle } from "../../utils/DateFormatter";

interface Props {
  range: "Today" | "Week" | "Month" | "Year";
  darkMode?: boolean;
}

const RevenueExpensesLineChart = ({ range, darkMode = false }: Props) => {
  const dataMap = {
    Today: revenueExpensesData.today,
    Week: revenueExpensesData.week,
    Month: revenueExpensesData.month,
    Year: revenueExpensesData.year,
  };

  const selectedData = dataMap[range];
  const empty = !selectedData;

  const options: ApexOptions = {
    chart: {
      id: "revenue-expenses",
      toolbar: { show: false },
      background: darkMode ? "#1e293b" : "#ffffff", // card bg
      foreColor: darkMode ? "#cbd5e1" : "#0f172a",  // axis text
    },
    title: {
      text: getChartTitle(range),
      align: "left",
      style: {
        color: darkMode ? "#cbd5e1" : "#0f172a", // light gray in dark mode
        fontWeight: 600,
      },
    },
    xaxis: {
      categories: selectedData?.categories,
      labels: {
        formatter: (val: string | number) =>
          String(formatXAxisLabel(String(val), range)),
        style: {
          colors: darkMode ? "#cbd5e1" : "#64748b",
        },
      },
      axisBorder: {
        show: true,
        color: darkMode ? "#334155" : "#e2e8f0",
      },
      axisTicks: {
        show: true,
        color: darkMode ? "#334155" : "#e2e8f0",
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
        style: {
          colors: darkMode ? "#cbd5e1" : "#64748b",
        },
      },
    },
   tooltip: {
  theme: darkMode ? "dark" : "light",
  style: {
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
  },
  marker: { show: true },
  x: {
    formatter: (val) =>
      new Date(String(val)).toLocaleDateString([], {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
  },
  y: {
    formatter: (val: number) => `$${val.toLocaleString()}`,
  },
},

    stroke: { curve: "smooth" },
    colors: ["#3b82f6", "#f59e0b"], // Revenue blue, Expenses orange
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.3,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    legend: {
      position: "top",
      labels: {
        colors: darkMode ? "#cbd5e1" : "#0f172a",
      },
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: darkMode ? "#334155" : "#e2e8f0",
    },
  };

  return (
    <ChartCard title="Revenue vs Expenses" empty={empty} darkMode={darkMode} >
      {!empty && (
        <ReactApexChart
          options={options}
          series={selectedData.series}
          type="area"
          height="100%"
        />
      )}
    </ChartCard>
  );
};

export default RevenueExpensesLineChart;
