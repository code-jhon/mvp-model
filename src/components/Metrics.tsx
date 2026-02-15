import { useTheme } from '../context/ThemeContext'

interface Metric {
  value: string
  label: string
  color: string
}

const lightMetrics: Metric[] = [
  { value: '$2.8M+', label: 'Annual Revenue Managed', color: 'var(--color-metric-primary)' },
  { value: '87%', label: 'Average Occupancy Rate', color: 'var(--color-green)' },
  { value: '24h', label: 'Average Response Time', color: 'var(--color-metric-primary)' },
  { value: '4.9★', label: 'Guest Satisfaction Score', color: 'var(--color-gold)' },
]

const darkMetrics: Metric[] = [
  { value: '500+', label: 'Waitlist Investors', color: 'var(--color-metric-primary)' },
  { value: '3', label: 'Markets at Launch', color: 'var(--color-green)' },
  { value: '2026', label: 'Expected Launch', color: 'var(--color-metric-primary)' },
  { value: '$0', label: 'No Upfront Costs', color: 'var(--color-gold)' },
]

export default function Metrics() {
  const { isDark } = useTheme()
  const metrics = isDark ? darkMetrics : lightMetrics

  return (
    <section className="font-primary flex flex-col w-full bg-[var(--color-bg-alt)] p-[80px]">
      <div className="flex justify-around w-full">
        {metrics.map((metric, i) => (
          <div key={i} className="flex flex-col items-center gap-[8px] w-[280px]">
            <span
              className="text-[48px] font-bold tracking-[-1px]"
              style={{ color: metric.color }}
            >
              {metric.value}
            </span>
            <span className="text-[16px] text-[var(--color-metric-label)]">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
