import { useState } from "react";
import { FOOTER } from "../content";

/** Minimal inline glyphs — the social row is one of the two sanctioned icon uses. */
function SocialGlyph({ label }: { label: string }) {
  return (
    <a
      href="#social"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-pill)] border border-hairline text-mute-dark transition-colors hover:border-[#3d3d3d] hover:text-paper"
    >
      <span className="util text-[9px]">{label}</span>
    </a>
  );
}

/**
 * Darker than the section above, with a shallow rounded step in its top edge —
 * the notch is formed by the panel's own top corners, so it stays a curve
 * rather than an applied graphic.
 *
 * Everything here is the mono utility system; no sans appears in the footer.
 */
export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative mt-28 md:mt-36">
      {/* A single tile breaks upward over the footer's top edge. */}
      <img
        src="/img/tile-3.svg"
        alt=""
        aria-hidden
        width={72}
        height={72}
        className="tile-shadow absolute -top-9 left-1/2 z-10 h-16 w-16 -translate-x-1/2 rotate-6 rounded-[var(--radius-tile)] md:left-auto md:right-24 md:translate-x-0"
      />

      <div className="rounded-t-[40px] bg-footer px-6 pb-10 pt-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1 — copyright and legal */}
          <div>
            <p className="util text-mute-dark">{FOOTER.copyright}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER.legal.map((l) => (
                <li key={l}>
                  <a href="#legal" className="util text-mute-dark transition-colors hover:text-paper">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — mailing list */}
          <div>
            <label htmlFor="footer-email" className="util block text-mute-dark">
              {FOOTER.mailingLabel}
            </label>
            <form
              className="relative mt-4"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={FOOTER.mailingPlaceholder}
                className="util-11 util w-full rounded-[var(--radius-pill)] border border-hairline bg-transparent py-3 pl-5 pr-12 text-paper placeholder:text-mute-dark focus:border-[#3d3d3d] focus:outline-none"
              />
              {/* Circular submit sits inside the input's right edge. */}
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[var(--radius-pill)] bg-paper text-ink transition-opacity hover:opacity-85"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                  <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>

          {/* Column 3 — policies */}
          <div>
            <p className="util text-mute-dark">{FOOTER.policyLabel}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {FOOTER.policyButtons.map((b) => (
                <a
                  key={b}
                  href="#policy"
                  className="util rounded-[var(--radius-pill)] border border-hairline px-4 py-2 text-mute-dark transition-colors hover:border-[#3d3d3d] hover:text-paper"
                >
                  {b}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl justify-end gap-2">
          {FOOTER.socials.map((s) => (
            <SocialGlyph key={s} label={s} />
          ))}
        </div>
      </div>
    </footer>
  );
}
