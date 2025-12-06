import React from "react";
import { Sparkles, Target, Zap, Heart, Code2, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-6">
            <Sparkles className="w-3 h-3" />
            About ButtonUI
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent mb-6">
            Crafting Delightful Interactions
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            ButtonUI is a comprehensive collection of modern, interactive button
            components designed for the next generation of web applications.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-zinc-400 leading-relaxed">
                We believe that great user interfaces are built on great
                interactions. ButtonUI exists to provide developers and designers
                with production-ready, beautiful button components that enhance
                user experience without sacrificing performance.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              High Performance
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Built with performance in mind. All components are optimized for
              60fps animations and minimal bundle size.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-4">
              <Code2 className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Developer Friendly
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Simple, clean code using React and Tailwind CSS. Copy-paste ready
              with full TypeScript support.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit mb-4">
              <Heart className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Open Source
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Free and open source under MIT license. Use in personal and
              commercial projects without restrictions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 w-fit mb-4">
              <Users className="w-5 h-5 text-rose-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Community Driven
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Built by developers, for developers. Contributions and feedback are
              always welcome.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚛️</div>
              <div className="text-sm font-medium text-white">React 19</div>
              <div className="text-xs text-zinc-500 mt-1">Framework</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎨</div>
              <div className="text-sm font-medium text-white">Tailwind CSS</div>
              <div className="text-xs text-zinc-500 mt-1">Styling</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📘</div>
              <div className="text-sm font-medium text-white">TypeScript</div>
              <div className="text-xs text-zinc-500 mt-1">Type Safety</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-sm font-medium text-white">Vite</div>
              <div className="text-xs text-zinc-500 mt-1">Build Tool</div>
            </div>
          </div>
        </div>

        {/* Creator Section */}
        <div className="text-center">
          <p className="text-zinc-400 mb-4">
            Created and maintained by{" "}
            <a
              href="https://github.com/prateekraiger"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              @prateekraiger
            </a>
          </p>
          <a
            href="https://github.com/prateekraiger"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-medium hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
