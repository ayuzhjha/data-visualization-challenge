import { CheckCircle2 } from "lucide-react"

export default function Timeline() {
  const events = [
    { label: "Registration Opens", status: "15 Jan 2026" },
    { label: "Registration Closes", status: "17 Jan 2026" },
    { label: "Dataset Release", status: "Before 20 Jan 2026" },
    { label: "Submission Deadline", status: "20 Jan 2026 (11:59 PM)" },
    { label: "Shortlist Announcement", status: "Will be Announced Soon  " },
    { label: "Final Presentations", status: "Will be Announced Soon" },
    { label: "Winners Announced", status: "Will be Announced Soon" },
  ]

  return (
    <section className="py-20 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">05. Timeline</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Event Schedule</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

          <div className="space-y-8 md:space-y-12">
            {events.map((event, idx) => (
              <div key={idx} className={`flex gap-6 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-accent border-4 border-background flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-lg font-semibold text-foreground">{event.label}</p>
                  <p className="text-sm text-muted-foreground">{event.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
