import { useState } from 'react'
import { m } from 'framer-motion'
import { profile } from '../data'
import portrait from '../assets/portrait.webp'

export default function Sidebar() {
  const [photoLoaded, setPhotoLoaded] = useState(false)

  return (
    <aside className="bg-panel flex flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[340px] xl:w-[400px]">
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col gap-5 px-7 pt-8 pb-6"
      >
        <div className="flex flex-wrap gap-2">
          {profile.badges.map((b) => (
            <span
              key={b}
              className="glass-chip rounded-full px-3.5 py-1.5 text-xs font-normal text-ink-soft"
            >
              {b}
            </span>
          ))}
        </div>

        <h1 className="text-[28px] leading-tight font-normal tracking-tight xl:text-[32px]">
          {profile.role}
          <br />
          {profile.grade}
        </h1>

        <p className="text-sm leading-relaxed text-ink-soft">{profile.intro}</p>

        <div className="flex gap-2.5">
          <a
            href={profile.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-normal text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M15.9047 4.16711C16.0198 4.16484 16.2741 4.19325 16.4399 4.32621C16.55 4.42064 16.6203 4.55244 16.6367 4.69554C16.6551 4.80123 16.6781 5.04328 16.6597 5.23193C16.4526 7.38883 15.5525 12.6208 15.0944 15.0357C14.901 16.0585 14.52 16.4005 14.1505 16.4335C13.3494 16.5073 12.7405 15.9107 11.9636 15.4084C10.7481 14.6209 10.061 14.1311 8.88121 13.3629C7.51727 12.4765 8.40124 11.9879 9.17817 11.1924C9.3819 10.9833 12.9155 7.8093 12.9846 7.52178C12.9926 7.48542 13.0007 7.35132 12.9201 7.28087C12.8395 7.21041 12.7198 7.23427 12.6335 7.25359C12.5115 7.28087 10.5697 8.5491 6.80824 11.0549C6.25576 11.4299 5.75737 11.6117 5.30963 11.6003C4.817 11.5913 3.86857 11.3265 3.163 11.1003C2.29744 10.8219 1.61029 10.6753 1.67014 10.2037C1.70122 9.95824 2.04422 9.70709 2.69799 9.45027C6.72422 7.71838 9.40837 6.5763 10.7528 6.02514C14.5879 4.45008 15.3856 4.17621 15.9047 4.16711Z"
                fill="white"
              />
            </svg>
            Связаться
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-chip inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-normal transition-transform hover:scale-[1.03] active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            CV
          </a>
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-auto min-h-0 flex-1"
      >
        {!photoLoaded && (
          <div className="skeleton absolute inset-0 max-h-[420px] lg:max-h-none" aria-hidden />
        )}
        <img
          src={portrait}
          alt="Константин, продуктовый дизайнер"
          width={915}
          height={1114}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setPhotoLoaded(true)}
          className={`h-full max-h-[420px] w-full object-cover object-top transition-opacity duration-500 lg:max-h-none ${
            photoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Растворяем стык фото и панели: фон фото чуть темнее по верхней кромке */}
        <div
          className="from-panel pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b to-transparent"
          aria-hidden
        />
      </m.div>
    </aside>
  )
}
