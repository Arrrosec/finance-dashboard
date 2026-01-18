import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import ChartCard from "../cards/ChartCard";
import { revenueExpensesData } from "../../data/mockChatData";
import { formatXAxisLabel, getChartTitle } from "../../utils/DateFormatter";

interface Props {
  range:  "Today"| "Week" | "Month" | "Year";
}

const RevenueExpensesLineChart = ({ range }: Props) => {
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
    },

    title: {
      text: getChartTitle(range),
      align: "left",
    },

   xaxis: {
  categories: selectedData?.categories,
  labels: {
    formatter: (val: string | number) => String(formatXAxisLabel(String(val), range)),
  },
},


    tooltip: {
      x: {
        formatter: (val) =>
          new Date(String(val)).toLocaleDateString([], {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
      },
    },

    stroke: { curve: "smooth" },
    colors: ["#3B82F6", "#EF4444"],
    legend: { position: "top" },
    dataLabels: { enabled: false },
  };

  return (
    <ChartCard title="Revenue vs Expenses" empty={empty}>
      {!empty && (
        <ReactApexChart
          options={options}
          series={selectedData.series}
            type="area"  // <-- change from "line" to "area"
          height="100%"
        />
      )}
    </ChartCard>
  );
};

export default RevenueExpensesLineChart;
