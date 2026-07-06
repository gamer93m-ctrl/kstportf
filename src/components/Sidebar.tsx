import { motion } from 'framer-motion'
import { profile } from '../data'
import portrait from '../assets/portrait.webp'

export default function Sidebar() {
  return (
    <aside className="bg-panel flex flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[340px] xl:w-[400px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col gap-5 px-7 pt-8 pb-6"
      >
        <div className="flex flex-wrap gap-2">
          {profile.badges.map((b) => (
            <span
              key={b}
              className="border-line rounded-full border bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft"
            >
              {b}
            </span>
          ))}
        </div>

        <h1 className="text-[28px] leading-tight font-semibold tracking-tight xl:text-[32px]">
          {profile.role}
          <br />
          {profile.grade}
        </h1>

        <p className="text-sm leading-relaxed text-ink-soft">{profile.intro}</p>

        <div className="flex gap-2.5">
          <a
            href={profile.email}
            className="bg-pill inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Связаться
          </a>
          <a
            href={profile.cv}
            className="border-line inline-flex items-center gap-2 rounded-full border bg-white px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03] active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-auto min-h-0 flex-1"
      >
        <img
          src={portrait}
          alt="Константин, продуктовый дизайнер"
          className="h-full max-h-[420px] w-full object-cover object-top lg:max-h-none"
        />
      </motion.div>
    </aside>
  )
}
