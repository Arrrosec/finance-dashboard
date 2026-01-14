import React from "react";
import { transactions } from "../../data/mockTransaction";

const TransactionsTable = () => {
  return (
    <div className="bg-white shadow rounded p-4 overflow-x-auto">
      <h3 className="text-lg font-bold mb-2">Recent Transactions</h3>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-t text-left">
              <td className="px-4 py-2">{t.id}</td>
              <td className="px-4 py-2">{t.customer}</td>
              <td className="px-4 py-2">${t.amount}</td>
              <td className="px-4 py-2">{t.status}</td>
              <td className="px-4 py-2">{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
