# AGENTS.md - Debug Mode

This file provides guidance to agents when working with code in this repository.

## 项目调试规则（仅非显而易见部分）

### 路由调试

- 动态路由参数必须使用 `await params` 解包，否则会导致运行时错误
- 无效路由会触发 `notFound()` 而非返回错误，检查网络面板确认重定向

### 数据关联调试

- 菜谱与厨师通过名称关联，而非 ID - 检查数据一致性
- 厨师详情页中的菜谱数据转换可能失败：`chefs.find((chef) => chef.name === recipe.chef)?.id`
- 如果厨师名称不匹配，菜谱不会显示在厨师详情页中

### 客户端/服务端组件调试

- 首页是客户端组件（"use client"），包含状态管理
- 其他页面是服务端组件，不能使用 React Hooks
- 混合使用会导致 "useState cannot be called on the server" 错误

### 搜索功能调试

- 搜索功能在首页客户端组件中实现，检查状态更新
- 食材筛选使用 `every()` 方法，确保所有选中的食材都存在
- 搜索不区分大小写，使用 `toLowerCase()`

### 中文内容调试

- 确保所有文件保持 UTF-8 编码
- 中文字符串比较时注意空格和特殊字符
- JSON 文件中的中文内容需要正确转义

### 开发服务器调试

- 开发服务器运行在 http://localhost:3000
- 热重载对 JSON 数据文件更改可能不生效，需要重启服务器
- ESLint 错误会在终端和控制台中显示
