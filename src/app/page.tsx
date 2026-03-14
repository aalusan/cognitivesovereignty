import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-serif bg-white text-gray-900 min-h-screen">
      <header className="py-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl font-bold tracking-tight">Cognitive Sovereignty Foundation</h1>
        </div>
      </header>

      <main>
        <section className="py-20 text-center border-b border-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 tracking-tighter">Who owns the way you think?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
              Your reasoning architecture is yours. <br />
              It has value. It deserves protection. <br />
              It should be compensated.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">The Working Paper</h3>
            <h4 className="text-2xl font-bold mb-6">Cognitive Sovereignty: On the Ownership of Human Judgment in the Age of Autonomous AI</h4>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We document how AI platforms extract human judgment without explicit consent or compensation. 
              We propose a framework for cognitive ownership, combining technical, legal, and economic dimensions.
            </p>
            <Link href="/paper/" className="inline-block bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition">
              Read the Working Paper →
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">The Foundation</h3>
            <p className="text-xl text-gray-800 leading-relaxed">
              We exist to establish that an individual's reasoning architecture is a protectable and compensable asset. 
              To build open standards for cognitive capture, certification, and fair compensation.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2026 Cognitive Sovereignty Foundation | <Link href="/internal/" className="underline">Intranet</Link></p>
        </div>
      </footer>
    </div>
  );
}
