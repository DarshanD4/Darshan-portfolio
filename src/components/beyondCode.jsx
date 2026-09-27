import { motion } from "framer-motion";

export default function BeyondCode() {
  const interests = [
    {
      label: "Product Thinking",
      desc: "Iterating on user flows, micro-interactions, and creating frictionless mobile experiences.",
      emoji: "💡",
    },
    {
      label: "Continuous Learning",
      desc: "Diving into new AI architectures, vision models, and emerging cross-platform tooling.",
      emoji: "📚",
    },
    {
      label: "Competitive Hackathons",
      desc: "Building MVPs under 48-hour sprints — like our prize-winning AITM Codefest AI assistant.",
      emoji: "🏆",
    },
    {
      label: "System Design",
      desc: "Exploring how distributed databases, state managers, and offline queues fit together gracefully.",
      emoji: "⚙️",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="pro-card p-8 sm:p-12 bg-white dark:bg-slate-800/90 text-center relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-b from-sky-400/15 to-transparent blur-2xl pointer-events-none" />

          {/* Tag */}
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Beyond The Code
          </span>

          {/* Narrative */}
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-xl mx-auto">
            Exploring the intersection of technology, design & real-world products.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            When I&apos;m not building apps, I&apos;m usually learning something new, experimenting with ideas, or working on my next project. I care deeply about how software feels to everyday people, not just how it looks in code reviews.
          </p>

          {/* 4 Subtle Interest Chips */}
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 text-left">
            {interests.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3"
              >
                <span className="text-xl shrink-0 mt-0.5">{item.emoji}</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
