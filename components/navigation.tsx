"use client"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border glow-cyan-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-accent">DataViz Challenge</h1>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#format" className="hover:text-foreground transition-colors">
            Format
          </a>
          <a href="#criteria" className="hover:text-foreground transition-colors">
            Criteria
          </a>
          <a href="#register" className="hover:text-foreground transition-colors">
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}
