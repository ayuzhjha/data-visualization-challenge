import { CheckCircle2 } from "lucide-react"

export default function ChallengeFormat() {
  return (
    <section id="format" className="py-20 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">03. Challenge Format</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Two-Round Competition</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="space-y-12">
          {/* Round 1 */}
          <div className="border border-accent/30 rounded-lg p-8 bg-card/30 backdrop-blur glow-cyan-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold">Analysis & Submission</h3>
                <p className="text-muted-foreground mt-2">The foundation of your analysis</p>
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Dataset Release</p>
                  <p className="text-sm text-muted-foreground">Shared via email and Google Drive at event start</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">24-Hour Time Limit</p>
                  <p className="text-sm text-muted-foreground">Complete analysis and preparation within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Single PDF Submission</p>
                  <p className="text-sm text-muted-foreground">
                    One consolidated PDF containing all required components
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background/50 rounded border border-border">
                <p className="font-semibold text-sm mb-3">Submission Must Include:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <span className="font-semibold text-foreground">Focus of Analysis</span> - What aspect(s) of the
                    data are you exploring?
                  </li>
                  <li>
                    • <span className="font-semibold text-foreground">Methodology</span> - How did you approach the
                    analysis?
                  </li>
                  <li>
                    • <span className="font-semibold text-foreground">3–5 Visualizations</span> - Your visual
                    representations of key findings
                  </li>
                  <li>
                    • <span className="font-semibold text-foreground">Data Story (Max 250 words)</span> - Narrative
                    explaining your insights
                  </li>
                  <li>
                    • <span className="font-semibold text-foreground">Tools Used</span> - List all tools and libraries
                  </li>
                  <li>
                    • <span className="font-semibold text-foreground">Optional Code Links</span> - GitHub or other
                    repositories (optional)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Round 2 */}
          <div className="border border-accent/30 rounded-lg p-8 bg-card/30 backdrop-blur glow-cyan-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold">Presentation & Defense</h3>
                <p className="text-muted-foreground mt-2">Showcase your work to the judges</p>
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Top 10 Teams Shortlisted</p>
                  <p className="text-sm text-muted-foreground">Based on Round 1 submissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Online Presentation Format</p>
                  <p className="text-sm text-muted-foreground">
                    Virtual presentation session with all judges and audience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">5-Minute Pitch</p>
                  <p className="text-sm text-muted-foreground">Present your findings and visualizations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">2–3 Minute Q&A</p>
                  <p className="text-sm text-muted-foreground">
                    Answer questions from judges about your analysis and methodology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
