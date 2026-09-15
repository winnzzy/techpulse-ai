"use client";

import { useMemo, useState } from "react";

type Tier = { name:string; params:string; q4:number; q8:number; note:string };
const tiers:Tier[] = [
  { name:"Small local models", params:"1B–4B", q4:3, q8:6, note:"Fast assistants, extraction and lightweight coding or writing tasks." },
  { name:"Everyday local models", params:"7B–8B", q4:6, q8:10, note:"A strong starting class for general chat, coding and private document workflows." },
  { name:"Mid-size local models", params:"12B–14B", q4:10, q8:18, note:"More capability, but noticeably heavier memory and compute requirements." },
  { name:"Large local models", params:"30B–32B", q4:22, q8:38, note:"Better suited to high-memory desktops, workstations or partial CPU offload." },
  { name:"Very large local models", params:"70B class", q4:46, q8:82, note:"Workstation/server territory for comfortable local use; memory is only one constraint." },
];

export default function HardwareChecker() {
  const [ram,setRam] = useState(16);
  const [vram,setVram] = useState(0);
  const [shared,setShared] = useState(true);
  const [quant,setQuant] = useState<"q4"|"q8">("q4");

  const result = useMemo(() => {
    const systemReserve = Math.max(4, Math.min(8, ram * .25));
    const usableRam = Math.max(0, ram - systemReserve);
    const memoryPool = shared ? usableRam : Math.max(usableRam, vram);
    const comfortable = tiers.filter(t => t[quant] <= memoryPool * .8);
    const possible = tiers.filter(t => t[quant] <= memoryPool);
    return { systemReserve, usableRam, memoryPool, best: comfortable.at(-1) ?? possible.at(-1) ?? null };
  },[ram,vram,shared,quant]);

  return <div className="calculator-shell">
    <div className="calculator-inputs">
      <label>System RAM (GB)<input type="number" min="4" max="512" value={ram} onChange={e=>setRam(Number(e.target.value))}/></label>
      <label>Dedicated GPU VRAM (GB)<input type="number" min="0" max="192" value={vram} onChange={e=>setVram(Number(e.target.value))}/></label>
      <label>Memory setup<select value={shared?"shared":"dedicated"} onChange={e=>setShared(e.target.value==="shared")}><option value="shared">CPU / integrated or unified-memory style estimate</option><option value="dedicated">Dedicated GPU, with CPU offload available</option></select></label>
      <label>Model precision<select value={quant} onChange={e=>setQuant(e.target.value as "q4"|"q8")}><option value="q4">4-bit quantized — practical default</option><option value="q8">8-bit quantized — higher memory use</option></select></label>
    </div>
    <div className="calculator-results" aria-live="polite">
      <div className="eyebrow">Hardware estimate</div>
      <h2>{result.best ? `${result.best.params} is your practical starting range` : "Start with a very small model"}</h2>
      <div className="metric-grid">
        <div><span>RAM available after OS reserve</span><strong>{result.usableRam.toFixed(1)} GB</strong></div>
        <div><span>Estimated model memory budget</span><strong>{result.memoryPool.toFixed(1)} GB</strong></div>
      </div>
      {result.best && <p className="calculator-break-even"><strong>{result.best.name}:</strong> {result.best.note}</p>}
      <p className="meta">Conservative planning estimate only. Actual requirements vary by model architecture, context length, KV cache, runtime, GPU offload, operating system and concurrent workloads. Memory fit does not guarantee good generation speed.</p>
    </div>
  </div>;
}
