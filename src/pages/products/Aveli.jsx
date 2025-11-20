import Product from '../Product'

export default function Aveli() {
  return (
    <Product
      title="Aveli"
      subtitle="AI-driven insights and automation to accelerate decision-making across your organization."
      points={[
        { title: 'Intelligent Workflows', desc: 'Automate routine decisions and unlock faster execution.' },
        { title: 'Insight Engine', desc: 'Unified analytics layer with explainable AI.' },
        { title: 'Integrations', desc: 'Connect to your existing tools with secure adapters.' }
      ]}
    />
  )
}
