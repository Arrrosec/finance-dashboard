interface KPICardProps {
  title: string;
  value: number;
}

const KPICard = ({ title, value }: KPICardProps) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-2xl font-bold">${value.toLocaleString()}</p>
    </div>
  );
};

export default KPICard;
