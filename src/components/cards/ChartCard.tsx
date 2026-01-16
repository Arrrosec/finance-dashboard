import type{ ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  empty?: boolean; // optional flag if no data
  emptyMessage?: string;
}

const ChartCard = ({ title, children, empty = false, emptyMessage = "No data available" }: ChartCardProps) => {
  return (
    <div className="bg-white shadow rounded p-4 h-full flex flex-col">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex-1 flex items-center justify-center">
        {empty ? (
          <p className="text-gray-400">{emptyMessage}</p>
        ) : (
          <div className="w-full h-full">{children}</div>
        )}
      </div>
    </div>
  );
};

export default ChartCard;
