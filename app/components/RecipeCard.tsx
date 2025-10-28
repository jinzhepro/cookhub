import Link from "next/link";

interface RecipeCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: string;
}

export default function RecipeCard({
  id,
  title,
  description,
  difficulty,
}: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="text-lg font-medium text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">难度：{difficulty}</span>
        <Link
          href={`/recipes/${id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
        >
          查看详情
        </Link>
      </div>
    </div>
  );
}
