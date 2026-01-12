"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Eligibility from "@/components/eligibility"
import ChallengeFormat from "@/components/challenge-format"
import EvaluationCriteria from "@/components/evaluation-criteria"
import Timeline from "@/components/timeline"
import Prizes from "@/components/prizes"
import CodeOfConduct from "@/components/code-of-conduct"
import Registration from "@/components/registration"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {

  return (
    <main className="min-h-screen relative">
      <Hero />
      <About />
      <Eligibility />
      <ChallengeFormat />
      <EvaluationCriteria />
      <Timeline />
      <Prizes />
      <CodeOfConduct />
      <Registration />
      <FAQ />
      <Footer />
    </main>
  )
}
