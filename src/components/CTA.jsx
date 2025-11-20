export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to build with Arivar?</h2>
        <p className="mt-3 text-blue-100/90">Start a free trial or talk to our sales team to find the right plan for your organization.</p>
        <div className="mt-8 flex gap-3 justify-center">
          <a href="/pricing" className="inline-flex items-center rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">Start Free Trial</a>
          <a href="/contact" className="inline-flex items-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20">Contact Sales</a>
        </div>
      </div>
    </section>
  )
}
