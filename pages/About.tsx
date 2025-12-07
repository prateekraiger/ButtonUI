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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent mb-6">
            Crafting Delightful Interactions
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            ButtonUI is a comprehensive collection of modern, interactive button
            components designed for the next generation of web applications.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col items-start gap-3 mb-6">
            <div className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="p-2 rounded-full bg-white/5 border border-white/5 text-zinc-400">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-100 tracking-tight">
                Our Mission
              </h2>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              We believe that great user interfaces are built on great
              interactions. ButtonUI exists to provide developers and
              designers with production-ready, beautiful button components
              that enhance user experience without sacrificing performance.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md mb-4 hover:border-white/20 transition-colors">
              <div className="p-2 rounded-full bg-white/5 border border-white/5 text-zinc-400">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                High Performance
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Built with performance in mind. All components are optimized for
              60fps animations and minimal bundle size.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md mb-4 hover:border-white/20 transition-colors">
              <div className="p-2 rounded-full bg-white/5 border border-white/5 text-zinc-400">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Developer Friendly
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Simple, clean code using React and Tailwind CSS. Copy-paste ready
              with full TypeScript support.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md mb-4 hover:border-white/20 transition-colors">
              <div className="p-2 rounded-full bg-white/5 border border-white/5 text-zinc-400">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Open Source
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Free and open source under MIT license. Use in personal and
              commercial projects without restrictions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <div className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md mb-4 hover:border-white/20 transition-colors">
              <div className="p-2 rounded-full bg-white/5 border border-white/5 text-zinc-400">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Community Driven
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Built by developers, for developers. Contributions and feedback
              are always welcome.
            </p>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-medium"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
