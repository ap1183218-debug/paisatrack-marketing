import { useEffect, useRef, useState } from "react";
import { SECTION } from "../content";

/**
 * Heading and range picker share a baseline, with the pill sitting immediately
 * after the text rather than pushed to the far right — the two read as one
 * unit.
 *
 * The chevron is the only icon outside the social row, so it is drawn inline
 * rather than pulling in a library.
 */
export function SectionHeader() {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState(SECTION.ranges[2]);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-3 px-6">
      <h2 className="text-[28px] font-bold leading-none tracking-[-0.02em] text-paper sm:text-[34px]">
        {SECTION.heading}
      </h2>

      <div ref={wrapRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex items-center gap-2 rounded-[var(--radius-pill)] bg-paper px-4 py-1.5 text-[12px] font-medium text-ink transition-opacity hover:opacity-90"
        >
          {range}
          <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden className="shrink-0">
            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute left-0 top-full z-10 mt-2 min-w-full overflow-hidden rounded-[var(--radius-tile)] border border-hairline bg-panel py-1"
          >
            {SECTION.ranges.map((r) => (
              <li key={r}>
                <button
                  type="button"
                  role="option"
                  aria-selected={r === range}
                  onClick={() => {
                    setRange(r);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-[12px] transition-colors hover:bg-hairline ${
                    r === range ? "text-paper" : "text-mute-dark"
                  }`}
                >
                  {r}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
