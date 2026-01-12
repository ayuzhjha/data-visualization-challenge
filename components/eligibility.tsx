import { AlertCircle } from "lucide-react"

export default function Eligibility() {
  return (
    <section className="py-20 px-4 border-t border-border/50 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">02. Eligibility</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Team Rules</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur">
              <h3 className="font-semibold text-foreground mb-2">✓ Who Can Participate</h3>
              <p className="text-muted-foreground text-sm">Open to all students from any institution worldwide.</p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur">
              <h3 className="font-semibold text-foreground mb-2">✓ Cross-Institution Teams</h3>
              <p className="text-muted-foreground text-sm">Team members can be from different institutions.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5 backdrop-blur">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Exactly 2 Members Per Team</h3>
                  <p className="text-muted-foreground text-sm">
                    Individual participation is not allowed. All submissions must be from teams of exactly 2.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5 backdrop-blur">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Exceptions</h3>
                  <p className="text-muted-foreground text-sm">Teams with 1 or 3+ members will be disqualified.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
