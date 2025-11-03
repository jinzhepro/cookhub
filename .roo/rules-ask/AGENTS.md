# AGENTS.md - Ask Mode

This file provides guidance to agents when working with code in this repository.

## 项目文档规则（仅非显而易见部分）

### 数据结构说明

- 菜谱与厨师通过厨师名称关联，而非 ID - 这是反直觉的设计
- `recipes.json` 中的 `chef` 字段存储厨师名称，不是 ID
- 厨师详情页需要动态查找厨师 ID 来关联菜谱

### 项目组织说明

- 所有数据存储在 `app/data/` 目录，而非传统的 `data/` 或 `src/data/`
- 组件位于 `app/components/`，遵循 Next.js App Router 约定
- 静态资源在 `public/` 目录，但目前只有占位符图片

### 功能实现说明

- 首页包含复杂的搜索和筛选功能，按主要食材筛选
- 菜谱详情页有可交互的食材清单（checkbox 功能）
- 搜索功能同时支持菜谱和厨师搜索

### 技术栈说明

- 使用 Next.js 16+ App Router，不是传统的 Pages Router
- Tailwind CSS v4（最新版本），不是 v3
- TypeScript 严格模式启用
- 项目没有测试框架配置

### 中文内容处理

- 所有内容都是中文，需要保持 UTF-8 编码
- 厨师数据包含真实的美食博主信息
- 菜谱数据包含详细的制作步骤和食材清单

### 开发注意事项

- 首页是客户端组件，其他页面是服务端组件
- 动态路由需要使用 `await params` 解包参数
- 使用 `notFound()` 处理无效路由，而不是自定义错误页面
