import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'text-white' : 'text-blue-100/80 hover:text-white'
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Arivar" className="h-8 w-8" />
            <span className="text-white font-semibold tracking-tight">Arivar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem({ to: '/products/aveli', label: 'Aveli' })}
            {navItem({ to: '/products/varai', label: 'Varai' })}
            {navItem({ to: '/products/cybersecurity', label: 'Cybersecurity' })}
            {navItem({ to: '/pricing', label: 'Pricing' })}
            <Link to="/contact" className="ml-2 inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-blue-400">
              Contact Sales
            </Link>
          </nav>

          <button className="md:hidden text-blue-100" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/products/aveli" onClick={() => setOpen(false)} className="block px-3 py-2 text-blue-100 hover:text-white">Aveli</Link>
            <Link to="/products/varai" onClick={() => setOpen(false)} className="block px-3 py-2 text-blue-100 hover:text-white">Varai</Link>
            <Link to="/products/cybersecurity" onClick={() => setOpen(false)} className="block px-3 py-2 text-blue-100 hover:text-white">Cybersecurity</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="block px-3 py-2 text-blue-100 hover:text-white">Pricing</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-white bg-blue-600 rounded-md">Contact Sales</Link>
          </div>
        </div>
      )}
    </header>
  )
}
