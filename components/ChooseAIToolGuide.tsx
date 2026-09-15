import Link from "next/link";
import {StepByStepGuide} from "@/components/StepByStepGuide";

export function ChooseAIToolGuide(){
  return <StepByStepGuide
    outcome="You will finish with a documented AI-tool shortlist, a repeatable real-work benchmark, a simple cost-and-risk scorecard, and a defensible buy, trial, or reject decision."
    prerequisites={[
      "One clearly defined workflow you want AI to improve — not a vague goal such as ‘use more AI’.",
      "Three to five representative tasks or files that reflect normal work. Remove confidential data unless the candidate is already approved for it.",
      "A realistic monthly budget and an estimate of how often the workflow occurs.",
      "Your non-negotiable requirements: devices, integrations, team access, privacy, deployment, output format, or administrative controls.",
      "A place to record test results so every candidate is judged by the same criteria."
    ]}
    steps={[
      {title:"Define the job before choosing a product",body:<><p>Write the workflow as an input, action and required output. For example: “Given a TypeScript repository and a bug report, identify the likely cause, propose a minimal patch and explain the changed files.” Then define what a successful result must contain.</p><p>Keep the first evaluation focused on one workflow. A tool that is excellent for coding may be the wrong purchase for meeting notes or private-document analysis.</p></>,expected:<p>You have one testable job and a written definition of success.</p>},
      {title:"Separate must-haves from nice-to-haves",body:<><p>Create two columns. Put requirements that can disqualify a product in “must-have”: required platform support, specific integrations, data controls, collaboration, local deployment, API access, or a hard budget ceiling. Put conveniences in “nice-to-have.”</p><p>Do not let a long feature list compensate for a missing requirement that the real workflow depends on.</p></>,expected:<p>You can reject unsuitable products before spending time on trials.</p>},
      {title:"Build a shortlist by category",body:<><p>Shortlist two or three tools designed for the job. Use the <Link href="/tools/ai-tool-finder">TechPulse AI Tool Finder</Link> to narrow the category, then verify current capabilities, plans and data policies on each provider’s official documentation before testing.</p><p>Avoid creating a ten-product shortlist. The purpose is a controlled comparison, not collecting options.</p></>,expected:<p>You have no more than three plausible candidates that meet the basic requirements.</p>},
      {title:"Create a real-work benchmark",body:<><p>Select three to five representative tasks: an easy routine task, a normal task, and at least one difficult or failure-prone task. Use the same starting material and acceptance criteria for every candidate.</p><p>Score useful correctness, completion time, review or correction time, consistency across repeated attempts, and whether the tool actually completes the required workflow.</p></>,expected:<p>You have a benchmark that tests normal work instead of polished demo prompts.</p>},
      {title:"Run the candidates under the same conditions",body:<><p>Use equivalent plans and settings where practical. Run the benchmark without quietly giving one candidate extra hints. Record failures, manual interventions and the time required to reach an acceptable result.</p><p>If outputs are subjective, define the scoring rubric before reviewing them. This reduces the temptation to favor the product you already expected to win.</p></>,expected:<p>Every candidate has comparable evidence rather than an impression from casual use.</p>},
      {title:"Check privacy, permissions and data handling",body:<><p>Before testing sensitive information, verify the provider’s current documentation for retention, training controls, connected-app permissions, administrative controls and deletion options. Business or regulated workloads may require contractual or organizational approval beyond a consumer privacy setting.</p><p>Give connected tools only the permissions needed for the benchmark. Do not expose production credentials merely to evaluate convenience.</p></>,expected:<p>You know which candidates are acceptable for the data and permissions involved in the workflow.</p>},
      {title:"Calculate the total workflow cost",body:<><p>Record the actual plan or usage cost from the provider at the time of evaluation, then add meaningful operational costs: setup, integration, review time, duplicated subscriptions and expected usage. Compare that with the value of time or work the tool reliably saves.</p><p>For a quick estimate, use the <Link href="/tools/ai-subscription-roi">AI Subscription ROI Calculator</Link>. Treat the result as a decision aid, not a guarantee.</p></>,expected:<p>You can explain why the expected value is or is not worth the total recurring cost.</p>},
      {title:"Choose the smallest stack that passes",body:<><p>Remove candidates that fail a must-have requirement even if they perform well elsewhere. Among the remaining options, prefer the smallest stack that meets the quality, privacy and economic threshold.</p><p>Only keep overlapping subscriptions when your benchmark demonstrates a distinct recurring advantage for each one.</p></>,expected:<p>You have a buy, trial-longer, or reject decision tied to evidence and requirements.</p>},
      {title:"Record the decision and a review date",body:<><p>Write down the winning candidate, plan tested, evaluation date, benchmark tasks, important settings, score and reason for selection. AI products change quickly, so set a review trigger such as a major price, policy or workflow change rather than assuming the decision is permanent.</p></>,expected:<p>Someone can reproduce the decision later and understand what would justify changing it.</p>}
    ]}
    verification={[
      "The selected tool passes every must-have requirement.",
      "It completed the same representative benchmark used for competing candidates.",
      "You recorded correction/review effort rather than measuring generation speed alone.",
      "Current privacy and permission controls were checked before sensitive data was used.",
      "The total recurring cost fits the budget and the expected workflow value.",
      "The final decision, test date and reason for choosing or rejecting each candidate are documented."
    ]}
    troubleshooting={[
      {problem:"Every tool looks equally good",fix:"Make the benchmark harder and more representative. Include edge cases, longer inputs, repeated runs and the parts of the workflow that currently consume the most human review time."},
      {problem:"The trial does not include a feature you need",fix:"Do not infer performance from marketing. Verify whether the required capability exists on the intended plan. If it cannot be tested, mark the evidence incomplete rather than awarding points."},
      {problem:"Pricing is difficult to compare",fix:"Convert each option into the expected monthly cost for your own usage, including usage-based charges and overlapping subscriptions. Recheck official pricing immediately before purchasing because plans can change."},
      {problem:"A tool is strong but fails privacy requirements",fix:"Treat a failed non-negotiable as a rejection for that workload. Consider an approved business plan, a different provider, or a local/hybrid architecture rather than weakening the requirement."},
      {problem:"Results vary from run to run",fix:"Repeat representative tests and score consistency. A product that occasionally produces an excellent answer but often requires rescue may be worse operationally than a slightly less impressive but reliable option."}
    ]}
  >
    <section><h2>Security and purchasing notes</h2><p>Use sanitized test data until you have verified that a candidate is appropriate for the information involved. For business purchases, confirm organizational procurement, security and compliance requirements before connecting production systems.</p><p>Do not treat affiliate availability, sponsorship, popularity or a single benchmark score as proof that a product is right for your workflow. The evidence from your own representative tasks should drive the decision.</p></section>
    <section><h2>What to do next</h2><p>Run the winning tool on a limited real workflow, measure results for a defined period, and compare the measured outcome with the assumptions used in your buying decision. If the value does not persist, downgrade or cancel rather than keeping the subscription by default.</p></section>
  </StepByStepGuide>;
}
