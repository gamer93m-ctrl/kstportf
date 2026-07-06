import { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { navItems } from '../data'

export default function FloatingNav() {
  const [active, setActive] = useState(navItems[0].id)

  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.35
      let current = navItems[0].id
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) current = id
      }
      // At the very bottom, always highlight the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = navItems[navItems.length - 1].id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center lg:left-[340px] xl:left-[400px]">
      <m.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        className="glass-dark pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full p-1.5"
        aria-label="Навигация по кейсам"
      >
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`relative rounded-full px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-colors ${
                isActive ? 'text-ink' : 'text-white/85 hover:text-white'
              }`}
            >
              {isActive && (
                <m.span
                  layoutId="nav-pill"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  className="absolute inset-0 rounded-full bg-white"
                />
              )}
              <span className="relative">{item.label}</span>
            </button>
          )
        })}
      </m.nav>
    </div>
  )
}
