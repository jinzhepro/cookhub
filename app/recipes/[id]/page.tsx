import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

// 模拟数据导入
const recipes = [
  {
    id: 1,
    title: "红烧肉",
    description: "经典中式菜肴，肥而不腻，入口即化",
    difficulty: "中等",
    prepTime: 30,
    cookTime: 60,
    servings: 4,
    chef: "张大厨",
    category: "中式菜肴",
    mainIngredients: ["五花肉 500g"],
    accessories: [
      "生姜 3片",
      "葱 2根",
      "料酒 2勺",
      "生抽 3勺",
      "老抽 1勺",
      "冰糖 20g",
      "八角 2个",
      "桂皮 1小段",
    ],
    steps: [
      "五花肉切块，冷水下锅焯水去腥",
      "热锅凉油，放入冰糖炒糖色",
      "下五花肉翻炒上色",
      "加入料酒、生抽、老抽翻炒均匀",
      "加入足量热水，放入姜片、葱段、八角、桂皮",
      "大火烧开后转小火炖煮45分钟",
      "大火收汁至浓稠即可",
    ],
  },
  {
    id: 2,
    title: "宫保鸡丁",
    description: "经典川菜，酸甜可口，鸡肉嫩滑",
    difficulty: "简单",
    prepTime: 20,
    cookTime: 15,
    servings: 3,
    chef: "李师傅",
    category: "川菜",
    mainIngredients: ["鸡胸肉 300g", "花生米 100g"],
    accessories: [
      "干辣椒 5个",
      "花椒 10粒",
      "葱白 2根",
      "生抽 2勺",
      "老抽 1勺",
      "醋 1勺",
      "糖 1勺",
      "料酒 1勺",
      "淀粉 适量",
    ],
    steps: [
      "鸡胸肉切丁，用料酒、淀粉腌制10分钟",
      "调制宫保汁：生抽、老抽、醋、糖、淀粉、水调匀",
      "花生米炸至酥脆备用",
      "热锅凉油，下鸡丁滑熟盛起",
      "留底油，下干辣椒、花椒炒香",
      "下葱白段炒香，再下鸡丁翻炒",
      "倒入宫保汁炒匀，最后加入花生米炒匀即可",
    ],
  },
  {
    id: 3,
    title: "麻婆豆腐",
    description: "麻辣鲜香，豆腐嫩滑，下饭佳品",
    difficulty: "简单",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    chef: "王师傅",
    category: "川菜",
    mainIngredients: ["嫩豆腐 400g", "牛肉末 100g"],
    accessories: [
      "郫县豆瓣酱 2勺",
      "花椒粉 适量",
      "生抽 1勺",
      "料酒 1勺",
      "葱花 适量",
      "蒜末 适量",
      "姜末 适量",
      "淀粉 适量",
    ],
    steps: [
      "豆腐切块，用淡盐水焯水去腥",
      "热锅凉油，下牛肉末炒散变色",
      "下豆瓣酱炒出红油，加入姜蒜末炒香",
      "加入适量水烧开，下豆腐块",
      "加入生抽、料酒调味，小火煮3分钟",
      "用水淀粉勾芡，撒上花椒粉和葱花即可",
    ],
  },
];

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
              <span>准备时间: {recipe.prepTime}分钟</span>
              <span>烹饪时间: {recipe.cookTime}分钟</span>
              <span>份量: {recipe.servings}人份</span>
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
