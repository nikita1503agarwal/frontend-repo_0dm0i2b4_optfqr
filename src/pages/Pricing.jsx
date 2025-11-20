import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Get started with core features',
    features: ['Up to 3 users', 'Basic analytics', 'Community support']
  },
  {
    name: 'Growth',
    price: '$49/mo',
    description: 'Advanced tools for small teams',
    features: ['Up to 25 users', 'Automations', 'Priority support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Security, scale, and control',
    features: ['Unlimited users', 'SSO & SAML', 'Dedicated success manager']
  }
]

export default function Pricing() {
  return (
    <main className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white text-center">Pricing</h1>
        <p className="mt-3 text-blue-100/90 text-center">Choose the plan that fits your needs.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6">
              <h3 className="text-white text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-blue-100/80">{t.description}</p>
              <p className="mt-6 text-3xl font-bold text-white">{t.price}</p>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-blue-100"><Check className="w-4 h-4" /> {f}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">Contact Sales</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
