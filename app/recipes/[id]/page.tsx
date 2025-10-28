import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import Header from "@/app/components/Header";

// 从数据文件加载菜谱数据
import recipesData from "@/app/data/recipes.json";

// 从数据文件加载菜谱数据
const recipes = recipesData;

// 根据ID获取菜谱
function getRecipe(id: number) {
  return recipes.find((recipe) => recipe.id === id);
}

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 解包 params Promise
  const { id } = await params;
  const recipeId = parseInt(id, 10);
  const recipe = getRecipe(recipeId);

  // 如果找不到菜谱，返回404
  if (!recipe) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header showBackLink={true} logoSize="large" showSubtitle={false} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Recipe Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {recipe.title}
            </h1>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>厨师: {recipe.chef}</span>
              <span>难度: {recipe.difficulty}</span>
            </div>
          </div>

          {/* Recipe Content */}
          <div className="p-6">
            {/* Ingredients */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                食材清单
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Ingredients */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    主要食材
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {recipe.mainIngredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          {ingredient}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accessories */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    辅料/调料
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {recipe.accessories.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          {ingredient}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Steps */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                制作步骤
              </h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-medium mr-4">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
            收藏菜谱
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium">
            分享菜谱
          </button>
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
