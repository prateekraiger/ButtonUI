import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";
import {
  Code2,
  Copy,
  Check,
  X,
  Sparkles,
  Layers,
  Box,
  Terminal,
  Zap,
  Type,
} from "lucide-react";
import { buttonCollection } from "../data/buttons";
import { ButtonItem } from "../data/buttons/types";
import { FlickeringGrid } from "../components/ui/flickering-grid";
import { OutlineText } from "../components/outline-text";

const Home: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonItem | null>(null);

  return (
    <div className="relative min-h-screen bg-black selection:bg-zinc-800 selection:text-white">
      {/* Background Flickering Grid */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-24">
        {/* Header */}
        <header className="animate-fade-in-up mb-32 space-y-8 pt-20 text-center">
          <div className="mb-6 inline-flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm transition-colors hover:bg-white/10">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
            v1.0 Release
          </div>

          <h1 className="bg-linear-to-b from-white via-white to-zinc-500 bg-clip-text pb-4 text-6xl font-bold tracking-tighter text-transparent drop-shadow-2xl md:text-8xl">
            <OutlineText>ButtonUI</OutlineText>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-zinc-400 md:text-xl">
            The ultimate collection of{" "}
            <span className="font-medium text-zinc-200">high-performance</span>,
            interaction-heavy buttons.
            <br className="hidden md:block" />
            Designed to{" "}
            <span className="font-medium text-zinc-200">elevate</span> your user
            interface.
            <br />
            <span className="mt-2 block text-base text-zinc-500">
              100% React & Tailwind CSS. Copy, paste, done.
            </span>
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="#buttons"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-zinc-900">
                Explore Collection
              </span>
            </a>
            <a
              href="https://github.com/prateekraiger/button-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:ring-ring group relative flex h-9 w-full max-w-52 items-center justify-center gap-2 overflow-hidden rounded-md bg-black px-4 py-2 text-sm font-medium whitespace-pre text-white shadow transition-all duration-300 ease-out hover:bg-black/90 hover:ring-2 hover:ring-black hover:ring-offset-2 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:flex"
            >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 438.549 438.549"
                >
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                </svg>
                <span className="ml-1 text-white">Star on GitHub</span>
              </div>
              <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                <svg
                  className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="font-display inline-block font-medium tracking-wider text-white tabular-nums">
                  6
                </span>
              </div>
            </a>
          </div>
        </header>

        {/* Categories & Grid */}
        <div id="buttons" className="space-y-32">
          <CategorySection
            title="Fluid Interface"
            description="Organic animations that mimic liquid properties"
            icon={<Sparkles className="h-5 w-5 text-zinc-400" />}
            buttons={buttonCollection.filter((b) => b.category === "fluid")}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Depth & Dimension"
            description="3D transforms that break the 2D plane"
            icon={<Box className="h-5 w-5 text-zinc-400" />}
            buttons={buttonCollection.filter((b) => b.category === "3d")}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Interaction Lab"
            description="Micro-interactions that delight users"
            icon={<Zap className="h-5 w-5 text-zinc-400" />}
            buttons={buttonCollection.filter(
              (b) => b.category === "interaction"
            )}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Typography"
            description="Text-based animations and reveals"
            icon={<Type className="h-5 w-5 text-zinc-400" />}
            buttons={buttonCollection.filter(
              (b) => b.category === "typography"
            )}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Design Aesthetics"
            description="Styles from Brutalism to Glassmorphism"
            icon={<Layers className="h-5 w-5 text-zinc-400" />}
            buttons={buttonCollection.filter((b) => b.category === "aesthetic")}
            onSelect={setSelectedButton}
          />
        </div>
      </div>

      {/* Code Modal */}
      {selectedButton && (
        <CodeModal
          button={selectedButton}
          onClose={() => setSelectedButton(null)}
        />
      )}
    </div>
  );
};

const CategorySection: React.FC<{
  title: string;
  description?: string;
  icon: React.ReactNode;
  buttons: ButtonItem[];
  onSelect: (b: ButtonItem) => void;
}> = ({ title, description, icon, buttons, onSelect }) => (
  <section className="animate-fade-in">
    <div className="group mb-10 flex w-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 md:flex-row md:items-center">
      <div className="flex items-center gap-5">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-zinc-400 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-100 md:text-2xl">
            {title}
          </h2>
          {description && (
            <p className="mt-1 text-sm font-light text-zinc-400 transition-colors group-hover:text-zinc-300 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-white/5 bg-black/20 px-4 py-2 font-mono text-xs tracking-widest text-zinc-500 uppercase">
        {buttons.length} Components
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {buttons.map((btn) => (
        <div
          key={btn.id}
          className="group relative flex h-64 flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A] transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50"
        >
          {/* Grid Background Pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

          <div className="absolute top-4 right-4 z-20 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
            <button
              onClick={() => onSelect(btn)}
              className="rounded-xl border border-white/10 bg-zinc-900/90 p-2.5 text-zinc-400 shadow-lg shadow-black/50 backdrop-blur-md transition-all hover:scale-110 hover:border-white/20 hover:text-white"
              title="View Code"
            >
              <Code2 className="h-4 w-4" />
            </button>
          </div>

          <div className="z-10 scale-100 transform transition-transform duration-500 group-hover:scale-110">
            <btn.component />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-center bg-linear-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[10px] tracking-widest text-zinc-400 uppercase backdrop-blur-md">
              {btn.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CodeModal: React.FC<{ button: ButtonItem; onClose: () => void }> = ({
  button,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(button.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md duration-300"
      onClick={onClose}
    >
      <div
        className="animate-in zoom-in-95 flex max-h-[90vh] w-full max-w-4xl scale-100 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#09090b] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2">
              <Terminal className="h-4 w-4 text-zinc-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                {button.name}
              </h3>
              <p className="text-xs text-zinc-500">React + Tailwind CSS</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
          {/* Preview Area */}
          <div className="group relative flex w-full flex-col items-center justify-center overflow-hidden border-r border-white/10 bg-[#050505] p-12 md:w-1/3">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[14px_14px]"></div>
            <div className="relative z-10 scale-125 transform">
              <button.component />
            </div>
          </div>

          {/* Code Area */}
          <div className="relative flex flex-1 flex-col overflow-hidden bg-[#0c0c0e]">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                  copied
                    ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {copied ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="scrollbar-hide flex-1 overflow-auto p-6">
              <Highlight
                theme={themes.nightOwl}
                code={button.code}
                language="tsx"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    className={`font-mono text-[13px] leading-relaxed ${className}`}
                    style={{ ...style, backgroundColor: "transparent" }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
