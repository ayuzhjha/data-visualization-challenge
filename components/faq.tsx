"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: "Can I participate as an individual?",
      a: "No. Teams must have exactly 2 members. Individual submissions will be disqualified.",
    },
    {
      q: "Do both team members need to be from the same institution?",
      a: "No. Cross-institution teams are welcome. Your teammate can be from any university or college.",
    },
    {
      q: "What tools can I use to create visualizations?",
      a: "You can use any visualization tools or libraries such as Tableau, Power BI, Python (Matplotlib, Seaborn, Plotly), R (ggplot2), JavaScript (D3.js, Recharts), or any other professional tool. Mention all tools used in your submission.",
    },
    {
      q: "Will certificates be provided?",
      a: "Yes. All valid submissions will receive e-certificates. Winners will receive certificates highlighting their placement.",
    },
    {
      q: "Can I use pre-written code or existing libraries?",
      a: "Yes, using libraries and existing code for visualization is encouraged. However, the analysis, visualizations, and data story must be original work created during the challenge.",
    },
    {
      q: "What if I cannot make the live presentation?",
      a: "Presentation is mandatory for the top 10 teams to be eligible for prizes. If you cannot attend, your team will be removed from consideration for awards but may still receive a participation certificate.",
    },
    {
      q: "How are winners decided?",
      a: "Judges evaluate submissions using the criteria: Visualization Quality (50%), Storytelling Impact (30%), and Analytical Depth (20%). The top 10 teams present, and final rankings are determined based on both submission quality and presentation performance.",
    },
    {
      q: "Is there a registration fee?",
      a: "Yes, There is a registration fee of 40 INR per team.",
    },
  ]

  return (
    <section className="py-20 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">09. FAQ</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden bg-card/30 backdrop-blur hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4 hover:bg-card/50 transition-colors"
              >
                <h3 className="text-left font-semibold text-foreground">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 border-t border-border bg-background/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
