'use client'

import { useInView } from 'react-intersection-observer'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number // optional delay in ms
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-all transform duration-800 ease-in-out
        ${inView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-30'}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
