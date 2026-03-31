import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans bg-slate-950 text-slate-200 min-h-screen selection:bg-blue-900 selection:text-white">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
            <span className="text-sm font-semibold tracking-wide text-white">COGNITIVE SOVEREIGNTY</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#protocol" className="hover:text-white transition-colors">Protocol</a>
            <a href="#paper" className="hover:text-white transition-colors">Research</a>
            <Link href="/internal" className="hover:text-white transition-colors">Intranet</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/30 border border-blue-900/50 text-blue-400 text-xs font-medium tracking-widest uppercase mb-8">
              <span>Establishing the Global Standard</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Protecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">
                ownership of human judgment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12">
              We define and protect the legal and technical boundaries of cognitive ownership in the age of autonomous AI. Your reasoning architecture is a protectable, compensable asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/paper" className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                Read the Working Paper
              </Link>
              <a href="#protocol" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors">
                Explore the Protocol
              </a>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="px-6 py-24 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">Fundational Principles</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-blue-500 font-mono text-sm tracking-widest">01</div>
                <h3 className="text-xl font-semibold text-white">The Scarcity of Judgment</h3>
                <p className="text-slate-400 leading-relaxed">
                  Information is abundant and effectively free. Human criterion, intuition, and the ability to navigate uncertainty are the only remaining scarce cognitive assets.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-blue-500 font-mono text-sm tracking-widest">02</div>
                <h3 className="text-xl font-semibold text-white">Sovereign Consent</h3>
                <p className="text-slate-400 leading-relaxed">
                  Extracting, replicating, and deploying an individual's reasoning architecture without explicit consent and direct compensation is a violation of cognitive property.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-blue-500 font-mono text-sm tracking-widest">03</div>
                <h3 className="text-xl font-semibold text-white">Deliberate Architecture</h3>
                <p className="text-slate-400 leading-relaxed">
                  This framework must be built correctly or not at all. We prioritize rigorous, long-term technical and legal validation over rapid, unstable deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Section */}
        <section id="protocol" className="px-6 py-24 max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">The Technical Framework</h2>
            <p className="text-lg text-slate-400">
              A dual-protocol architecture designed to cryptographically capture expert intuition and mathematically attribute its value when deployed autonomously.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-2 py-1 bg-slate-800 rounded text-xs font-mono text-slate-300">SCCP</div>
                <h3 className="text-xl font-semibold text-white">Standard Cognitive Capture Protocol</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                A structured methodology to map how experts resolve uncertainty. It isolates the "intuition pattern" and the "risk profile" assumed during high-stakes decision-making, converting human judgment into a protectable dataset.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-2 py-1 bg-slate-800 rounded text-xs font-mono text-slate-300">TRAK</div>
                <h3 className="text-xl font-semibold text-white">Traceable Reasoning & Attribution Kernel</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The economic engine. If a captured cognitive pattern is utilized by an AI to solve a subsequent problem, TRAK traces the exact usage and executes an attribution model to ensure the original creator is compensated.
              </p>
            </div>
          </div>
        </section>

        {/* Research / Paper Section */}
        <section id="paper" className="px-6 py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Read the Foundational Paper</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
              Our latest preprint details the convergence of law, economics, and AI systems required to establish the ownership of human judgment.
            </p>
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 text-left max-w-3xl mx-auto">
              <div className="text-sm font-mono text-blue-400 mb-3">Preprint v2.0 • Mar 2026</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cognitive Sovereignty: On the Ownership of Human Judgment in the Age of Autonomous AI</h3>
              <p className="text-slate-400 mb-6">
                A comprehensive framework proposing the "Cognitive Constitution" structured around the right to cognitive sovereignty, algorithmic transparency, neural data protection, and legal accountability.
              </p>
              <Link href="/paper" className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
                View Document <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-800/50 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© 2026 Cognitive Sovereignty Foundation</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/internal" className="hover:text-white transition-colors">Intranet / Portal</Link>
            <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}