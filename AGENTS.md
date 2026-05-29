# AGENTS.md — template-vite-server

## 项目概览

一个基于 **Vite + React 19 + TypeScript 6** 的现代化前端项目模板，集成以下核心能力：

| 能力     | 方案                                            |
| -------- | ----------------------------------------------- |
| 构建工具 | Vite 8                                          |
| UI 框架  | React 19                                        |
| 类型系统 | TypeScript 6                                    |
| 路由方案 | `@lightfish/router` — 文件系统路由              |
| 状态管理 | `@lightfish/react-model` — 轻量级响应式状态管理 |
| 样式方案 | Tailwind CSS 4                                  |
| 代码规范 | ESLint 10                                       |

---

## Vibe Coding 约束

### 1. 文件路由规则

项目使用 `@lightfish/router` 实现**文件系统路由**，目录结构即路由结构。

- `src/pages/index.tsx` → `/`
- `src/pages/about.tsx` → `/about`
- `src/pages/blog/[id].tsx` → `/blog/:id`
- `src/pages/settings.tsx` → `/settings`

**约束：**

- 页面组件放在 `src/pages/` 下，文件名即路由路径
- 布局文件使用 `layout.tsx`，404 页面使用 `404.tsx`
- 不要手动维护路由表，路由由文件系统自动生成

### 2. 组件 & 逻辑内聚原则

**默认策略：就近内聚，延迟抽离。**

- 页面组件、请求逻辑、状态管理、UI 片段**默认写在一个文件里**
- 只有当一段逻辑或 UI 在 **2 个及以上** 的地方被使用时，才考虑抽离为共享模块
- 抽离方向：
  - 共享组件 → `src/components/`
  - 共享 hooks → `src/hooks/`
  - 共享工具函数 → `src/utils/`
  - 共享类型 → `src/types/`

**为什么这样做：**

- 避免过早抽象导致的认知负担
- 页面级别的内聚让代码更容易理解和修改
- 文件路由天然支持按页面拆分，每个页面文件就是一个独立的功能单元

### 3. 状态管理

使用 `@lightfish/react-model` 进行状态管理。

**组件级状态管理（推荐模式）：**

- 利用文件路由的 `layout.tsx` + 对应目录下的 `model.ts` 实现组件级别的状态隔离
- 目录结构示例：
  ```
  src/pages/
  ├── dashboard/
  │   ├── layout.tsx    # 提供 Dashboard 级别的状态上下文
  │   ├── model.ts      # Dashboard 模块的状态定义
  │   ├── index.tsx     # /dashboard
  │   └── settings.tsx  # /dashboard/settings
  ├── index.tsx
  ```
- `layout.tsx` 通过 `@lightfish/react-model` 提供状态，其子路由页面共享该状态
- 这种方式天然实现了"按路由模块拆分状态"，每个路由模块拥有独立的状态作用域

**全局/跨页面状态：**

- 当状态需要在多个不相关的路由模块间共享时，抽离到 `src/models/` 目录下

### 4. Hooks 使用规范

在编写自定义 hooks 之前，**先检查 ahooks 是否已有现成的实现**。

- 优先使用 `ahooks` 中经过验证的 hooks（如 `useRequest`、`useDebounce`、`useThrottle`、`useToggle` 等）
- 只有当 ahooks 不满足需求时，才编写自定义 hooks
- 自定义 hooks 放在 `src/hooks/` 目录下

### 5. 样式规范

- 使用 Tailwind CSS 4 的 utility classes 作为主要样式方案
- 对于复杂的自定义样式，使用 `@utility` 指令在 CSS 中定义
- 遵循 Linear 设计系统的色彩和排版体系（详见设计系统文档）

### 6. 代码组织

```
src/
├── pages/              # 页面组件（文件路由）
│   ├── index.tsx       # 首页
│   ├── dashboard/
│   │   ├── layout.tsx  # Dashboard 布局 + 状态提供
│   │   ├── model.ts    # Dashboard 状态模型
│   │   ├── index.tsx   # /dashboard
│   │   └── settings.tsx # /dashboard/settings
│   └── ...
├── components/         # 共享组件（仅当复用时抽离）
├── hooks/              # 共享 hooks（仅当复用时抽离）
├── models/             # 全局状态模型
├── utils/              # 工具函数
├── types/              # 共享类型定义
├── main.css            # 全局样式
└── main.tsx            # 应用入口
```

### 7. 开发原则

- **渐进式增强**：从简单实现开始，按需优化
- **类型安全**：充分利用 TypeScript 的类型系统
- **最小依赖**：优先使用项目已有依赖，新增依赖需评估必要性
- **可读性优先**：代码清晰比"聪明"更重要
