import Link from "next/link";

interface ChefCardProps {
  id: number;
  name: string;
  specialty: string;
}

export default function ChefCard({ id, name, specialty }: ChefCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h4 className="text-lg font-medium text-gray-900">{name}</h4>
      <p className="text-gray-600 text-sm mt-1">{specialty}</p>
      <Link
        href={`/chefs/${id}`}
        className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm inline-block"
      >
        查看菜谱
      </Link>
    </div>
  );
}
