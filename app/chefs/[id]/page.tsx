import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

// 模拟厨师数据
const chefs = [
  {
    id: 1,
    name: "张大厨",
    specialty: "川菜专家",
    bio: "拥有20年川菜制作经验，擅长传统川菜和创新融合菜。",
  },
  {
    id: 2,
    name: "李师傅",
    specialty: "粤菜大师",
    bio: "粤菜烹饪技艺精湛，对点心制作有独到见解。",
  },
  {
    id: 3,
    name: "王师傅",
    specialty: "面点专家",
    bio: "精通各种面点制作，尤其擅长手工拉面和包子。",
  },
  {
    id: 4,
    name: "陈师傅",
    specialty: "烘焙大师",
    bio: "西式烘焙技艺娴熟，擅长制作蛋糕和面包。",
  },
];

// 模拟该厨师的菜谱数据
const recipes = [
  { id: 1, chefId: 1, title: "红烧肉", difficulty: "中等" },
  { id: 2, chefId: 2, title: "宫保鸡丁", difficulty: "简单" },
  { id: 3, chefId: 1, title: "麻婆豆腐", difficulty: "简单" },
  { id: 4, chefId: 3, title: "手工拉面", difficulty: "中等" },
  { id: 5, chefId: 4, title: "奶油蛋糕", difficulty: "困难" },
];

// 根据ID获取厨师
function getChef(id: number) {
  return chefs.find((chef) => chef.id === id);
}

// 根据厨师ID获取菜谱
function getRecipesByChef(id: number) {
  return recipes.filter((recipe) => recipe.chefId === id);
}

export default async function ChefDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 解包 params Promise
  const { id } = await params;
  const chefId = parseInt(id, 10);
  const chef = getChef(chefId);
  const chefRecipes = getRecipesByChef(chefId);

  // 如果找不到厨师，返回404
  if (!chef) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="text-blue-500 hover:text-blue-700">
              &larr; 返回首页
            </Link>
            <h1 className="ml-4 text-3xl font-bold text-gray-900">CookHub</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Chef Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <span className="text-gray-500">厨师头像</span>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {chef.name}
              </h1>
              <p className="text-xl text-blue-600 mb-4">{chef.specialty}</p>
              <p className="text-gray-600 max-w-2xl">{chef.bio}</p>
            </div>
          </div>
        </div>

        {/* Chef Recipes */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            该厨师的菜谱
          </h2>
          {chefRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chefRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {recipe.title}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      难度：{recipe.difficulty}
                    </span>
                    <Link
                      href={`/recipes/${recipe.id}`}
                      className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                    >
                      查看详情 &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">该厨师暂无菜谱。</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 CookHub. 保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  );
}
