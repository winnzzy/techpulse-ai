"use client";

import { useMemo, useState } from "react";

type Choice={id:string;label:string};
type Recommendation={name:string;why:string;checks:string;tags:string[]};
const goals:Choice[]=[{id:"coding",label:"Coding & software"},{id:"writing",label:"Writing & content"},{id:"research",label:"Research & documents"},{id:"creative",label:"Images & video"},{id:"automation",label:"Workflow automation"},{id:"support",label:"Customer support"}];
const catalog:Recommendation[]=[
{name:"General AI assistant",why:"Best when your work crosses writing, analysis, brainstorming and everyday knowledge tasks.",checks:"Compare output quality on your own prompts, file support, privacy controls and total subscription cost.",tags:["writing","research","support"]},
{name:"AI coding assistant",why:"Best when the AI needs to understand code, suggest edits and work inside a development workflow.",checks:"Test repository context, edit accuracy, terminal/tool permissions, model choice and IDE support.",tags:["coding"]},
{name:"AI research workspace",why:"Best for source-heavy questions, document synthesis and work where citations matter.",checks:"Verify source traceability, document limits, retrieval quality and whether claims can be inspected.",tags:["research"]},
{name:"AI image or video generator",why:"Best when the deliverable is visual rather than primarily text.",checks:"Compare consistency, commercial-use terms, generation limits, editing controls and export quality.",tags:["creative"]},
{name:"AI automation platform",why:"Best for repeatable multi-step work that connects apps, data and approval steps.",checks:"Inspect integrations, failure handling, human approvals, logs and usage-based costs before scaling.",tags:["automation","support"]},
{name:"Local AI stack",why:"Best when privacy, offline access or control over model deployment matters more than convenience.",checks:"Check RAM/VRAM, model licensing, runtime speed and whether your actual tasks justify local setup.",tags:["coding","writing","research"]},
];
export default function AIToolFinder(){
 const [goal,setGoal]=useState("coding"); const [budget,setBudget]=useState("paid"); const [privacy,setPrivacy]=useState("standard");
 const picks=useMemo(()=>{let x=catalog.filter(r=>r.tags.includes(goal)); if(privacy==="high") x=[catalog[5],...x.filter(r=>r!==catalog[5])]; return x.slice(0,3)},[goal,privacy]);
 return <div className="finder-shell"><div className="finder-controls"><div><span className="finder-label">1 · What do you mainly need AI for?</span><div className="choice-grid">{goals.map(g=><button key={g.id} className={goal===g.id?"choice active":"choice"} onClick={()=>setGoal(g.id)}>{g.label}</button>)}</div></div><label>2 · Budget<select value={budget} onChange={e=>setBudget(e.target.value)}><option value="free">Start free</option><option value="paid">Paid tools are okay</option><option value="team">Team/business budget</option></select></label><label>3 · Data sensitivity<select value={privacy} onChange={e=>setPrivacy(e.target.value)}><option value="standard">Normal everyday data</option><option value="high">Sensitive/private work</option></select></label></div><div className="finder-results" aria-live="polite"><div className="eyebrow">Your shortlist</div><h2>Start with the category, then choose the product.</h2><p className="meta">Budget preference: {budget==="free"?"free-first":budget==="team"?"team/business":"paid acceptable"}. Recommendations are category-first and not pay-to-rank.</p>{picks.map((r,i)=><article className="finder-result" key={r.name}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{r.name}</h3><p>{r.why}</p><small><strong>Evaluate:</strong> {r.checks}</small></div></article>)}</div></div>
}
