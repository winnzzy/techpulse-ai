import Link from "next/link";

export type DecisionCriterion={
  name:string;
  question:string;
  weight:"Core"|"Important"|"Situational";
};

type Props={
  title?:string;
  criteria:DecisionCriterion[];
  methodologyHref?:string;
};

export function DecisionFramework({title="How to compare your options",criteria,methodologyHref="/editorial-standards"}:Props){
  return <section className="decision-framework" aria-labelledby="decision-framework-title">
    <div className="decision-framework-head">
      <div>
        <span className="eyebrow">Decision framework</span>
        <h2 id="decision-framework-title">{title}</h2>
      </div>
      <Link href={methodologyHref}>Our methodology →</Link>
    </div>
    <div className="decision-criteria">
      {criteria.map((criterion,index)=><article className="decision-criterion" key={criterion.name}>
        <div className="decision-number">{String(index+1).padStart(2,"0")}</div>
        <div>
          <div className="decision-label"><h3>{criterion.name}</h3><span>{criterion.weight}</span></div>
          <p>{criterion.question}</p>
        </div>
      </article>)}
    </div>
    <p className="decision-note">Use the criteria against your own representative workload. TechPulse AI does not award a winner merely because a product has a commercial relationship with the publication.</p>
  </section>;
}
