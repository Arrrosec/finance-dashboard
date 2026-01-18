// src/types/chart.ts
export type ChartRange = "Today" | "Week" | "Month" | "Year";


export const formatXAxisLabel = (dateStr: string, range: ChartRange): string => {
  switch (range) {
    case "Today":
      return String(dateStr); // always string
    case "Week":
      return new Date(dateStr).toLocaleDateString([], { weekday: "short" });
    case "Month":
      return String(new Date(dateStr).getDate()); // force string
    case "Year":
      return new Date(dateStr).toLocaleDateString([], { month: "short" });
    default:
      return String(dateStr);
  }
};



export const getChartTitle = (range: ChartRange): string => {
  const now = new Date();

  switch (range) {
    case "Today":
      return `Today • ${now.toLocaleDateString([], {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}`;

    case "Week": {
      const start = new Date(now);
      start.setDate(now.getDate() - now.getDay() + 1);

      const end = new Date(start);
      end.setDate(start.getDate() + 6);

      return `This Week • ${start.getDate()}–${end.getDate()} ${start.toLocaleDateString(
        [],
        { month: "short", year: "numeric" }
      )}`;
    }

    case "Month":
      return now.toLocaleDateString([], {
        month: "long",
        year: "numeric",
      });

    case "Year":
      return "Last 12 Months";

    default:
      return "";
  }
};
