"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function ROICalculator() {
  const [monthlyCost, setMonthlyCost] = useState(20);
  const [hourlyValue, setHourlyValue] = useState(15);
  const [minutesSaved, setMinutesSaved] = useState(20);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [realization, setRealization] = useState(70);

  const result = useMemo(() => {
    const grossHours = (minutesSaved / 60) * daysPerWeek * 4.33;
    const effectiveHours = grossHours * (realization / 100);
    const value = effectiveHours * hourlyValue;
    const net = value - monthlyCost;
    const roi = monthlyCost > 0 ? (net / monthlyCost) * 100 : 0;
    const breakEvenMinutes = hourlyValue > 0 && daysPerWeek > 0 && realization > 0
      ? (monthlyCost / (hourlyValue * daysPerWeek * 4.33 * (realization / 100))) * 60
      : 0;
    return { effectiveHours, value, net, roi, breakEvenMinutes };
  }, [monthlyCost, hourlyValue, minutesSaved, daysPerWeek, realization]);

  const verdict = result.net > monthlyCost * 2
    ? "Strong potential value"
    : result.net >= 0
      ? "Potentially worth it"
      : "Hard to justify on time savings alone";

  return (
    <div className="calculator-shell">
      <div className="calculator-inputs">
        <label>Monthly subscription cost (USD)<input type="number" min="0" value={monthlyCost} onChange={(e) => setMonthlyCost(Number(e.target.value))} /></label>
        <label>Value of your time per hour (USD)<input type="number" min="0" value={hourlyValue} onChange={(e) => setHourlyValue(Number(e.target.value))} /></label>
        <label>Minutes the AI saves on a typical workday<input type="number" min="0" max="480" value={minutesSaved} onChange={(e) => setMinutesSaved(Number(e.target.value))} /></label>
        <label>Days you use it each week<input type="number" min="1" max="7" value={daysPerWeek} onChange={(e) => setDaysPerWeek(Number(e.target.value))} /></label>
        <label>How much of that saved time becomes useful time? <span>{realization}%</span><input type="range" min="10" max="100" step="5" value={realization} onChange={(e) => setRealization(Number(e.target.value))} /></label>
      </div>

      <div className="calculator-results" aria-live="polite">
        <div className="eyebrow">Your estimate</div>
        <h2>{verdict}</h2>
        <div className="metric-grid">
          <div><span>Monthly value</span><strong>{money.format(result.value)}</strong></div>
          <div><span>Net monthly value</span><strong>{money.format(result.net)}</strong></div>
          <div><span>Effective hours saved</span><strong>{result.effectiveHours.toFixed(1)}h</strong></div>
          <div><span>Estimated ROI</span><strong>{Number.isFinite(result.roi) ? `${Math.round(result.roi)}%` : "—"}</strong></div>
        </div>
        <p className="calculator-break-even">At these assumptions, you need to save about <strong>{result.breakEvenMinutes.toFixed(1)} useful minutes per workday</strong> to cover the subscription cost.</p>
        <p className="meta">This is a decision aid, not a guarantee of productivity or financial return. Adjust the realization rate downward if AI output requires significant checking or rework.</p>
      </div>
    </div>
  );
}
