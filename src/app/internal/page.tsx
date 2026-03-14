"use client";
import { useState } from 'react';

export default function InternalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState(['']);
  const [jsonResult, setJsonResult] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // En producción esto se valida contra process.env.INTERNAL_PASSWORD
    if (password === "Scfoundation2026()") {
      setIsAuthenticated(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const addOption = () => setOptions([...options, '']);
  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const trace = {
      type: "CognitiveTrace",
      id: `trace-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      input_context: { prompt: formData.get('prompt') },
      deliberation: {
        options: options.filter(o => o.trim() !== ''),
        trade_off: formData.get('trade_off'),
        uncertainty: parseFloat(formData.get('uncertainty'))
      },
      final_judgment: formData.get('justification')
    };
    setJsonResult(trace);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-serif">
        <form onSubmit={handleLogin} className="p-8 bg-white shadow-xl rounded-lg border border-gray-200">
          <h1 className="text-xl mb-6 font-bold text-gray-800">FSC — Intranet</h1>
          <input 
            type="password" 
            placeholder="Contraseña de acceso" 
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8 font-serif text-gray-900 max-w-4xl mx-auto">
      <header className="border-bottom border-gray-900 mb-12 pb-4">
        <h1 className="text-2xl font-bold uppercase tracking-tighter">Captura Cognitiva — SCCP v0.1</h1>
        <p className="text-gray-500 italic">Fundación Soberanía Cognitiva</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase mb-2">Contexto / Prompt</label>
            <textarea name="prompt" required className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase mb-2">Opciones Consideradas</label>
            {options.map((opt, i) => (
              <input 
                key={i}
                type="text" 
                value={opt}
                onChange={(e) => updateOption(i, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder={`Opción ${i+1}`}
              />
            ))}
            <button type="button" onClick={addOption} className="text-sm text-gray-500 underline">+ Añadir opción</button>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase mb-2">Trade-off Principal</label>
            <input type="text" name="trade_off" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase mb-2 text-flex justify-between">
              Incertidumbre 
            </label>
            <input type="range" name="uncertainty" min="0" max="1" step="0.01" className="w-full" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Baja</span>
              <span>Alta</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase mb-2">Justificación (Juicio Final)</label>
            <textarea name="justification" required className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
          </div>

          <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition">
            Generar Traza Cognitiva
          </button>
        </form>

        <div className="bg-gray-50 p-6 rounded border border-gray-200">
          <label className="block text-sm font-bold uppercase mb-4 text-gray-400">Resultado JSON-LD</label>
          {jsonResult ? (
            <pre className="text-xs overflow-auto h-[500px] bg-white p-4 border border-gray-100 shadow-inner">
              {JSON.stringify(jsonResult, null, 2)}
            </pre>
          ) : (
            <div className="h-[500px] flex items-center justify-center text-gray-300 italic text-sm">
              Complete el formulario para generar la traza...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
