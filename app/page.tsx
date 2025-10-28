"use client";

import RecipeCard from "@/app/components/RecipeCard";
import ChefCard from "@/app/components/ChefCard";
import { useState, useEffect } from "react";

// 模拟菜谱数据
const recipes = [
  {
    id: 1,
    title: "红烧肉",
    description: "经典中式菜肴，肥而不腻",
    difficulty: "中等",
  },
  {
    id: 2,
    title: "宫保鸡丁",
    description: "经典川菜，酸甜可口",
    difficulty: "简单",
  },
  {
    id: 3,
    title: "麻婆豆腐",
    description: "麻辣鲜香，下饭佳品",
    difficulty: "简单",
  },
];

// 模拟厨师数据
const chefs = [
  { id: 1, name: "张大厨", specialty: "川菜专家" },
  { id: 2, name: "李师傅", specialty: "粤菜大师" },
  { id: 3, name: "王师傅", specialty: "面点专家" },
  { id: 4, name: "陈师傅", specialty: "烘焙大师" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [filteredChefs, setFilteredChefs] = useState(chefs);

  // 搜索功能
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredRecipes(recipes);
      setFilteredChefs(chefs);
    } else {
      const term = searchTerm.toLowerCase();
      const filteredRecipes = recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term) ||
          recipe.description.toLowerCase().includes(term)
      );
      const filteredChefs = chefs.filter(
        (chef) =>
          chef.name.toLowerCase().includes(term) ||
          chef.specialty.toLowerCase().includes(term)
      );
      setFilteredRecipes(filteredRecipes);
      setFilteredChefs(filteredChefs);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">CookHub</h1>
          <p className="mt-1 text-gray-600">发现抖音名厨的精彩菜谱</p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="搜索菜谱或厨师..."
            className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            欢迎来到 CookHub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索来自抖音平台的名厨菜谱，学习制作美味佳肴
          </p>
        </div>

        {/* Featured Recipes Section */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {searchTerm ? `搜索结果 (${filteredRecipes.length})` : "推荐菜谱"}
          </h3>
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  description={recipe.description}
                  difficulty={recipe.difficulty}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">没有找到相关的菜谱</p>
            </div>
          )}
        </section>

        {/* Chef Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {searchTerm ? `相关厨师 (${filteredChefs.length})` : "知名厨师"}
          </h3>
          {filteredChefs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredChefs.map((chef) => (
                <ChefCard
                  key={chef.id}
                  id={chef.id}
                  name={chef.name}
                  specialty={chef.specialty}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">没有找到相关的厨师</p>
            </div>
          )}
        </section>
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
