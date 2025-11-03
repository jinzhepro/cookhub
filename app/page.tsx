"use client";

import RecipeCard from "@/app/components/RecipeCard";
import ChefCard from "@/app/components/ChefCard";
import Header from "@/app/components/Header";
import AppContent from "@/app/components/AppContent";
import { useState, useEffect } from "react";

// 从数据文件加载菜谱和厨师数据
import recipesData from "@/app/data/recipes.json";
import chefsData from "@/app/data/chefs.json";

// 从数据文件加载菜谱数据
const recipes = recipesData.map((recipe) => ({
  id: recipe.id,
  title: recipe.title,
  description: recipe.description,
  difficulty: recipe.difficulty,
  mainIngredients: recipe.mainIngredients,
}));

// 提取所有唯一主要食材
const allMainIngredients = Array.from(
  new Set(recipes.flatMap((recipe) => recipe.mainIngredients))
);

// 从数据文件加载厨师数据
const chefs = chefsData.map((chef) => ({
  id: chef.id,
  name: chef.name,
  specialty: chef.specialty,
}));

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [filteredChefs, setFilteredChefs] = useState(chefs);

  // 搜索和筛选功能
  useEffect(() => {
    let result = recipes;

    // 文本搜索
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term) ||
          recipe.description.toLowerCase().includes(term)
      );
    }

    // 主要食材筛选
    if (selectedIngredients.length > 0) {
      result = result.filter((recipe) =>
        selectedIngredients.every((ingredient) =>
          recipe.mainIngredients.includes(ingredient)
        )
      );
    }

    setFilteredRecipes(result);

    // 厨师搜索
    if (searchTerm.trim() === "") {
      setFilteredChefs(chefs);
    } else {
      const term = searchTerm.toLowerCase();
      const filteredChefs = chefs.filter(
        (chef) =>
          chef.name.toLowerCase().includes(term) ||
          chef.specialty.toLowerCase().includes(term)
      );
      setFilteredChefs(filteredChefs);
    }
  }, [searchTerm, selectedIngredients]);

  // 切换食材选择
  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  // 清除所有筛选
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedIngredients([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header logoSize="large" showSubtitle={true} />

      {/* Search Bar */}
      <AppContent className="py-6">
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
      </AppContent>

      {/* Ingredients Filter */}
      <AppContent className="py-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-gray-700 font-medium">你想吃什么？</span>
          {allMainIngredients.map((ingredient) => (
            <button
              key={ingredient}
              onClick={() => toggleIngredient(ingredient)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedIngredients.includes(ingredient)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {ingredient}
            </button>
          ))}
        </div>

        {/* Active Filters */}
        {(searchTerm || selectedIngredients.length > 0) && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-gray-700 font-medium">当前筛选:</span>
            {searchTerm && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                搜索: {searchTerm}
              </span>
            )}
            {selectedIngredients.map((ingredient) => (
              <span
                key={ingredient}
                className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm flex items-center"
              >
                {ingredient}
                <button
                  onClick={() => toggleIngredient(ingredient)}
                  className="ml-1 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm hover:bg-gray-200"
            >
              清除筛选
            </button>
          </div>
        )}
      </AppContent>

      {/* Main Content */}
      <main className="flex-1">
        <AppContent>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              欢迎来到 CookHub
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              探索来自互联网平台的名厨菜谱，学习制作美味佳肴
            </p>
          </div>

          {/* Featured Recipes Section */}
          <section className="mb-16">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {searchTerm || selectedIngredients.length > 0
                ? `搜索结果 (${filteredRecipes.length})`
                : "推荐菜谱"}
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
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  清除筛选条件
                </button>
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
        </AppContent>
      </main>
    </div>
  );
}
