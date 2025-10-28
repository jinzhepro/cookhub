# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 项目概述

CookHub 是一个基于 Next.js 的中文菜谱展示网站，展示来自互联网平台的名厨菜谱。

## 构建和开发命令

- `npm run dev` - 启动开发服务器 (http://localhost:3000)
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 代码检查

## 项目特定约定

### 数据管理

- 所有数据存储在 `app/data/` 目录下的 JSON 文件中
- `chefs.json` 包含厨师信息，`recipes.json` 包含菜谱信息
- 菜谱与厨师通过厨师名称关联，而非 ID（在 recipes.json 中使用 chef 字段）

### 路由结构

- 使用 Next.js App Router
- 动态路由：`/chefs/[id]` 显示厨师详情和其菜谱
- 动态路由：`/recipes/[id]` 显示菜谱详细制作步骤
- 首页 `app/page.tsx` 是客户端组件（"use client"）

### 组件模式

- 组件位于 `app/components/` 目录
- ChefCard 和 RecipeCard 是可复用的展示组件
- 所有页面组件都使用相同的布局结构（header、main、footer）

### 数据处理模式

- 在页面组件中直接导入 JSON 数据
- 使用 `find()` 和 `filter()` 方法进行数据查找和筛选
- 动态路由页面需要使用 `await params` 解包参数（Next.js 16+ 要求）

### 样式约定

- 使用 Tailwind CSS v4
- 响应式设计：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 统一的颜色方案：蓝色主色调 (`bg-blue-500`)
- 卡片组件使用 `bg-white rounded-lg shadow-md`

### TypeScript 配置

- 路径别名：`@/*` 指向项目根目录
- 严格模式启用
- 使用 `notFound()` 处理无效路由

### 特殊注意事项

- 首页包含复杂的搜索和筛选功能（按主要食材筛选）
- 菜谱详情页包含可交互的食材清单（checkbox）
- 所有中文内容需要保持 UTF-8 编码
- 项目没有测试框架配置
