# template-vite-server

基于 Vite 8 + React 19 + TypeScript 6 的前端项目模板。

## 技术栈

| 能力     | 方案                                            |
| -------- | ----------------------------------------------- |
| 构建工具 | Vite 8                                          |
| UI 框架  | React 19                                        |
| 类型系统 | TypeScript 6                                    |
| 路由方案 | `@lightfish/router` — 文件系统路由              |
| 状态管理 | `@lightfish/react-model` — 桥接 hook 到 Context |
| 样式方案 | Tailwind CSS 4                                  |
| 代码规范 | ESLint 10                                       |

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认 http://localhost:8000）
pnpm dev

# 构建生产版本
pnpm build

# 预览构建产物
pnpm preview

# 代码检查
pnpm lint
```

## 项目结构

```
src/
├── pages/              # 页面组件（文件系统路由）
│   ├── index.tsx       # /
│   └── chat/           # /chat 路由模块
│       ├── model.ts    # 状态模型（useXxxModel + Provider）
│       ├── layout.tsx  # 布局壳（Provider + Outlet）
│       └── index.tsx   # 页面 UI
├── components/         # 共享组件（复用时抽离）
├── hooks/              # 共享 hooks（复用时抽离）
├── models/             # 全局状态模型（跨路由共享）
├── utils/              # 工具函数
├── types/              # 共享类型定义
├── main.css            # 全局样式（Tailwind + @utility）
└── main.tsx            # 应用入口
```

## 路由

使用 `@lightfish/router` 实现文件系统路由，页面文件自动映射为路由：

| 文件路径                      | 路由                       |
| ----------------------------- | -------------------------- |
| `src/pages/index.tsx`         | `/`                        |
| `src/pages/chat.tsx`          | `/chat`                    |
| `src/pages/chat/index.tsx`    | `/chat`                    |
| `src/pages/chat/layout.tsx`   | `/chat` 及其子路由的布局壳 |
| `src/pages/chat/settings.tsx` | `/chat/settings`           |
| `src/pages/blog/[id].tsx`     | `/blog/:id`                |

## 状态管理

使用 `@lightfish/react-model` 将自定义 hook 桥接到 React Context：

```tsx
// model.ts
import { createCustomModel } from "@lightfish/react-model";
import { useState } from "react";

function useChat(initial: { id: string }) {
  const [messages, setMessages] = useState([]);
  return { messages, send: (text: string) => {} };
}

export const { Provider: ChatProvider, useModel: useChatModel } =
  createCustomModel(useChat);
```

```tsx
// layout.tsx — 注入状态
function ChatLayout() {
  return (
    <ChatProvider value={{ id: "default" }}>
      <Outlet />
    </ChatProvider>
  );
}

// index.tsx — 消费状态
function ChatPage() {
  const { messages, send } = useChatModel();
  // ...
}
```

## 样式

- 使用 Tailwind CSS 4 utility classes
- 复杂样式用 `@utility` 指令在 `src/main.css` 中定义
- 默认暗色主题，Inter Variable 字体

## 开发原则

- **默认一个文件** — UI、逻辑、状态写在同一个页面文件里，不复用就不抽离
- **类型安全** — 充分利用 TypeScript 6
- **可读性优先** — 代码清晰比聪明重要
