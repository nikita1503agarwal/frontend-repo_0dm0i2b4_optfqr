import Product from '../Product'

export default function Varai() {
  return (
    <Product
      title="Varai — System Management"
      subtitle="Unified system management built for reliability, observability, and control at scale."
      points={[
        { title: 'Fleet Management', desc: 'Manage thousands of nodes with confidence.' },
        { title: 'Observability', desc: 'Deep insight across logs, metrics, and traces.' },
        { title: 'Policy & Compliance', desc: 'Define, enforce, and audit with ease.' }
      ]}
    />
  )
}
