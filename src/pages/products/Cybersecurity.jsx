import Product from '../Product'

export default function Cybersecurity() {
  return (
    <Product
      title="Cybersecurity Suite"
      subtitle="Proactive protection with continuous monitoring, threat detection, and rapid response."
      points={[
        { title: 'Threat Detection', desc: 'ML-powered anomaly detection and alerting.' },
        { title: 'Vulnerability Management', desc: 'Continuous scanning and prioritized remediation.' },
        { title: 'Incident Response', desc: 'Playbooks and automation to reduce MTTR.' }
      ]}
    />
  )
}
