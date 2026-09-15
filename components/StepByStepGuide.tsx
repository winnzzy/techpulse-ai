import type {ReactNode} from "react";

export type GuideStep={
  title:string;
  body:ReactNode;
  expected?:ReactNode;
};

type Props={
  outcome:string;
  prerequisites:string[];
  steps:GuideStep[];
  verification:string[];
  troubleshooting:{problem:string;fix:string}[];
  children?:ReactNode;
};

export function StepByStepGuide({outcome,prerequisites,steps,verification,troubleshooting,children}:Props){
  return <div className="step-guide">
    <section className="guide-outcome"><span className="eyebrow">Outcome</span><h2>What you will accomplish</h2><p>{outcome}</p></section>
    <section><h2>Before you start</h2><ul className="guide-checklist">{prerequisites.map(item=><li key={item}>{item}</li>)}</ul></section>
    <section><span className="eyebrow">Step by step</span><h2>Complete procedure</h2><ol className="guide-steps">{steps.map((step,index)=><li key={step.title}><div className="guide-step-number">{index+1}</div><div><h3>{step.title}</h3><div className="guide-step-body">{step.body}</div>{step.expected?<div className="guide-expected"><strong>Expected result</strong>{step.expected}</div>:null}</div></li>)}</ol></section>
    <section><h2>Verify everything works</h2><ul className="guide-checklist">{verification.map(item=><li key={item}>{item}</li>)}</ul></section>
    <section><h2>Troubleshooting</h2><div className="guide-troubleshooting">{troubleshooting.map(item=><article key={item.problem}><h3>{item.problem}</h3><p>{item.fix}</p></article>)}</div></section>
    {children}
  </div>;
}
