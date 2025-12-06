import React, { useState } from "react";
import {
  Github,
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
import { buttonCollection, ButtonItem } from "./data/buttons";

const App: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonItem | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-purple-500/30 font-sans">
      {/* Background Ambient Noise/Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Header */}
        <header className="text-center mb-32 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-6 hover:bg-white/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            v2.0 Release
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent pb-4">
            Lumina UI
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A curated museum of high-performance, interaction-heavy buttons.
            <br className="hidden md:block" />
            Crafted for the modern web with Tailwind CSS.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/prateekraiger"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-all hover:scale-105 font-medium shadow-lg shadow-white/10"
            >
              <Github className="w-4 h-4" />
              <span>@prateekraiger</span>
            </a>
          </div>
        </header>

        {/* Categories & Grid */}
        <div className="space-y-32">
          <CategorySection
            title="Fluid Interface"
            description="Organic animations that mimic liquid properties"
            icon={<Sparkles className="w-5 h-5 text-cyan-400" />}
            buttons={buttonCollection.filter((b) => b.category === "fluid")}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Depth & Dimension"
            description="3D transforms that break the 2D plane"
            icon={<Box className="w-5 h-5 text-purple-400" />}
            buttons={buttonCollection.filter((b) => b.category === "3d")}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Interaction Lab"
            description="Micro-interactions that delight users"
            icon={<Zap className="w-5 h-5 text-yellow-400" />}
            buttons={buttonCollection.filter(
              (b) => b.category === "interaction"
            )}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Typography"
            description="Text-based animations and reveals"
            icon={<Type className="w-5 h-5 text-emerald-400" />}
            buttons={buttonCollection.filter(
              (b) => b.category === "typography"
            )}
            onSelect={setSelectedButton}
          />

          <CategorySection
            title="Design Aesthetics"
            description="Styles from Brutalism to Glassmorphism"
            icon={<Layers className="w-5 h-5 text-rose-400" />}
            buttons={buttonCollection.filter((b) => b.category === "aesthetic")}
            onSelect={setSelectedButton}
          />
        </div>

        {/* Footer */}
        <footer className="mt-40 border-t border-white/5 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-sm">
          <p>© 2024 Lumina UI Kit. Open Source.</p>
          <div className="flex items-center gap-8">
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">
              License
            </span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">
              Docs
            </span>
            <a
              href="https://github.com/prateekraiger"
              className="hover:text-zinc-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
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
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/5 pb-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-zinc-500 mt-1 font-light">{description}</p>
          )}
        </div>
      </div>
      <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
        {buttons.length} Components
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {buttons.map((btn) => (
        <div
          key={btn.id}
          className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl h-64 flex flex-col items-center justify-center gap-6 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
        >
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              onClick={() => onSelect(btn)}
              className="p-2.5 rounded-xl bg-white text-black hover:scale-110 transition-transform shadow-lg shadow-white/20"
              title="View Code"
            >
              <Code2 className="w-4 h-4" />
            </button>
          </div>

          <div className="transform scale-100 transition-transform duration-500 group-hover:scale-110 z-10">
            <btn.component />
          </div>

          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-[#09090b] border border-white/10 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#09090b]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
              <Terminal className="w-4 h-4 text-zinc-400" />
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
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Preview Area */}
          <div className="w-full md:w-1/3 bg-[#050505] border-r border-white/10 flex flex-col items-center justify-center p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[14px_14px]"></div>
            <div className="relative z-10 transform scale-125">
              <button.component />
            </div>
          </div>

          {/* Code Area */}
          <div className="flex-1 bg-[#0c0c0e] overflow-hidden flex flex-col relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  copied
                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                    : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {copied ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6 scrollbar-hide">
              <pre className="text-[13px] font-mono leading-relaxed text-zinc-300">
                <code className="language-tsx">{button.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
