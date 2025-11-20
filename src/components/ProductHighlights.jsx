import { motion } from 'framer-motion'
import { Shield, Cpu, Zap, Cog } from 'lucide-react'

const products = [
  {
    name: 'Aveli',
    description: 'AI-driven insights and automation to accelerate decision-making across your organization.',
    icon: Zap,
    href: '/products/aveli',
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Varai',
    description: 'Unified system management built for reliability, observability, and control at scale.',
    icon: Cog,
    href: '/products/varai',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Cybersecurity Suite',
    description: 'Proactive protection with continuous monitoring, threat detection, and response.',
    icon: Shield,
    href: '/products/cybersecurity',
    color: 'from-emerald-500 to-teal-500'
  }
]

export default function ProductHighlights() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-br p-6 hover:scale-[1.01] transition-transform"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/20">
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-blue-100/80">{p.description}</p>
                </div>
                <span className="text-blue-100/60">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
