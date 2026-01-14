"use client"

import { ArrowRight } from "lucide-react"

export default function Registration() {
  return (
    <section id="register" className="py-20 px-4 border-t border-border/50 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">08. Registration</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Compete?</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Register your team now to secure your spot. Dataset access and challenge details will be shared via email at
          the challenge start time.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur">
            <h3 className="font-semibold mb-2">Registration Deadline</h3>
            <p className="text-accent font-bold text-lg">17 Jan 2026</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur">
            <h3 className="font-semibold mb-2">Capacity</h3>
            <p className="text-accent font-bold text-lg">Limited Spots</p>
          </div>
        </div>

        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all glow-cyan group text-lg"
        >
          Register Your Team via Google Form
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
