import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Build with Arivar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-xl"
            >
              A modern platform powering Aveli, Varai, and our Cybersecurity suite — designed for scale, security, and speed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="/pricing" className="inline-flex items-center rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">View Pricing</a>
              <a href="/contact" className="inline-flex items-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20">Contact Sales</a>
            </motion.div>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-800/30">
            {/* Replace with your Spline scene URL for a custom 3D animation */}
            <Spline scene="https://prod.spline.design/B2n4iK1kQ7s0e3m3/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
