interface KPICardProps {
  title: string;
  value?: number; // make it optional
}

const KPICard = ({ title, value }: KPICardProps) => {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col justify-between">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">
        {value !== undefined ? value.toLocaleString() : "—"}
      </p>
    </div>
  );
};

export default KPICard;
