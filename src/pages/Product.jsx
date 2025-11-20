import { motion } from 'framer-motion'

export default function Product({ title, subtitle, points }) {
  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>
        <p className="mt-3 text-blue-100/90 max-w-2xl">{subtitle}</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6"
            >
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex gap-3">
          <a href="/pricing" className="inline-flex items-center rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">View Pricing</a>
          <a href="/contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20">Contact Sales</a>
        </div>
      </section>
    </main>
  )
}
