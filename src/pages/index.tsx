import { useState } from "react";

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function LinearLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 10.5L9.5 18.5"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1.5 5.5L14.5 18.5"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1.5 15.5L4.5 18.5"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 1.5L18.5 13.5"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.5 1.5L18.5 8.5"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 1.5L18.5 3.5"
        stroke="#5e6ad2"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8.5L6.5 12L13 4.5"
        stroke="#10b981"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1V3"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M7 11V13"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M1 7H3"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M11 7H13"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M3.5 3.5L5 5"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 9L10.5 10.5"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 3.5L9 5"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M5 9L3.5 10.5"
        stroke="#7170ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 5L2.5 8L5.5 11"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 5L13.5 8L10.5 11"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3L7 13"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1L3 9H7.5L6.5 15L13 7H8.5L9.5 1Z"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1L14 4.5L8 8L2 4.5L8 1Z"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8L8 11.5L14 8"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11.5L8 15L14 11.5"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1L13 3V7.5C13 10.5 10.5 13.5 8 14.5C5.5 13.5 3 10.5 3 7.5V3L8 1Z"
        stroke="#8a8f98"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8L7.5 9.5L10 6.5"
        stroke="#10b981"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5H17"
        stroke="#d0d6e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 10H17"
        stroke="#d0d6e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 15H17"
        stroke="#d0d6e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L15 15"
        stroke="#d0d6e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 5L5 15"
        stroke="#d0d6e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(8, 9, 10, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LinearLogo />
          <span
            style={{
              fontSize: 16,
              fontWeight: 510,
              color: "#f7f8f8",
              fontFeatureSettings: "'cv01', 'ss03'",
              letterSpacing: "-0.165px",
            }}
          >
            template-vite-server
          </span>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", gap: 32 }}
          className="max-md:hidden"
        >
          <a
            href="#features"
            style={{
              fontSize: 14,
              fontWeight: 510,
              color: "#d0d6e0",
              textDecoration: "none",
              fontFeatureSettings: "'cv01', 'ss03'",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f8f8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#d0d6e0")}
          >
            特性
          </a>
          <a
            href="#tech"
            style={{
              fontSize: 14,
              fontWeight: 510,
              color: "#d0d6e0",
              textDecoration: "none",
              fontFeatureSettings: "'cv01', 'ss03'",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f8f8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#d0d6e0")}
          >
            技术栈
          </a>
          <a
            href="#get-started"
            style={{
              fontSize: 14,
              fontWeight: 510,
              color: "#d0d6e0",
              textDecoration: "none",
              fontFeatureSettings: "'cv01', 'ss03'",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f8f8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#d0d6e0")}
          >
            快速开始
          </a>

          <a
            href="#get-started"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              backgroundColor: "#5e6ad2",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 510,
              textDecoration: "none",
              borderRadius: 6,
              fontFeatureSettings: "'cv01', 'ss03'",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#7170ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#5e6ad2")
            }
          >
            开始使用
            <ArrowRightIcon />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
          className="max-md:block"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#0f1011",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <a
            href="#features"
            style={{
              color: "#d0d6e0",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 510,
              fontFeatureSettings: "'cv01', 'ss03'",
            }}
            onClick={() => setMobileOpen(false)}
          >
            特性
          </a>
          <a
            href="#tech"
            style={{
              color: "#d0d6e0",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 510,
              fontFeatureSettings: "'cv01', 'ss03'",
            }}
            onClick={() => setMobileOpen(false)}
          >
            技术栈
          </a>
          <a
            href="#get-started"
            style={{
              color: "#d0d6e0",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 510,
              fontFeatureSettings: "'cv01', 'ss03'",
            }}
            onClick={() => setMobileOpen(false)}
          >
            快速开始
          </a>
          <a
            href="#get-started"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "10px 16px",
              backgroundColor: "#5e6ad2",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 510,
              textDecoration: "none",
              borderRadius: 6,
              fontFeatureSettings: "'cv01', 'ss03'",
            }}
            onClick={() => setMobileOpen(false)}
          >
            开始使用
            <ArrowRightIcon />
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(94,106,210,0.08) 0%, rgba(94,106,210,0.02) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(113,112,255,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 12px 6px 8px",
          borderRadius: 9999,
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.02)",
          marginBottom: 32,
        }}
        className="animate-fade-in"
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#10b981",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontSize: 13,
            fontWeight: 510,
            color: "#d0d6e0",
            fontFeatureSettings: "'cv01', 'ss03'",
            letterSpacing: "-0.13px",
          }}
        >
          v0.0.1 · 已就绪
        </span>
      </div>

      <h1
        style={{
          fontSize: "clamp(36px, 6vw, 72px)",
          fontWeight: 510,
          lineHeight: 1,
          letterSpacing: "clamp(-0.8px, -0.13vw, -1.584px)",
          color: "#f7f8f8",
          fontFeatureSettings: "'cv01', 'ss03'",
          textAlign: "center",
          maxWidth: 800,
          marginBottom: 24,
        }}
        className="animate-fade-in-up"
      >
        构建现代 Web 应用
        <br />
        <span style={{ color: "#8a8f98" }}>从模板开始</span>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 1.5vw, 18px)",
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: "-0.165px",
          color: "#8a8f98",
          fontFeatureSettings: "'cv01', 'ss03'",
          textAlign: "center",
          maxWidth: 560,
          marginBottom: 48,
        }}
        className="animate-fade-in-up animation-delay-200"
      >
        一个基于 Vite + React + TypeScript
        的现代化项目模板，集成路由、状态管理和 Tailwind
        CSS，让你专注于构建，而非配置。
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        className="animate-fade-in-up animation-delay-300"
      >
        <a
          href="#get-started"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            backgroundColor: "#5e6ad2",
            color: "#ffffff",
            fontSize: 15,
            fontWeight: 510,
            textDecoration: "none",
            borderRadius: 6,
            fontFeatureSettings: "'cv01', 'ss03'",
            letterSpacing: "-0.165px",
            transition: "background-color 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#7170ff";
            e.currentTarget.style.boxShadow = "0 0 24px rgba(94,106,210,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#5e6ad2";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          快速开始
          <ArrowRightIcon />
        </a>
        <a
          href="#features"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            backgroundColor: "rgba(255,255,255,0.02)",
            color: "#e2e4e7",
            fontSize: 15,
            fontWeight: 510,
            textDecoration: "none",
            borderRadius: 6,
            border: "1px solid rgb(36, 40, 44)",
            fontFeatureSettings: "'cv01', 'ss03'",
            letterSpacing: "-0.165px",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")
          }
        >
          了解更多
        </a>
      </div>

      <div
        style={{
          marginTop: 64,
          width: "100%",
          maxWidth: 640,
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.02)",
          overflow: "hidden",
        }}
        className="animate-fade-in-up animation-delay-500"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#ff5f56",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#ffbd2e",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#27c93f",
            }}
          />
          <span
            style={{
              marginLeft: 12,
              fontSize: 12,
              fontWeight: 510,
              color: "#62666d",
              fontFeatureSettings: "'cv01', 'ss03'",
            }}
          >
            src/pages/index.tsx
          </span>
        </div>
        <div style={{ padding: "16px 20px", overflowX: "auto" }}>
          <pre
            style={{
              fontFamily:
                "'Berkeley Mono', ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: 13,
              lineHeight: 1.7,
              color: "#d0d6e0",
              margin: 0,
            }}
          >
            <code>{`import { createFileRoutes } from "@lightfish/router";

const routes = createFileRoutes({
  pages: import.meta.glob("/src/pages/**/*.tsx", { eager: true }),
});

export function App() {
  return <RouterProvider router={router} />;
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <ZapIcon />,
      title: "Vite 驱动",
      description:
        "基于 Vite 的极速开发体验，HMR 热更新毫秒级响应，构建速度随项目规模线性增长。",
    },
    {
      icon: <LayersIcon />,
      title: "文件路由",
      description:
        "基于文件系统的自动路由生成，无需手动配置路由表，目录结构即路由结构。",
    },
    {
      icon: <CodeIcon />,
      title: "TypeScript",
      description:
        "全栈 TypeScript 支持，从开发到构建的完整类型安全，减少运行时错误。",
    },
    {
      icon: <ShieldIcon />,
      title: "状态管理",
      description:
        "集成 @lightfish/react-model，轻量级状态管理方案，支持响应式数据流。",
    },
    {
      icon: <SparkleIcon />,
      title: "Tailwind CSS",
      description:
        "原子化 CSS 框架，快速构建自定义 UI，无需离开 HTML 即可完成样式设计。",
    },
    {
      icon: <CheckIcon />,
      title: "开箱即用",
      description: "ESLint 预配置，开发规范一键集成，团队协作零摩擦。",
    },
  ];

  return (
    <section
      id="features"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 510,
              color: "#7170ff",
              fontFeatureSettings: "'cv01', 'ss03'",
              letterSpacing: "-0.13px",
              marginBottom: 12,
            }}
          >
            FEATURES
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 510,
              lineHeight: 1,
              letterSpacing: "clamp(-0.6px, -0.09vw, -1.056px)",
              color: "#f7f8f8",
              fontFeatureSettings: "'cv01', 'ss03'",
              marginBottom: 16,
            }}
          >
            一切你需要的，都已就绪
          </h2>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#8a8f98",
              fontFeatureSettings: "'cv01', 'ss03'",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            精选的技术栈和工具链，让你从项目初始化到生产部署都保持高效。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                padding: "28px 24px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.02)",
                transition: "background-color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 590,
                  lineHeight: 1.5,
                  color: "#f7f8f8",
                  fontFeatureSettings: "'cv01', 'ss03'",
                  marginBottom: 8,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  letterSpacing: "-0.165px",
                  color: "#8a8f98",
                  fontFeatureSettings: "'cv01', 'ss03'",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const techs = [
    {
      name: "React 19",
      desc: "最新版 React，支持 Server Components 和 Actions",
      color: "#61dafb",
    },
    {
      name: "Vite 8",
      desc: "下一代前端构建工具，极速开发体验",
      color: "#646cff",
    },
    {
      name: "TypeScript 6",
      desc: "JavaScript 的超集，类型安全",
      color: "#3178c6",
    },
    {
      name: "Tailwind CSS 4",
      desc: "原子化 CSS 框架，Utility-first",
      color: "#06b6d4",
    },
    {
      name: "React Router 6",
      desc: "声明式路由，支持嵌套路由和加载器",
      color: "#f44250",
    },
    {
      name: "@lightfish/router",
      desc: "文件系统路由，自动生成路由配置",
      color: "#5e6ad2",
    },
    {
      name: "@lightfish/react-model",
      desc: "轻量级响应式状态管理",
      color: "#7170ff",
    },
    { name: "ESLint 10", desc: "代码质量检查，统一编码规范", color: "#4b32c3" },
  ];

  return (
    <section
      id="tech"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 510,
              color: "#7170ff",
              fontFeatureSettings: "'cv01', 'ss03'",
              letterSpacing: "-0.13px",
              marginBottom: 12,
            }}
          >
            TECH STACK
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 510,
              lineHeight: 1,
              letterSpacing: "clamp(-0.6px, -0.09vw, -1.056px)",
              color: "#f7f8f8",
              fontFeatureSettings: "'cv01', 'ss03'",
              marginBottom: 16,
            }}
          >
            技术栈
          </h2>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#8a8f98",
              fontFeatureSettings: "'cv01', 'ss03'",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            精选现代前端技术，构建可靠、可维护的 Web 应用。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 12,
          }}
        >
          {techs.map((tech) => (
            <div
              key={tech.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "20px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "rgba(255,255,255,0.015)",
                transition: "background-color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.015)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: tech.color,
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 590,
                    color: "#f7f8f8",
                    fontFeatureSettings: "'cv01', 'ss03'",
                    letterSpacing: "-0.165px",
                    marginBottom: 2,
                  }}
                >
                  {tech.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#62666d",
                    fontFeatureSettings: "'cv01', 'ss03'",
                    letterSpacing: "-0.13px",
                  }}
                >
                  {tech.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  const steps = [
    {
      num: "01",
      title: "克隆项目",
      code: "git clone <repo-url>\ncd template-vite-server",
    },
    {
      num: "02",
      title: "安装依赖",
      code: "pnpm install",
    },
    {
      num: "03",
      title: "启动开发服务器",
      code: "pnpm dev",
    },
    {
      num: "04",
      title: "开始构建",
      code: "pnpm build",
    },
  ];

  return (
    <section
      id="get-started"
      style={{
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 510,
              color: "#7170ff",
              fontFeatureSettings: "'cv01', 'ss03'",
              letterSpacing: "-0.13px",
              marginBottom: 12,
            }}
          >
            GET STARTED
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 510,
              lineHeight: 1,
              letterSpacing: "clamp(-0.6px, -0.09vw, -1.056px)",
              color: "#f7f8f8",
              fontFeatureSettings: "'cv01', 'ss03'",
              marginBottom: 16,
            }}
          >
            快速开始
          </h2>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#8a8f98",
              fontFeatureSettings: "'cv01', 'ss03'",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            只需几步，即可开始你的项目开发。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                padding: "24px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.02)",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.02)";
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 510,
                  color: "#62666d",
                  fontFeatureSettings: "'cv01', 'ss03'",
                  letterSpacing: "-0.13px",
                  marginBottom: 12,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 590,
                  lineHeight: 1.5,
                  color: "#f7f8f8",
                  fontFeatureSettings: "'cv01', 'ss03'",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <pre
                style={{
                  fontFamily:
                    "'Berkeley Mono', ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#8a8f98",
                  margin: 0,
                  padding: "12px 14px",
                  borderRadius: 6,
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  overflowX: "auto",
                }}
              >
                <code>{step.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: "48px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LinearLogo />
          <span
            style={{
              fontSize: 13,
              fontWeight: 510,
              color: "#62666d",
              fontFeatureSettings: "'cv01', 'ss03'",
              letterSpacing: "-0.13px",
            }}
          >
            template-vite-server
          </span>
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "#62666d",
            fontFeatureSettings: "'cv01', 'ss03'",
            letterSpacing: "-0.13px",
          }}
        >
          Built with Vite + React + TypeScript
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechStackSection />
        <GetStartedSection />
      </main>
      <Footer />
    </>
  );
}
