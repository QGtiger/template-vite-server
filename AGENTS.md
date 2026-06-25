# AGENTS.md — template-vite-server

## 项目概览

| 能力     | 方案                                            |
| -------- | ----------------------------------------------- |
| 构建工具 | Vite 8                                          |
| UI 框架  | React 19                                        |
| 类型系统 | TypeScript 6                                    |
| 路由方案 | `@lightfish/router` — 文件系统路由              |
| 状态管理 | `@lightfish/react-model` — 桥接 hook 到 Context |
| 样式方案 | Tailwind CSS 4                                  |
| 代码规范 | ESLint 10                                       |

---

## 1. 路由 & 页面结构（文件系统路由）

### 路由映射规则

| 文件路径                      | 路由                           |
| ----------------------------- | ------------------------------ |
| `src/pages/index.tsx`         | `/`                            |
| `src/pages/chat.tsx`          | `/chat`                        |
| `src/pages/chat/index.tsx`    | `/chat`（目录 + index 等价）   |
| `src/pages/chat/layout.tsx`   | `/chat` 及其子路由的**布局壳** |
| `src/pages/chat/settings.tsx` | `/chat/settings`               |
| `src/pages/blog/[id].tsx`     | `/blog/:id`                    |

### layout.tsx — 布局壳

`layout.tsx` 渲染**外围框架**（导航栏、侧边栏、Provider 包裹等），内部使用 `<Outlet />` 渲染子路由页面。

```tsx
// src/pages/chat/layout.tsx
export default function ChatLayout() {
  return (
    <div className="flex h-screen">
      <aside>侧边栏</aside>
      <main className="flex-1">
        <Outlet /> {/* ← 子路由在此渲染 */}
      </main>
    </div>
  );
}
```

**layout.tsx 的职责边界：**

- ✅ 渲染布局框架（flex、grid、导航等）
- ✅ 包裹 `<Outlet />` 渲染子页面
- ✅ 包裹 `<Provider>` 提供**该路由模块**的状态
- ❌ 不能写页面内容（内容在 index.tsx 或子路由中）
- ❌ 不能写请求逻辑或业务状态管理（在 model.ts 中）

### layout + model + index 标准模式

```
pages/chat/
├── model.ts      ← ① 定义 hook + createCustomModel
├── layout.tsx    ← ② <Provider><Outlet /></Provider>
└── index.tsx     ← ③ 取状态 + 渲染 UI
```

---

## 2. 状态管理（@lightfish/react-model）

### 基本原理

`createCustomModel(useHook)` 把自定义 hook 桥接到 React Context：

```ts
import { createCustomModel } from "@lightfish/react-model";

function useMyHook(props: { count: number }) {
  // 任意逻辑、useState、useEffect...
  return { count, increment: () => {} };
}

export const { Provider, useModel } = createCustomModel(useMyHook);
```

**Provider 的 value 会作为参数传给 hook：**

```tsx
<Provider value={{ count: 0 }}>
  <Child />
</Provider>
// → useMyHook({ count: 0 }) 在内部运行，返回值注入 Context
```

### 标准三层结构

```ts
// model.ts — 定义状态 + hook
import { createCustomModel } from "@lightfish/react-model";

// 注意：hook 名用 useXxx，对应 useModel 会命名为 useXxxModel
function useChat(initial: { id: string }) {
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  return {
    messages,
    collapsed,
    setCollapsed,
    send: (text: string) => {
      /* ... */
    },
  };
}

export const { Provider: ChatProvider, useModel: useChatModel } =
  createCustomModel(useChat);
//                          ↑ 命名规则：XxxProvider                  ↑ 命名规则：useXxxModel
```

```tsx
// layout.tsx — 注入状态
import { ChatProvider } from "./model";

export default function ChatLayout() {
  return (
    <ChatProvider value={{ id: "default" }}>
      <Outlet />
    </ChatProvider>
  );
}
```

```tsx
// index.tsx — 消费状态
import { useChatModel } from "./model";

export default function ChatPage() {
  const { messages, collapsed, send } = useChatModel();
  // ...
}
```

### 常见错误

| ❌ 错误写法                                         | ✅ 正确写法                                                    |
| --------------------------------------------------- | -------------------------------------------------------------- |
| `layout.tsx` 里直接写页面 UI                        | `layout.tsx` 只写布局 + `<Outlet />`                           |
| `layout.tsx` 里用 `useChatModel()`                  | `layout.tsx` 只包裹 `<Provider>`，子页面通过 `useModel()` 消费 |
| `model.ts` 里导出 hook 但不调用 `createCustomModel` | 必须调用 `createCustomModel` 生成 Provider + useModel          |
| 把 Provider 放在 `index.tsx` 里                     | Provider 放在 `layout.tsx` 里，确保**整个**路由模块共享        |

---

## 3. 组件 & 逻辑内聚原则

**默认策略：就近内聚，延迟抽离。全部写在一个文件里，直到被复用才抽离。**

- 页面组件、请求逻辑、UI 片段**先写在一个文件里**
- 1 处使用 → 就地写
- 2 处及以上 → 抽离到对应目录
  - UI 组件 → `src/components/`
  - hooks → `src/hooks/`
  - 工具函数 → `src/utils/`
  - 类型 → `src/types/`

**例外：** 只有 `model.ts` 必须独立文件（因为 createCustomModel 要求单独导出 Provider）。

---

## 4. 样式规范

- 使用 Tailwind CSS 4 utility classes
- 复杂样式用 `@utility` 指令在 `src/main.css` 中定义
- 不要用 `style={{}}` 内联 style（除非动态计算）

---

## 5. 代码组织

```
src/
├── pages/              # 页面组件（文件路由）
│   ├── index.tsx       # /
│   ├── chat/
│   │   ├── model.ts    # useChatModel + createCustomModel → ChatProvider + useChatModel
│   │   ├── layout.tsx  # <ChatProvider><Outlet /></ChatProvider>
│   │   └── index.tsx   # /chat — 全部 UI
├── components/         # 共享组件（仅复用时抽离）
│   └── ai-elements/    # AI Elements CLI 生成的组件
├── hooks/              # 共享 hooks（仅复用时抽离）
├── models/             # 全局状态模型（跨路由共享）
├── utils/              # 工具函数
├── types/              # 共享类型定义
├── main.css            # 全局样式（Tailwind + @utility）
└── main.tsx            # 应用入口
```

---

## 7. 开发原则

- **默认一个文件** — UI、逻辑、状态写在同一个页面文件里，不复用就不抽离
- **类型安全** — 充分利用 TypeScript 6
- **可读性优先** — 代码清晰比聪明重要
