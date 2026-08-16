import { NAV_LINKS } from "../content";

/**
 * Floats directly on the dot grid — no background, not sticky. The active link
 * carries the page's only accent colour; nothing else here is coloured.
 */
export function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-7">
      <div className="flex items-center gap-8">
        {/* Rounded-square mark, the one radius between pill and tile. */}
        <a href="#top" aria-label="PaisaTrack home" className="shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-mark)] bg-ink">
            <span className="font-sans text-[15px] font-bold leading-none text-paper">P</span>
          </div>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                aria-current={l.active ? "page" : undefined}
                className={`text-[13px] leading-none transition-colors ${
                  l.active ? "text-accent" : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#get"
        className="rounded-[var(--radius-pill)] bg-ink px-5 py-2.5 text-[13px] font-medium text-paper transition-opacity hover:opacity-85"
      >
        Get the app
      </a>
    </nav>
  );
}
