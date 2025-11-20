import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Aveli from './pages/products/Aveli'
import Varai from './pages/products/Varai'
import Cybersecurity from './pages/products/Cybersecurity'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/aveli" element={<Aveli />} />
        <Route path="/products/varai" element={<Varai />} />
        <Route path="/products/cybersecurity" element={<Cybersecurity />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
