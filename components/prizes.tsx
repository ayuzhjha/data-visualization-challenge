import { Trophy, Award } from "lucide-react"

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 px-4 border-t border-border/50 bg-card/10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-accent uppercase tracking-wider">06. Prizes</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Recognition & Awards</h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="border border-accent/50 rounded-lg p-8 bg-accent/5 backdrop-blur glow-cyan text-center">
            <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">1st Place</h3>
            <p className="text-accent font-semibold mb-4 text-lg">INR 300</p>
            <p className="text-muted-foreground text-sm">Awarded to the top-scoring team</p>
          </div>

          <div className="border border-border rounded-lg p-8 bg-card/50 backdrop-blur hover:border-accent/50 transition-colors text-center">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">2nd Place</h3>
            <p className="text-accent font-semibold mb-4 text-lg">INR 200</p>
            <p className="text-muted-foreground text-sm">Awarded to the second-highest scoring team</p>
          </div>

          <div className="border border-border rounded-lg p-8 bg-card/50 backdrop-blur hover:border-accent/50 transition-colors text-center">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Certificates</h3>
            <p className="text-accent font-semibold mb-4 text-lg">For All Participants</p>
            <p className="text-muted-foreground text-sm">E-certificates awarded to valid submissions</p>
          </div>
        </div>

        <div className="border border-border rounded-lg p-6 bg-card/30 backdrop-blur">
          <h4 className="font-semibold text-foreground mb-3">Recognition & Visibility</h4>
          <p className="text-muted-foreground text-sm mb-2">Winners and top performers will be featured on:</p>
          <ul className="text-muted-foreground text-sm space-y-1 ml-4">
            <li>• ACM Student Chapter official website and social media</li>
            <li>• Event recap and press materials</li>
            <li>• Internal leaderboard and hall of fame</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
