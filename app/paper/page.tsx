export default function PaperPage() {
  return (
    <div className="font-serif bg-white text-gray-900 min-h-screen p-8 max-w-4xl mx-auto leading-relaxed text-lg">
      <header className="text-center mb-16 border-b border-gray-900 pb-8">
        <h1 className="text-3xl font-bold uppercase tracking-tighter mb-4">Cognitive Sovereignty</h1>
        <p className="text-xl italic">On the Ownership of Human Judgment in the Age of Autonomous AI</p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest border-b border-gray-200 mb-6 pb-2">Abstract</h2>
        <p className="mb-4">
          We report on a personal experiment in which the author constructed an autonomous agent trained on their own decision-making patterns, risk evaluation criteria, and reasoning frameworks. 
          The agent demonstrated high fidelity in replicating <strong>what</strong> decisions were made, while systematically failing to capture <strong>who</strong> makes them.
        </p>
        <p>
          We document the cultural and technical mechanisms by which platforms currently extract human judgment without explicit consent or compensation, 
          and propose a framework for <strong>cognitive sovereignty</strong>—the principle that an individual's reasoning architecture constitutes a protectable and compensable asset.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest border-b border-gray-200 mb-6 pb-2">I. The Property Problem</h2>
        <p className="mb-4">
          The question of what artificial intelligence can and cannot replicate from the human mind has been approached primarily as a technical problem. 
          We argue it is, at its core, a property problem.
        </p>
        <p>
          In early 2026, the author conducted a personal experiment: constructing an agent trained on years of accumulated interaction data. 
          The results revealed a striking asymmetry: the replicable <em>know-that</em> and the irreplicable <em>know-how</em>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest border-b border-gray-200 mb-6 pb-2">II. The Extraction Mechanism</h2>
        <p className="mb-4">
          Contemporary AI platforms extract human judgment through mechanisms like <strong>RLHF (Reinforcement Learning from Human Feedback)</strong> 
          and behavioral telemetry. Every correction, every scroll, every dwell-time signal is a fragment of cognitive architecture being donated to 
          improve a system that will be sold back to the user.
        </p>
      </section>

      <footer className="text-sm text-gray-400 mt-20 border-t border-gray-100 pt-8">
        <p>© 2026 Cognitive Sovereignty Foundation | Full paper available upon request for accredited academic review.</p>
      </footer>
    </div>
  );
}
