import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import Header from "@/app/components/Header";
import AppContent from "@/app/components/AppContent";

// 从数据文件加载厨师和菜谱数据
import chefsData from "@/app/data/chefs.json";
import recipesData from "@/app/data/recipes.json";

// 从数据文件加载厨师数据
const chefs = chefsData;

// 从数据文件加载菜谱数据并转换格式
const recipes = recipesData.map((recipe) => ({
  id: recipe.id,
  chefId: chefs.find((chef) => chef.name === recipe.chef)?.id || 0,
  title: recipe.title,
  difficulty: recipe.difficulty,
}));

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header showBackLink={true} logoSize="large" showSubtitle={false} />

      {/* Main Content */}
      <main className="flex-1">
        <AppContent>
          {/* Chef Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {chef.name}
              </h1>
              <p className="text-xl text-blue-600 mb-4">{chef.specialty}</p>
              <p className="text-gray-600 max-w-2xl mx-auto">{chef.bio}</p>
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
        </AppContent>
      </main>
    </div>
  );
}
