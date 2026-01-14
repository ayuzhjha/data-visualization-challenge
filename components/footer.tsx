import { Mail, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/20 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-6">Data Visualization Challenge</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A competitive data visualization event organized by the ACM Student Chapter, challenging students to find
              insight and tell stories through data.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#format" className="hover:text-foreground transition-colors">
                  Challenge Format
                </a>
              </li>
              <li>
                <a href="#criteria" className="hover:text-foreground transition-colors">
                  Evaluation Criteria
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-foreground transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@university.edu"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">student.chap.acm@xim.edu.in</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <span>Follow us:</span>
              </div>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/acm_xim" className="text-muted-foreground hover:text-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/xim-acm/" className="text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 ACM Student Chapter. All rights reserved.</p>
            <p className="text-xs">
              This website is created by Tech Team of ACM XIM Student Chapter. If you find any issue please report it <a href="mailto:ucse24017@stu.xim.edu.in" className="text-accent">Here.</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
