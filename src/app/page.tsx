import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-mono bg-black text-green-500 min-h-screen selection:bg-green-900 selection:text-black">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-black/90 border-b border-green-500/30 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-sm animate-pulse"></div>
            <span className="text-sm font-bold tracking-[0.2em] text-green-400">SYS.COGNITIVE_SOVEREIGNTY</span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-bold tracking-widest text-green-600 uppercase">
            <a href="#manifesto" className="hover:text-green-400 transition-colors">>> Manifesto</a>
            <a href="#protocol" className="hover:text-green-400 transition-colors">>> Protocol</a>
            <a href="#paper" className="hover:text-green-400 transition-colors">>> Research</a>
            <Link href="/internal" className="hover:text-green-400 transition-colors">>> Intranet</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 relative overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/30 border border-green-500/50 text-green-400 text-xs tracking-widest uppercase mb-8 shadow-[0_0_10px_rgba(0,255,0,0.2)]">
              <span>[ INITIALIZING GLOBAL STANDARD ]</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[1.1] uppercase drop-shadow-[0_0_15px_rgba(0,255,0,0.5)]">
              PROTECTING THE <br />
              <span className="text-green-500">
                OWNERSHIP OF HUMAN JUDGMENT
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-400/80 max-w-2xl leading-relaxed mb-12 border-l-2 border-green-500 pl-6">
              > We define and protect the legal and technical boundaries of cognitive ownership in the age of autonomous AI. Your reasoning architecture is a protectable, compensable asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/paper" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-black font-bold uppercase tracking-widest hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(0,255,0,0.4)]">
                [ EXECUTE: Read_Paper ]
              </Link>
              <a href="#protocol" className="inline-flex items-center justify-center px-6 py-3 bg-black text-green-500 font-bold uppercase tracking-widest border border-green-500 hover:bg-green-950 transition-colors">
                [ EXECUTE: Explore_Protocol ]
              </a>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="px-6 py-24 bg-black border-y border-green-500/30 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-16 tracking-widest uppercase"><span className="text-green-700">/*</span> Foundational Principles <span className="text-green-700">*/</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4 border border-green-500/20 p-6 bg-green-950/10 hover:border-green-500/50 transition-colors">
                <div className="text-green-500 text-sm tracking-widest animate-pulse">[ 0x01 ]</div>
                <h3 className="text-xl font-bold text-white uppercase">The Scarcity of Judgment</h3>
                <p className="text-green-400/70 leading-relaxed text-sm">
                  Information is abundant and effectively free. Human criterion, intuition, and the ability to navigate uncertainty are the only remaining scarce cognitive assets.
                </p>
              </div>
              <div className="space-y-4 border border-green-500/20 p-6 bg-green-950/10 hover:border-green-500/50 transition-colors">
                <div className="text-green-500 text-sm tracking-widest animate-pulse">[ 0x02 ]</div>
                <h3 className="text-xl font-bold text-white uppercase">Sovereign Consent</h3>
                <p className="text-green-400/70 leading-relaxed text-sm">
                  Extracting, replicating, and deploying an individual's reasoning architecture without explicit consent and direct compensation is a violation of cognitive property.
                </p>
              </div>
              <div className="space-y-4 border border-green-500/20 p-6 bg-green-950/10 hover:border-green-500/50 transition-colors">
                <div className="text-green-500 text-sm tracking-widest animate-pulse">[ 0x03 ]</div>
                <h3 className="text-xl font-bold text-white uppercase">Deliberate Architecture</h3>
                <p className="text-green-400/70 leading-relaxed text-sm">
                  This framework must be built correctly or not at all. We prioritize rigorous, long-term technical and legal validation over rapid, unstable deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Section */}
        <section id="protocol" className="px-6 py-24 max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-6 tracking-widest uppercase">>> Technical Framework</h2>
            <p className="text-lg text-green-400/80">
              A dual-protocol architecture designed to cryptographically capture expert intuition and mathematically attribute its value when deployed autonomously.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-l-4 border-green-500 bg-green-950/20 hover:bg-green-950/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-2 py-1 bg-green-500 text-black font-bold text-xs tracking-widest">SYS.SCCP</div>
                <h3 className="text-xl font-bold text-white uppercase">Standard Cognitive Capture Protocol</h3>
              </div>
              <p className="text-green-400/70 leading-relaxed text-sm">
                A structured methodology to map how experts resolve uncertainty. It isolates the "intuition pattern" and the "risk profile" assumed during high-stakes decision-making, converting human judgment into a protectable dataset.
              </p>
            </div>
            
            <div className="p-8 border-l-4 border-green-500 bg-green-950/20 hover:bg-green-950/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-2 py-1 bg-green-500 text-black font-bold text-xs tracking-widest">SYS.TRAK</div>
                <h3 className="text-xl font-bold text-white uppercase">Traceable Reasoning & Attribution Kernel</h3>
              </div>
              <p className="text-green-400/70 leading-relaxed text-sm">
                The economic engine. If a captured cognitive pattern is utilized by an AI to solve a subsequent problem, TRAK traces the exact usage and executes an attribution model to ensure the original creator is compensated.
              </p>
            </div>
          </div>
        </section>

        {/* Research / Paper Section */}
        <section id="paper" className="px-6 py-24 bg-black border-t border-green-500/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-500 mb-6 tracking-widest uppercase">[ INIT: RESEARCH_MODULE ]</h2>
            <p className="text-green-400/80 mb-10 max-w-2xl mx-auto text-sm">
              Our latest preprint details the convergence of law, economics, and AI systems required to establish the ownership of human judgment.
            </p>
            <div className="p-6 md:p-8 border border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.1)] bg-black text-left max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-green-500 m-2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-green-500 m-2 pointer-events-none"></div>
              
              <div className="text-xs font-bold text-green-600 mb-3 tracking-widest">PREPRINT v2.0 // MAR 2026</div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">Cognitive Sovereignty: On the Ownership of Human Judgment in the Age of Autonomous AI</h3>
              <p className="text-green-400/70 mb-6 text-sm leading-relaxed">
                A comprehensive framework proposing the "Cognitive Constitution" structured around the right to cognitive sovereignty, algorithmic transparency, neural data protection, and legal accountability.
              </p>
              <Link href="/paper" className="inline-flex items-center gap-2 text-green-500 font-bold uppercase tracking-widest hover:text-white transition-colors">
                [ ACCESS_DOCUMENT ] <span className="text-lg animate-pulse">_</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-green-500/30 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-green-600 font-bold tracking-widest uppercase">
          <p>SYS.COPYRIGHT © 2026 // COGNITIVE SOVEREIGNTY FOUNDATION</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/internal" className="hover:text-green-400 transition-colors">>> INTRANET_PORTAL</Link>
            <a href="#" className="hover:text-green-400 transition-colors">>> LEGAL_TERMS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}