interface Props {
  id: string;
}

const TransactionActions = ({ id }: Props) => {
  return (
    <div className="flex space-x-1 max-w-[120px]">
      <button
        onClick={() => alert(`Viewing transaction ${id}`)}
        className="p-1 rounded-full hover:bg-gray-100 transition transform hover:scale-110"
        title="View transaction"
      >
        v
      </button>

      <button
        onClick={() => alert(`Editing transaction ${id}`)}
        className="p-1 rounded-full hover:bg-gray-100 transition transform hover:scale-110"
        title="Edit transaction"
      >
        v
      </button>

      <button
        onClick={() => alert(`Deleting transaction ${id}`)}
        className="p-1 rounded-full hover:bg-gray-100 transition transform hover:scale-110"
        title="Delete transaction"
      >
        v
      </button>
    </div>
  );
};

export default TransactionActions;
