
interface TimeRangeFilterProps {
  selectedRange: "Today" | "Week" | "Month" | "Year"; // <- strict type
  onChange: (range: "Today" | "Week" | "Month" | "Year") => void; // <- matches setSelectedRange
}


const ranges: TimeRangeFilterProps["selectedRange"][] = ["Today", "Week", "Month", "Year"];


const TimeRangeFilter = ({ selectedRange, onChange }: TimeRangeFilterProps) => {
  return (
    <div className="flex space-x-2 mb-4">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => onChange(range)}
          className={`px-4 py-2 rounded ${
            selectedRange === range
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeFilter;
