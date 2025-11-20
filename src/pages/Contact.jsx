import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setMessage({ type: 'success', text: 'Thanks! Our team will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white text-center">Contact Sales</h1>
        <p className="mt-3 text-blue-100/90 text-center">Tell us about your needs and we’ll be in touch.</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4 bg-slate-800/60 ring-1 ring-white/10 p-6 rounded-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-100 mb-1">Name</label>
              <input name="name" required className="w-full rounded-md bg-slate-900/60 text-white border border-white/10 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-blue-100 mb-1">Work Email</label>
              <input name="email" type="email" required className="w-full rounded-md bg-slate-900/60 text-white border border-white/10 px-3 py-2" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-100 mb-1">Company</label>
              <input name="company" className="w-full rounded-md bg-slate-900/60 text-white border border-white/10 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-blue-100 mb-1">Role</label>
              <input name="role" className="w-full rounded-md bg-slate-900/60 text-white border border-white/10 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">Interested In</label>
            <select name="product_interest" className="w-full rounded-md bg-slate-900/60 text-white border border-white/10 px-3 py-2">
              <option value="Aveli">Aveli</option>
              <option value="Varai">Varai</option>
              <option value="Cybersecurity">Cybersecurity Suite</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-blue-100 mb-1">Message</label>
            <textarea name="message" rows="4" className="w-full rounded-md bg-slate-900/60 text-white border border-white/10 px-3 py-2" />
          </div>
          <button disabled={loading} className="w-full rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2">
            {loading ? 'Sending...' : 'Submit'}
          </button>
          {message && (
            <p className={`text-sm ${message.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>{message.text}</p>
          )}
        </form>
      </div>
    </main>
  )
}
