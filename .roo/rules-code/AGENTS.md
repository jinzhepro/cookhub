# AGENTS.md - Code Mode

This file provides guidance to agents when working with code in this repository.

## 项目编码规则（仅非显而易见部分）

### 数据关联模式

- 菜谱与厨师通过厨师名称关联，而非 ID（在 recipes.json 中使用 chef 字段）
- 在动态路由中需要通过名称查找厨师 ID：`chefs.find((chef) => chef.name === recipe.chef)?.id`

### Next.js 16+ 特定要求

- 动态路由页面必须使用 `await params` 解包参数：`const { id } = await params;`
- 首页 `app/page.tsx` 是客户端组件（"use client"），其他页面是服务端组件

### 数据处理约定

- 直接导入 JSON 数据：`import recipesData from "@/app/data/recipes.json"`
- 使用 `find()` 和 `filter()` 方法进行数据查找和筛选
- 在厨师详情页中，需要转换菜谱数据格式以关联厨师 ID

### 组件结构模式

- 所有页面组件使用相同的布局结构（header、main、footer）
- 卡片组件使用统一的样式：`bg-white rounded-lg shadow-md`
- 响应式网格：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### 路由处理

- 使用 `notFound()` 处理无效路由，而不是返回 null 或错误页面
- 路径别名：`@/*` 指向项目根目录

### 中文内容处理

- 所有中文内容需要保持 UTF-8 编码
- 字符串比较时使用 `toLowerCase()` 进行大小写不敏感搜索
