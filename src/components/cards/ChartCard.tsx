import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  empty?: boolean;
  emptyMessage?: string;
  darkMode?: boolean;
}

const ChartCard = ({
  title,
  children,
  empty = false,
  emptyMessage = "No data available",
  darkMode = false,
}: ChartCardProps) => {
  return (
    <div
      className={`shadow rounded p-4 h-full flex flex-col transition-colors
        ${darkMode ? "bg-[#1e293b] border border-[#334155]" : "bg-white border border-[#e2e8f0]"}`}
    >
      <h3
        className={`text-lg font-bold mb-2 ${
          darkMode ? "text-[#cbd5e1]" : "text-[#0f172a]"
        }`}
      >
        {title}
      </h3>
      <div className="flex-1 flex items-center justify-center">
        {empty ? (
          <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>{emptyMessage}</p>
        ) : (
          <div className="w-full h-full">{children}</div>
        )}
      </div>
    </div>
  );
};

export default ChartCard;
