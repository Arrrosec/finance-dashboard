interface Props {
  transaction: any;
  selectedRow: string | null;
  selectedRows: string[];
  toggleRow: (id: string) => void;
  setSelectedRow: (id: string) => void;
  darkMode?: boolean;
}

const TransactionRow = ({
  transaction,
  selectedRow,
  selectedRows,
  toggleRow,
  setSelectedRow,
  darkMode = false,
}: Props) => {
  const rowBg = selectedRow === transaction.id
    ? darkMode
      ? "bg-[#475569]"
      : "bg-blue-50"
    : "";

  const rowHover = darkMode ? "hover:bg-[#334155]" : "hover:bg-gray-50";
  const rowText = darkMode ? "text-gray-200" : "text-gray-900";

  // Status badge styling
const statusClasses: Record<string, string> = {
  Paid: darkMode
    ? "inline-flex items-center rounded-md  bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400"
    : "inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800",
  Pending: darkMode
    ? "inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-300"
    : "inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-900",
  Failed: darkMode
    ? "inline-flex items-center rounded-md bg-red-800/30 px-2 py-1 text-xs font-medium text-red-400"
    : "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700",
  Default: darkMode
    ? "inline-flex items-center rounded-md bg-gray-700/20 px-2 py-1 text-xs font-medium text-gray-200"
    : "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700",
};




  const statusClass = statusClasses[transaction.status] || statusClasses["Default"];

  return (
    <tr
      onClick={() => setSelectedRow(transaction.id)}
      className={`transition-all duration-150 ${rowBg} ${rowHover} ${rowText}`}
    >
      <td className="px-3 py-2">
        <input
          type="checkbox"
          className="rounded-full"
          checked={selectedRows.includes(transaction.id)}
          onChange={() => toggleRow(transaction.id)}
          onClick={(e) => e.stopPropagation()}
        />
      </td>

      <td className="px-3 py-2 text-sm truncate max-w-50px">{transaction.id}</td>
      <td className="px-3 py-2 text-sm truncate max-w-150px">{transaction.customer}</td>
      <td className={`px-3 py-2 text-sm truncate max-w-100px ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
        ${transaction.amount.toLocaleString()}
      </td>

      <td className="px-3 py-2 truncate max-w-80px">
        <span className={statusClass}>{transaction.status}</span>
      </td>

      <td className="px-3 py-2 text-sm truncate max-w-120px">{transaction.date}</td>
    </tr>
  );
};

export default TransactionRow;
