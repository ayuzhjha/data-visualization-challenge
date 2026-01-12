export default function EvaluationCriteria() {
  const criteria = [
    {
      label: "Visualization Quality",
      percentage: 50,
      description: "Clarity, aesthetics, and effectiveness of visual representations",
    },
    {
      label: "Storytelling Impact",
      percentage: 30,
      description: "Coherence, narrative flow, and communication of insights",
    },
    {
      label: "Analytical Depth",
      percentage: 20,
      description: "Rigor of analysis, methodology, and insight validity",
    },
  ]

  return (
    <section id="criteria" className="py-20 px-4 border-t border-border/50 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">04. Evaluation</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Score</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur hover:border-accent/50 transition-colors"
            >
              <div className="mb-4">
                <div className="text-4xl font-bold text-accent mb-2">{item.percentage}%</div>
                <h3 className="text-lg font-semibold">{item.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-accent bg-card/30 backdrop-blur p-6 rounded">
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold text-accent">Important:</span> Visuals without meaningful insights will not
            score well. We reward submissions that combine technical excellence with genuine analytical discovery.
          </p>
        </div>
      </div>
    </section>
  )
}
