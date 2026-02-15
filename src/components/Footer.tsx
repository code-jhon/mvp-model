import { Linkedin, Twitter } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const lightFooterColumns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Dashboard Demo'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Success Stories', 'Contact'],
  },
  {
    title: 'Locations',
    links: ['United States', 'Dominican Republic', 'Colombia'],
  },
]

export default function Footer() {
  const { isDark } = useTheme()

  const tagline = isDark
    ? 'Professional property management for the modern investor. Coming soon to Miami, New York, Santo Domingo & Bogotá.'
    : 'Professional property management for the modern investor. Maximize returns, minimize effort.'

  const copyright = isDark
    ? '© 2026 PropertySync. All rights reserved.'
    : '© 2024 PropertySync. All rights reserved.'

  return (
    <footer className="font-primary flex flex-col gap-[48px] w-full bg-[var(--color-bg-footer)] pt-[80px] pb-[40px] px-[80px]">
      {/* Footer Main */}
      <div className="flex justify-between w-full">
        {/* Brand */}
        <div className="flex flex-col gap-[16px] w-[280px]">
          <span className="text-[24px] font-bold text-[var(--color-text-primary)]">
            DeedShares.com
          </span>
          <p className="text-[14px] leading-[1.6] text-[var(--color-footer-link)]">
            {tagline}
          </p>
          <div className="flex gap-[16px]">
            <Linkedin size={20} className="text-[var(--color-social-icon)]" />
            <Twitter size={20} className="text-[var(--color-social-icon)]" />
          </div>
        </div>

        {/* Nav columns (light only) */}
        {!isDark && (
          <div className="flex gap-[80px]">
            {lightFooterColumns.map((col, i) => (
              <div key={i} className="flex flex-col gap-[16px]">
                <span className="text-[14px] font-semibold text-[var(--color-footer-heading)]">
                  {col.title}
                </span>
                {col.links.map((link, j) => (
                  <span key={j} className="text-[14px] text-[var(--color-footer-link)] cursor-pointer hover:opacity-80">
                    {link}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[var(--color-border)]" />

      {/* Bottom */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[14px] text-[var(--color-text-faint)]">
          {copyright}
        </span>
        <div className="flex gap-[24px]">
          <span className="text-[14px] text-[var(--color-text-faint)] cursor-pointer hover:opacity-80">
            Privacy Policy
          </span>
          <span className="text-[14px] text-[var(--color-text-faint)] cursor-pointer hover:opacity-80">
            Terms of Service
          </span>
          <span className="text-[14px] text-[var(--color-text-faint)] cursor-pointer hover:opacity-80">
            Compliance
          </span>
        </div>
      </div>
    </footer>
  )
}
