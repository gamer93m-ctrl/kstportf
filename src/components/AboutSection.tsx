import { motion } from 'framer-motion'
import { about } from '../data'
import about1 from '../assets/about-1.webp'
import about2 from '../assets/about-2.webp'
import about3 from '../assets/about-3.webp'
import about4 from '../assets/about-4.webp'

const photos = [about1, about2, about3, about4]

export default function AboutSection() {
  return (
    <section id={about.id} className="scroll-mt-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold tracking-tight">{about.title}</h2>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="max-w-3xl text-sm leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {photos.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt={`Фото ${i + 1}`}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
            className="w-full rounded-2xl object-cover"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mt-10"
      >
        <h3 className="mb-4 text-lg font-semibold tracking-tight">Мои рабочие инструменты</h3>
        <div className="flex flex-wrap gap-2.5">
          {about.tools.map((t) => (
            <span
              key={t.name}
              title={t.name}
              className="flex size-11 items-center justify-center rounded-xl text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: t.bg, color: t.color }}
            >
              {t.short}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
