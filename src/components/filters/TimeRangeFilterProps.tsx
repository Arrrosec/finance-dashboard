interface TimeRangeFilterProps {
  selectedRange: "Today" | "Week" | "Month" | "Year"; // strict type
  onChange: (range: "Today" | "Week" | "Month" | "Year") => void;
}

const ranges: TimeRangeFilterProps["selectedRange"][] = ["Today", "Week", "Month", "Year"];

const TimeRangeFilter = ({ selectedRange, onChange }: TimeRangeFilterProps) => {
  return (
    <div className="flex space-x-2">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => onChange(range)}
          className={`px-4 h-10 rounded text-sm font-medium flex items-center justify-center ${
            selectedRange === range
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300:bg-gray-600"
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeFilter;
