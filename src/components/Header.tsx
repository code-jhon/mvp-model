import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="font-primary flex items-center justify-between h-[80px] px-[80px] bg-[var(--color-bg-header)] w-full">
      <div className="flex items-center gap-[12px]">
        <span className="text-[24px] font-bold text-[var(--color-text-primary)]">
          DeedShares.com
        </span>
      </div>

      <div className="flex items-center gap-[16px]">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-alt)] transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="flex items-center justify-center rounded-[8px] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors px-[24px] py-[12px] cursor-pointer">
          <span className="text-[16px] font-semibold text-white">
            Get Notified
          </span>
        </div>
      </div>
    </header>
  )
}
