import { Check, Phone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function CTA() {
  const { isDark } = useTheme()

  const title = isDark
    ? "Don't Miss the Launch"
    : "Ready to Maximize Your Property's Potential?"

  const subtitle = isDark
    ? 'Be the first to know when PropertySync goes live. Early access members get exclusive benefits.'
    : 'Join 500+ property owners who trust us to deliver exceptional returns'

  const buttonText = isDark ? 'Join the Waitlist' : 'Get Free Property Analysis'

  const trustItems = isDark
    ? ['Early access pricing', 'Priority onboarding', 'Exclusive launch perks']
    : ['No upfront costs', '30-day guarantee', 'Cancel anytime']

  return (
    <section className="font-primary flex flex-col items-center gap-[48px] w-full bg-[var(--color-cta-bg)] py-[100px] px-[80px]">
      <div className="flex flex-col items-center gap-[32px] w-[700px] max-w-full">
        {/* Title */}
        <h2 className="text-[42px] font-bold leading-[1.2] text-center text-[var(--color-text-primary)]">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-[20px] text-center text-[var(--color-text-secondary)]">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center justify-center rounded-[8px] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors px-[36px] py-[18px] cursor-pointer">
            <span className="text-[18px] font-semibold text-white">
              {buttonText}
            </span>
          </div>
          {!isDark && (
            <div className="flex items-center gap-[8px]">
              <Phone size={20} className="text-[var(--color-text-secondary)]" />
              <span className="text-[16px] text-[var(--color-text-muted)]">
                or call +1 (555) 123-4567
              </span>
            </div>
          )}
        </div>

        {/* Trust items */}
        <div className="flex items-center gap-[24px]">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-[8px]">
              <Check size={16} className="text-[var(--color-green)]" />
              <span className="text-[14px] text-[var(--color-text-muted)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
