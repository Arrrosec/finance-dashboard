
interface Props {
  transaction: any;
  selectedRow: string | null;
  selectedRows: string[];
  toggleRow: (id: string) => void;
  setSelectedRow: (id: string) => void;
}

const TransactionRow = ({
  transaction,
  selectedRow,
  selectedRows,
  toggleRow,
  setSelectedRow,
}: Props) => {
  return (
    <tr
      onClick={() => setSelectedRow(transaction.id)}
      className={`transition-all duration-150 hover:bg-gray-50 hover:shadow-sm ${
        selectedRow === transaction.id ? "bg-blue-50" : ""
      }`}
    >
      {/* Checkbox */}
      <td className="px-3 py-2">
        <input
          type="checkbox"
          className="rounded-full"
          checked={selectedRows.includes(transaction.id)}
          onChange={() => toggleRow(transaction.id)}
          onClick={(e) => e.stopPropagation()}
        />
      </td>

      <td className="px-3 py-2 text-sm truncate max-w-[50px]">{transaction.id}</td>
      <td className="px-3 py-2 text-sm truncate max-w-[150px]">{transaction.customer}</td>
      <td className="px-3 py-2 text-sm truncate max-w-[100px]">
        ${transaction.amount.toLocaleString()}
      </td>
      <td className="px-3 py-2 truncate max-w-[80px]">
        <span
          className={`px-2 py-1 rounded-full text-white text-xs font-semibold shadow-sm ${
            transaction.status === "Paid"
              ? "bg-gradient-to-r from-green-400 to-green-500"
              : "bg-gradient-to-r from-yellow-400 to-yellow-500"
          }`}
        >
          {transaction.status}
        </span>
      </td>
      <td className="px-3 py-2 text-sm truncate max-w-[120px]">{transaction.date}</td>
 
    </tr>
  );
};

export default TransactionRow;
