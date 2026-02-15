import { Rocket } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  useTheme()

  return (
    <section className="font-primary flex flex-col items-center justify-center gap-[48px] pt-[120px] pb-[80px] px-[80px] w-full bg-[var(--color-bg)]">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-[32px] w-[900px] max-w-full">
        {/* Badge */}
        <div className="flex items-center gap-[8px] rounded-[20px] bg-[var(--color-badge-bg)] px-[16px] py-[6px]">
          <Rocket size={16} className="text-[var(--color-green)]" />
          <span className="text-[14px] font-medium text-[var(--color-badge-text)]">
            Coming Soon — Launching 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[56px] font-bold leading-[1.2] text-center text-[var(--color-text-primary)]">
          The Future of Property Management Is Almost Here
        </h1>

        {/* Subheadline */}
        <p className="text-[20px] leading-[1.6] text-center text-[var(--color-text-secondary)]">
          PropertySync is building the ultimate platform for rental property investors. Data-driven optimization, transparent reporting, and premium guest experiences — all in one place.
        </p>

        {/* CTA Row */}
        <div className="flex items-center">
          <div className="flex items-center rounded-l-[8px] bg-[var(--color-input-bg)] border border-[var(--color-border-input)] px-[20px] py-[16px] w-[340px]">
            <span className="text-[16px] text-[var(--color-input-placeholder)]">
              Enter your email address
            </span>
          </div>
          <div className="flex items-center justify-center rounded-r-[8px] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors px-[28px] py-[16px] cursor-pointer">
            <span className="text-[16px] font-semibold text-white">
              Notify Me
            </span>
          </div>
        </div>

        {/* Trust label */}
        <div className="flex items-center gap-[48px]">
          <span className="text-[14px] font-medium text-[var(--color-text-muted)]">
            Join 500+ investors already on the waitlist
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="w-[1000px] max-w-full h-[560px] rounded-[16px] overflow-hidden border border-[var(--color-hero-stroke)]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1663811397359-96b4dd126ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA2NjY3MDZ8&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </section>
  )
}
