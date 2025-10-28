# CookHub - 抖音名厨菜谱集合

<div align="center">

![CookHub Logo](public/logo.png)

**发现和学习来自互联网平台的名厨菜谱**

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

## 📖 项目简介

CookHub 是一个基于 Next.js 构建的中文菜谱展示网站，汇集了来自互联网平台的知名厨师菜谱。项目采用现代化的技术栈，提供优雅的用户体验和丰富的菜谱内容。

### ✨ 主要特性

- 🍳 **丰富菜谱** - 收录多位知名厨师的经典菜谱
- 🔍 **智能搜索** - 支持按菜名、厨师和主要食材搜索
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎨 **简洁界面** - 专注于内容展示的无干扰设计
- ⚡ **快速加载** - 基于 Next.js App Router 优化性能
- 🇨🇳 **中文优化** - 专为中文用户设计的界面和内容

## 🚀 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm、yarn、pnpm 或 bun

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm run start
```

## 🏗️ 项目结构

```
cookhub/
├── app/                    # Next.js App Router
│   ├── components/         # React 组件
│   │   ├── ChefCard.tsx    # 厨师卡片组件
│   │   └── RecipeCard.tsx  # 菜谱卡片组件
│   ├── data/              # 数据文件
│   │   ├── chefs.json     # 厨师数据
│   │   └── recipes.json   # 菜谱数据
│   ├── chefs/[id]/        # 厨师详情页
│   ├── recipes/[id]/      # 菜谱详情页
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── public/                # 静态资源
├── .roo/                  # AI 助手配置
└── AGENTS.md             # 项目指南
```

## 🛠️ 技术栈

- **框架**: Next.js 16.0.0 (App Router)
- **UI 库**: React 19.2.0
- **语言**: TypeScript 5.x
- **样式**: Tailwind CSS v4
- **代码检查**: ESLint 9.x
- **包管理**: npm

## 📊 数据管理

项目使用 JSON 文件存储数据，位于 `app/data/` 目录：

- `chefs.json` - 厨师信息（ID、姓名、专长、简介）
- `recipes.json` - 菜谱信息（ID、标题、描述、难度、食材、步骤）

### 数据关联特点

菜谱与厨师通过**厨师名称**关联，而非传统的 ID 关联，这种设计简化了数据维护但增加了查询复杂度。

## 🎯 核心功能

### 1. 首页功能

- 菜谱和厨师展示
- 实时搜索（支持菜名、厨师、食材）
- 按主要食材筛选
- 响应式网格布局

### 2. 厨师详情页

- 厨师信息展示
- 该厨师的全部菜谱
- 简洁的导航设计

### 3. 菜谱详情页

- 详细的制作步骤
- 食材清单（主要食材 + 辅料）
- 可交互的食材勾选功能
- 难度等级显示

## 🎨 设计原则

- **内容优先** - 去除图片干扰，专注内容展示
- **简洁一致** - 统一的设计语言和交互模式
- **响应式** - 适配各种屏幕尺寸
- **性能优化** - 利用 Next.js 服务端组件优势

## 🔧 开发指南

### 添加新菜谱

1. 编辑 `app/data/recipes.json`
2. 添加新的菜谱对象，确保 `chef` 字段与 `chefs.json` 中的姓名匹配
3. 重新启动开发服务器

### 添加新厨师

1. 编辑 `app/data/chefs.json`
2. 添加新的厨师对象，确保 ID 唯一
3. 更新相关菜谱的 `chef` 字段

### 样式修改

项目使用 Tailwind CSS v4，主要样式约定：

- 主色调：`bg-blue-500`
- 卡片样式：`bg-white rounded-lg shadow-md`
- 响应式网格：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## 📝 代码规范

项目遵循以下编码规范：

- TypeScript 严格模式
- ESLint 代码检查
- 组件使用 PascalCase 命名
- 文件使用 camelCase 命名
- 中文内容保持 UTF-8 编码

详细规范请参考 [AGENTS.md](./AGENTS.md) 文件。

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台

```bash
npm run build
# 将 .next 目录部署到目标平台
```

## 🤝 贡献指南

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢所有提供菜谱的抖音名厨
- 基于 [Next.js](https://nextjs.org) 框架构建
- 使用 [Tailwind CSS](https://tailwindcss.com) 进行样式设计

---

<div align="center">

**Made with ❤️ for Chinese food lovers**

[⭐ 给个星标](https://github.com/yourusername/cookhub) · [🐛 报告问题](https://github.com/yourusername/cookhub/issues) · [💡 功能建议](https://github.com/yourusername/cookhub/issues/new)

</div>
