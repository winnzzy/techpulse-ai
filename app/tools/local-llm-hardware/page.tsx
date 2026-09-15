import type { Metadata } from "next";
import Link from "next/link";
import HardwareChecker from "./HardwareChecker";

export const metadata:Metadata = {
  title:"Local LLM Hardware Checker — RAM & VRAM Guide",
  description:"Estimate what size local AI model your PC can realistically run from its RAM, VRAM and quantization level.",
  alternates:{ canonical:"/tools/local-llm-hardware" },
};

export default function HardwarePage(){return <main className="container">
  <section className="hub-hero tool-hero"><div className="eyebrow">TechPulse Labs · Free hardware tool</div><h1>What size local AI model can your computer run?</h1><p className="lead">Enter your RAM and GPU memory for a conservative starting estimate. The checker deliberately separates “it may fit” from “it will run well.”</p></section>
  <HardwareChecker/>
  <section className="section tool-explainer"><div className="section-head"><div><div className="eyebrow">Read the result correctly</div><h2>Memory is only the first gate.</h2></div></div><div className="grid">
    <article className="card"><span className="badge">RAM</span><h3>Leave room for the computer</h3><p>The tool reserves part of system memory for Windows, macOS, Linux and other processes instead of pretending every gigabyte is available to the model.</p></article>
    <article className="card"><span className="badge">Quantization</span><h3>Smaller weights change the equation</h3><p>4-bit quantization can make larger models practical on consumer hardware, but memory use still grows with context and runtime overhead.</p></article>
    <article className="card"><span className="badge">Speed</span><h3>Fitting is not the same as flying</h3><p>A model can technically load and still generate too slowly for your workflow. GPU acceleration, memory bandwidth and CPU offload matter.</p></article>
  </div></section>
  <section className="trust-strip"><div><div className="eyebrow">Before upgrading</div><h2>Try the workload you actually care about.</h2></div><div className="trust-points"><p><strong>Start smaller.</strong><br/>A responsive smaller model can be more useful than a larger model that crawls.</p><p><strong>Watch context.</strong><br/>Long conversations and documents add memory pressure beyond model weights.</p><p><strong>Benchmark locally.</strong><br/>Runtime and hardware combinations can behave differently even at similar memory capacities.</p></div></section>
  <section className="section"><div className="newsletter"><div><div className="eyebrow">Next step</div><h2>Set up local AI on Windows.</h2><p>Use our Ollama guide to turn the estimate into a working local setup.</p></div><Link className="button" href="/articles/run-local-llm-ollama-windows">Open the Ollama guide</Link></div></section>
</main>}
