interface KPICardProps {
  title: string;
  value?: number;
  darkMode?: boolean; // dark mode prop
  currency?: string; // optional currency symbol, default "$"
}

const KPICard = ({
  title,
  value,
  darkMode = false,
  currency = "$",
}: KPICardProps) => {
  return (
    <div
      className={`shadow rounded p-4 flex flex-col justify-between transition-colors
        ${darkMode ? "bg-[#1e293b] border border-[#334155]" : "bg-[#f8fafc] border border-[#e2e8f0]"}`}
    >
      <p
        className={`text-sm font-medium ${
          darkMode ? "text-[#94a3b8]" : "text-[#64748b]"
        }`}
      >
        {title}
      </p>
      <p
        className={`text-2xl font-bold ${
          darkMode ? "text-[#f1f5f9]" : "text-[#0f172a]"
        }`}
      >
        {value !== undefined
          ? `${currency}${value.toLocaleString()}`
          : "—"}
      </p>
    </div>
  );
};

export default KPICard;
