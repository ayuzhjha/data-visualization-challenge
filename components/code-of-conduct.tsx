import { AlertCircle } from "lucide-react"

export default function CodeOfConduct() {
  return (
    <section className="py-20 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">07. Code of Conduct</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Competition Integrity</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5 backdrop-blur">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Original Work Only</h3>
                <p className="text-muted-foreground text-sm">
                  All submissions must be original work created during the challenge window. Pre-existing work is not
                  permitted.
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5 backdrop-blur">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">No Plagiarism</h3>
                <p className="text-muted-foreground text-sm">
                  Plagiarism of visualizations, code, or written content from external sources will result in automatic
                  disqualification.
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5 backdrop-blur">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Data Integrity</h3>
                <p className="text-muted-foreground text-sm">
                  Data manipulation, falsification, or misrepresentation will result in disqualification. Use the
                  dataset as provided.
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5 backdrop-blur">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Judge's Decision is Final</h3>
                <p className="text-muted-foreground text-sm">
                  All judging decisions are final and binding. No appeals will be considered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
