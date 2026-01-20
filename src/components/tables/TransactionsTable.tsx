import { useState } from "react";
import { transactionsByRange } from "../../data/mockTransaction";
import TransactionRow from "../../utils/TransactionRow";

interface Props {
  range: "Today" | "Week" | "Month" | "Year";
  darkMode?: boolean;
}

const TransactionsTable = ({ range, darkMode = false }: Props) => {
  const transactions = transactionsByRange[range];
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const filteredTransactions = transactions.filter(
    (t) =>
      t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAll = () => {
    if (selectedRows.length === filteredTransactions.length) setSelectedRows([]);
    else setSelectedRows(filteredTransactions.map((t) => t.id));
  };

  // Dark/light mode classes
  const tableBg = darkMode ? "bg-[#1e293b]" : "bg-white";
  const headerBg = darkMode ? "bg-[#334155]" : "bg-gray-100";
  const headerText = darkMode ? "text-gray-300" : "text-gray-700";
  const inputBg = darkMode
    ? "bg-[#334155] text-gray-200 placeholder-gray-400"
    : "bg-white text-gray-700 placeholder-gray-400";
  const borderColor = darkMode ? "border-[#475569]" : "border-gray-200";

  return (
    <div
      className={`shadow-md rounded-xl p-4 overflow-x-auto hover:shadow-lg transition-shadow duration-300 ${tableBg} ${borderColor}`}
    >
      {/* Header */}
      <h3
        className={`text-lg font-semibold uppercase tracking-wide mb-4 ${
          darkMode ? "text-[#f1f5f9]" : "text-[#0f172a]"
        }`}
      >
        Recent Transactions
      </h3>

      {/* Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 w-full">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-96 ${inputBg} border ${borderColor}`}
        />
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse">
        <thead className={`${headerBg} rounded-t-xl`}>
          <tr>
            <th className={`px-3 py-2 text-left text-sm max-w-40px ${headerText}`}>
              <input
                type="checkbox"
                className="rounded-full"
                checked={
                  selectedRows.length > 0 &&
                  selectedRows.length === filteredTransactions.length
                }
                onChange={toggleAll}
              />
            </th>
            <th className={`px-3 py-2 text-left text-sm max-w-50px ${headerText}`}>ID</th>
            <th className={`px-3 py-2 text-left text-sm max-w-150px ${headerText}`}>Customer</th>
            <th className={`px-3 py-2 text-left text-sm max-w-100px ${headerText}`}>Amount</th>
            <th className={`px-3 py-2 text-left text-sm max-w-80px ${headerText}`}>Status</th>
            <th className={`px-3 py-2 text-left text-sm max-w-120px ${headerText}`}>Date</th>
          </tr>
        </thead>

        <tbody className={`divide-y ${darkMode ? "divide-[#475569]" : "divide-gray-100"}`}>
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan={7} className={`text-center py-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                No transactions found
              </td>
            </tr>
          ) : (
            filteredTransactions.map((t) => (
              <TransactionRow
                key={t.id}
                transaction={t}
                selectedRow={selectedRow}
                selectedRows={selectedRows}
                toggleRow={toggleRow}
                setSelectedRow={setSelectedRow}
                darkMode={darkMode}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
