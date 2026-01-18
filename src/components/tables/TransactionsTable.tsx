import { useState } from "react";
import { transactionsByRange } from "../../data/mockTransaction";
import TransactionRow from "../../utils/TransactionRow";

interface Props {
  range: "Today" | "Week" | "Month" | "Year";
}

const TransactionsTable = ({ range }: Props) => {
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

  return (
    <div className="bg-white shadow-md rounded-xl p-4 overflow-x-auto hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-700 uppercase tracking-wide mb-4">
        Recent Transactions
      </h3>

      {/* Search + Add */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 w-full">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-96"
        />

    
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100 rounded-t-xl">
          <tr>
            <th className="px-3 py-2 text-left text-gray-600 text-sm max-w-40px">
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
            <th className="px-3 py-2 text-left text-gray-600 text-sm max-w-50px">ID</th>
            <th className="px-3 py-2 text-left text-gray-600 text-sm max-w-150px">Customer</th>
            <th className="px-3 py-2 text-left text-gray-600 text-sm max-w-100px">Amount</th>
            <th className="px-3 py-2 text-left text-gray-600 text-sm max-w-80px">Status</th>
            <th className="px-3 py-2 text-left text-gray-600 text-sm max-w-120px">Date</th>
           
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-100">
          {filteredTransactions.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center text-gray-400 py-4">
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
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
