"use client"

import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>


      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <div className="px-4 py-2 rounded-lg border border-accent/30 bg-accent/5 text-accent text-sm font-mono">
            24-HOUR CHALLENGE
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          Data Visualization <span className="text-accent">Challenge</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Analyze real datasets, create compelling visualizations, and tell data-backed stories. Compete with students
          across institutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <div className="text-center border border-border rounded-lg p-4 bg-card/50 backdrop-blur glow-cyan-sm hover:border-accent/50 transition-all">
            <div className="text-sm text-muted-foreground mb-2">Date</div>
            <div className="text-lg font-semibold">18 Jan 2026</div>
          </div>
          <div className="text-center border border-border rounded-lg p-4 bg-card/50 backdrop-blur glow-cyan-sm hover:border-accent/50 transition-all">
            <div className="text-sm text-muted-foreground mb-2">Duration</div>
            <div className="text-lg font-semibold">24 Hours</div>
          </div>
          <div className="text-center border border-border rounded-lg p-4 bg-card/50 backdrop-blur glow-cyan-sm hover:border-accent/50 transition-all">
            <div className="text-sm text-muted-foreground mb-2">Team Size</div>
            <div className="text-lg font-semibold">2 Members</div>
          </div>
          <div className="text-center border border-border rounded-lg p-4 bg-card/50 backdrop-blur glow-cyan-sm hover:border-accent/50 transition-all">
            <div className="text-sm text-muted-foreground mb-2">Mode</div>
            <div className="text-lg font-semibold">Online</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/hW1q1hxiVNp2TAvh8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all glow-cyan group"
          >
            Register Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/files/rulebook.pdf" download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-accent/50 text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
          >
            <Download className="w-4 h-4" />
            Download Rulebook
          </a>
        </div>
      </div>
    </section>
  )
}
