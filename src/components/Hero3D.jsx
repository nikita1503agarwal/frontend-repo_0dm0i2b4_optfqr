import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import React from 'react'

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.warn('Spline failed to load, showing fallback.', { error, info })
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default function Hero3D() {
  const sceneUrl = useMemo(() => {
    // Configure a public Spline scene URL in .env as VITE_SPLINE_SCENE_URL
    // If not set (or fails), we show a graceful animated fallback
    return import.meta.env.VITE_SPLINE_SCENE_URL || ''
  }, [])

  const Fallback = (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-indigo-500/20" />
      <motion.div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/30 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-10 right-10 w-72 h-72 rounded-full bg-cyan-400/30 blur-2xl"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
          3D preview
          <span className="mx-2">·</span>
          Add VITE_SPLINE_SCENE_URL to enable Spline
        </div>
      </div>
    </div>
  )

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
            {sceneUrl ? (
              <SplineErrorBoundary fallback={Fallback}>
                <Spline scene={sceneUrl} />
              </SplineErrorBoundary>
            ) : (
              Fallback
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
