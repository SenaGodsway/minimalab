import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Landmark, Plus, X, ArrowRight, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageContainer from '../../components/PageContainer'

interface AccordionItem {
  id: number
  title: string
  icon: React.ReactNode
  intro: string
  paragraph: string
  bullets: string[]
  ctaText: string
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "For Founders & Startups",
    icon: <Building2 className="h-5 w-5 shrink-0" />,
    intro: "Scale your team without the overhead.",
    paragraph: "We outsource vetted software talent to help you ship faster. Get engineers on demand, have custom software built, and focus on your product while we handle the technical execution.",
    bullets: [
      "Access vetted software engineers to scale your team without full-time hires.",
      "Have custom software built for your product—we handle design, development, and delivery.",
      "Focus on your vision while we take care of execution and technical complexity.",
      "Partner with a team that ships fast and scales with you.",
    ],
    ctaText: "Explore talent & development options",
  },
  {
    id: 2,
    title: "For Corporates",
    icon: <Building2 className="h-5 w-5 shrink-0" />,
    intro: "Extend your capacity, deliver on time.",
    paragraph: "We outsource talent to organizations and build software that fits your workflows. Scale your engineering capacity, commission custom solutions, and reduce hiring friction.",
    bullets: [
      "Extend your team with vetted software engineers on demand.",
      "Commission custom software solutions built for your organization.",
      "Reduce hiring friction and accelerate delivery on critical projects.",
      "Scale capacity up or down as your projects evolve.",
    ],
    ctaText: "Learn about talent & software solutions",
  },
  {
    id: 3,
    title: "For Engineers & Talent Acquisition Specialists",
    icon: <Users className="h-5 w-5 shrink-0" />,
    intro: "We help software engineers get jobs.",
    paragraph: "Engineers: find opportunities matched to your skills. Talent acquisition specialists: access a pipeline of vetted software talent to fill roles faster.",
    bullets: [
      "Engineers: Get matched with roles at startups and organizations that fit your skills and goals.",
      "Engineers: Connect with opportunities that understand your career trajectory.",
      "Talent specialists: Access a pipeline of pre-screened software engineers to fill roles faster.",
      "Talent specialists: Partner for outsourcing and project-based engagements.",
    ],
    ctaText: "Get started",
  },
  {
    id: 4,
    title: "For Governments & Economic Development Agencies",
    icon: <Landmark className="h-5 w-5 shrink-0" />,
    intro: "Strengthen your tech ecosystem.",
    paragraph: "We help software engineers get jobs and support organizations with talent. Partner with us to connect local talent to opportunities, place engineers at companies, and build software capacity in your region.",
    bullets: [
      "Connect local software engineers with job opportunities at organizations worldwide.",
      "Support programs that place technical talent and build digital capacity in your region.",
      "Create pathways from training to employment for engineers.",
      "Strengthen your ecosystem through talent placement and software development initiatives.",
    ],
    ctaText: "Discuss partnership options",
  },
]

export default function Introducing() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="relative bg-white py-8 md:py-12 lg:py-16 mt-16">
      <PageContainer>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column - heading */}
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black">
              Join the Movement
            </p>
            <h2 className="text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
              Discover How We Can Support You
            </h2>
          </div>

          {/* Right column - accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {accordionItems.map((item) => {
                const isExpanded = expandedId === item.id
                return (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 transition-colors"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center gap-4 py-6 text-left transition-colors hover:bg-gray-50/50"
                    >
                      <span className="shrink-0 text-black [&>svg]:h-5 [&>svg]:w-5">
                        {item.icon}
                      </span>
                      <span className="flex-1 text-base font-semibold text-black md:text-lg">
                        {item.title}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white">
                        {isExpanded ? (
                          <X className="h-4 w-4 text-black" />
                        ) : (
                          <Plus className="h-4 w-4 text-black" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-12 pr-4">
                            <p className="mb-2 font-semibold text-black">
                              {item.intro}
                            </p>
                            <p className="mb-6 text-black/90">
                              {item.paragraph}
                            </p>
                            <ul className="mb-6 space-y-3">
                              {item.bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 text-black/90"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            <Link
                              to="/get-quote"
                              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-gray-800"
                            >
                              {item.ctaText}
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/20">
                                <ArrowRight className="h-3.5 w-3.5" />
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
