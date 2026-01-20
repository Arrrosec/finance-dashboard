interface TimeRangeFilterProps {
  selectedRange: "Today" | "Week" | "Month" | "Year";
  onChange: (range: "Today" | "Week" | "Month" | "Year") => void;
  darkMode?: boolean; // optional darkMode prop
}

const ranges: TimeRangeFilterProps["selectedRange"][] = ["Today", "Week", "Month", "Year"];

const TimeRangeFilter = ({ selectedRange, onChange, darkMode = false }: TimeRangeFilterProps) => {
  return (
    <div className="flex space-x-2">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => onChange(range)}
          className={`px-4 h-10 rounded text-sm font-medium flex items-center justify-center transition-colors
            ${
              selectedRange === range
                ? darkMode
                  ? "bg-[#10b981] text-white" // desaturated emerald active for dark mode
                  : "bg-emerald-500 text-white" // vibrant emerald for light mode
                : darkMode
                ? "bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]" // dark slate background + muted text, hover slightly lighter
                : "bg-gray-200 text-gray-700 hover:bg-gray-300" // light mode inactive
            }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeFilter;
