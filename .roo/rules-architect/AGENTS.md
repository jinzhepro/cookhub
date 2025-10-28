# AGENTS.md - Architect Mode

This file provides guidance to agents when working with code in this repository.

## 项目架构规则（仅非显而易见部分）

### 数据架构设计

- 菜谱与厨师通过名称关联而非 ID，这种设计简化了数据维护但增加了查询复杂度
- 数据存储在 JSON 文件中，适合小型项目但限制了扩展性
- 厨师详情页需要运行时数据转换来建立关联关系

### 组件架构模式

- 首页作为客户端组件处理复杂状态（搜索、筛选）
- 其他页面作为服务端组件优化性能
- 统一的页面布局模式（header、main、footer）确保一致性

### 路由架构设计

- 使用 Next.js 16+ App Router 的动态路由
- 路由参数必须异步解包：`const { id } = await params`
- 使用 `notFound()` 处理无效路由，保持用户体验

### 状态管理架构

- 首页使用本地状态管理搜索和筛选
- 没有全局状态管理库，依赖组件间通信
- 数据通过直接导入 JSON 文件获取，无 API 层

### 样式架构

- Tailwind CSS v4 提供统一的样式系统
- 响应式设计模式：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 统一的颜色方案和组件样式

### 扩展性考虑

- 当前架构适合内容展示，但添加用户功能需要重构
- JSON 数据存储限制了动态内容管理
- 搜索功能在前端实现，大数据量时性能会下降

### 性能优化

- 服务端组件减少客户端 JavaScript
- 图片占位符需要替换为优化图片
- 可考虑添加数据缓存层
