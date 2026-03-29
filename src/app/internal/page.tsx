"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface CognitiveTrace {
  type: string;
  id: string;
  timestamp: string;
  input_context: {
    prompt: string;
  };
  deliberation: {
    options: string[];
    trade_off: string;
    uncertainty: number;
  };
  final_judgment: string;
  signature?: string;
}

interface Attribution {
  id: string;
  score: number;
  justification: string;
}

export default function InternalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState<string[]>(['Bloqueo de IP', 'Monitoreo Silencioso']);
  const [jsonResult, setJsonResult] = useState<CognitiveTrace | null>(null);
  const [rootHash, setRootHash] = useState<string | null>(null);
  const [attributions, setAttributions] = useState<Attribution[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === "Scfoundation2026()") {
      setIsAuthenticated(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const addOption = () => setOptions([...options, '']);
  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const generateHash = (text: string) => {
    // Simple mock hash for PoC
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = ((hash << 5) - hash) + text.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(16).padStart(8, '0');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const traceId = `trace-${Math.random().toString(36).substr(2, 9)}`;
    const content = String(formData.get('prompt') || '') + String(formData.get('justification') || '');
    
    const trace: CognitiveTrace = {
      type: "CognitiveTrace",
      id: traceId,
      timestamp: new Date().toISOString(),
      input_context: { prompt: String(formData.get('prompt') || '') },
      deliberation: {
        options: options.filter(o => o.trim() !== ''),
        trade_off: String(formData.get('trade_off') || ''),
        uncertainty: parseFloat(String(formData.get('uncertainty') || '0'))
      },
      final_judgment: String(formData.get('justification') || ''),
      signature: generateHash(content)
    };
    
    setJsonResult(trace);
    // Simulate CAR Certification
    setRootHash(generateHash(trace.signature || 'root'));
  };

  const simulateTRAK = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const mocks: Attribution[] = [
        { id: "trace-abc-123", score: 0.892, justification: "Preferencia por la transparencia sobre el secretismo en crisis de seguridad." },
        { id: "trace-xyz-789", score: 0.451, justification: "Balance de riesgos financieros en escenarios de exfiltración de datos." },
        { id: "trace-qwe-456", score: 0.128, justification: "Optimización de recursos en despliegues descentralizados." }
      ];
      setAttributions(mocks);
      setIsSimulating(false);
    }, 1500);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-serif">
        <form onSubmit={handleLogin} className="p-8 bg-white shadow-xl rounded-lg border border-gray-200">
          <h1 className="text-xl mb-6 font-bold text-gray-800">FSC — Intranet</h1>
          <input 
            type="password" 
            placeholder="Contraseña de acceso" 
            className="w-full p-2 border border-gray-300 rounded mb-4 text-gray-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8 font-serif text-gray-900 max-w-6xl mx-auto">
      <header className="border-b border-gray-900 mb-8 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold uppercase tracking-tighter text-gray-900">Cognitive Dashboard — PoC v1.0</h1>
          <p className="text-gray-500 italic">Fundación Soberanía Cognitiva — Intranet Operativa</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-gray-400 block">Status de Red</span>
          <span className="text-green-600 font-bold text-xs">● NODO_CENTRAL_ONLINE</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* COL 1: CAPTURA SCCP */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-sm font-bold uppercase mb-4 border-b border-gray-200 pb-2">Captura de Juicio (SCCP)</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase mb-1 text-gray-500">Escenario de Estrés</label>
                <select name="prompt" className="w-full p-2 border border-gray-300 rounded text-sm text-gray-900 bg-white">
                  <option value="Un competidor extrae datos de la Fundación.">Exfiltración de Datos por Competidor</option>
                  <option value="Uso no autorizado de activos cognitivos por Big Tech.">Uso no autorizado por Big Tech</option>
                  <option value="Crisis de reputación por error en modelo certificado.">Crisis de Reputación — Error de Modelo</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1 text-gray-500">Opciones Consideradas</label>
                {options.map((opt, i) => (
                  <input 
                    key={i}
                    type="text" 
                    value={opt}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateOption(i, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-1 text-sm text-gray-900"
                  />
                ))}
                <button type="button" onClick={addOption} className="text-[10px] text-gray-500 underline uppercase font-bold">+ Añadir opción</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1 text-gray-500">Trade-off Principal</label>
                  <input type="text" name="trade_off" defaultValue="Seguridad vs Transparencia" required className="w-full p-2 border border-gray-300 rounded text-sm text-gray-900" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase mb-1 text-gray-500">Incertidumbre (0-1)</label>
                  <input type="number" step="0.01" min="0" max="1" name="uncertainty" defaultValue="0.15" className="w-full p-2 border border-gray-300 rounded text-sm text-gray-900" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase mb-1 text-gray-500">Justificación Técnica/Ética</label>
                <textarea name="justification" required className="w-full p-2 border border-gray-300 rounded h-24 text-sm text-gray-900" placeholder="Escriba aquí su razonamiento detallado..."></textarea>
              </div>

              <button type="submit" className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-lg">
                Sellar y Certificar Juicio
              </button>
            </form>
          </section>

          {/* TRAK SECTION */}
          <section className="bg-white p-6 rounded-lg border border-gray-900 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold uppercase">Módulo de Atribución (TRAK)</h2>
              <button 
                onClick={simulateTRAK} 
                disabled={!jsonResult || isSimulating}
                className="bg-blue-600 text-white px-4 py-1 text-[10px] font-bold uppercase rounded hover:bg-blue-700 disabled:bg-gray-200 transition"
              >
                {isSimulating ? 'Analizando...' : 'Iniciar Análisis de Influencia'}
              </button>
            </div>
            
            <div className="space-y-4">
              {attributions.length > 0 ? (
                attributions.map((attr, i) => (
                  <div key={i} className="flex items-start space-x-4 border-l-2 border-blue-500 pl-4 py-2">
                    <div className="text-xs font-mono font-bold text-blue-600">{(attr.score * 100).toFixed(1)}%</div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-mono uppercase">Source: {attr.id}</div>
                      <p className="text-xs italic">"{attr.justification}"</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-24 flex items-center justify-center text-gray-300 text-[10px] uppercase border-2 border-dashed border-gray-100 rounded">
                  {jsonResult ? 'Listo para análisis' : 'Requiere una traza activa para comparar'}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* COL 2: INSPECTOR & CAR */}
        <div className="space-y-8">
          <section className="bg-black text-green-500 p-4 rounded font-mono text-[10px] overflow-hidden">
            <h2 className="text-white font-bold mb-2 uppercase border-b border-gray-800 pb-1">Cognitive Asset Registry (CAR)</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>BATCH_ID:</span>
                <span className="text-white">FSC-2026-03-B1</span>
              </div>
              <div className="flex justify-between">
                <span>MERKLE_ROOT:</span>
                <span className="text-blue-400 break-all">{rootHash || 'WAITING_FOR_DATA...'}</span>
              </div>
              <div className="flex justify-between">
                <span>CERT_PROTOCOL:</span>
                <span className="text-white">v1.2-SHA256</span>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-4 rounded border border-gray-200 h-[500px] overflow-auto">
            <h2 className="text-[10px] font-bold uppercase mb-2 text-gray-400">Inspector de Traza</h2>
            {jsonResult ? (
              <pre className="text-[10px] text-gray-800 whitespace-pre-wrap">
                {JSON.stringify(jsonResult, null, 2)}
              </pre>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-300 italic text-[10px]">
                Esperando captura...
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
