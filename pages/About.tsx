import React from "react";
import { Sparkles, Target, Zap, Heart, Code2, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400">
            <Sparkles className="h-3 w-3" />
            About ButtonUI
          </div>
          <h1 className="mb-6 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
            Crafting Delightful Interactions
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400">
            ButtonUI is a comprehensive collection of modern, interactive button
            components designed for the next generation of web applications.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="mb-6 flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/50 py-2 pr-6 pl-2 backdrop-blur-md transition-colors hover:border-white/20">
              <div className="rounded-full border border-white/5 bg-white/5 p-2 text-zinc-400">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
                Our Mission
              </h2>
            </div>
            <p className="leading-relaxed text-zinc-400">
              We believe that great user interfaces are built on great
              interactions. ButtonUI exists to provide developers and designers
              with production-ready, beautiful button components that enhance
              user experience without sacrificing performance.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/50 py-2 pr-6 pl-2 backdrop-blur-md transition-colors hover:border-white/20">
              <div className="rounded-full border border-white/5 bg-white/5 p-2 text-zinc-400">
                <Zap className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                High Performance
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Built with performance in mind. All components are optimized for
              60fps animations and minimal bundle size.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/50 py-2 pr-6 pl-2 backdrop-blur-md transition-colors hover:border-white/20">
              <div className="rounded-full border border-white/5 bg-white/5 p-2 text-zinc-400">
                <Code2 className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Developer Friendly
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Simple, clean code using React and Tailwind CSS. Copy-paste ready
              with full TypeScript support.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/50 py-2 pr-6 pl-2 backdrop-blur-md transition-colors hover:border-white/20">
              <div className="rounded-full border border-white/5 bg-white/5 p-2 text-zinc-400">
                <Heart className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Open Source
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Free and open source under MIT license. Use in personal and
              commercial projects without restrictions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/50 py-2 pr-6 pl-2 backdrop-blur-md transition-colors hover:border-white/20">
              <div className="rounded-full border border-white/5 bg-white/5 p-2 text-zinc-400">
                <Users className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Community Driven
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Built by developers, for developers. Contributions and feedback
              are always welcome.
            </p>
          </div>
        </div>

        {/* Creator Section */}
        <div className="text-center">
          <p className="mb-4 text-zinc-400">
            Created and maintained by{" "}
            <a
              href="https://github.com/prateekraiger"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white transition-colors hover:text-purple-400"
            >
              @prateekraiger
            </a>
          </p>
          <a
            href="https://github.com/prateekraiger"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:bg-zinc-200"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
