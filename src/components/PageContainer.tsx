import type { ReactNode } from "react"

/**
 * Shared page container for consistent horizontal margins across the site.
 * Use this for page content sections to ensure alignment.
 */
interface PageContainerProps {
  children: ReactNode
  className?: string
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-12 ${className}`.trim()}>
      {children}
    </div>
  )
}
