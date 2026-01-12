export default function About() {
  return (
    <section id="about" className="py-20 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">01. About</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Challenge Objective</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Data Visualization Challenge pushes participants to explore real datasets, extract meaningful
              insights, and communicate stories through compelling visualizations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't just about pretty charts—it's about{" "}
              <span className="text-accent font-semibold">
                analytical depth, visual clarity, and storytelling impact
              </span>
              . Teams that combine technical precision with narrative power will rise to the top.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur hover:border-accent/50 transition-colors">
              <h3 className="font-semibold text-accent mb-3">Storytelling</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transform raw data into a narrative that informs and inspires.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur hover:border-accent/50 transition-colors">
              <h3 className="font-semibold text-accent mb-3">Visualization Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Create clear, beautiful, and informative visual representations.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur hover:border-accent/50 transition-colors">
              <h3 className="font-semibold text-accent mb-3">Insight Discovery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Uncover patterns, trends, and actionable findings in data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
