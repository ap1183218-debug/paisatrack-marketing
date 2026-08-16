import { useEffect, useState } from "react";
import { HERO, TILES } from "../content";

/** Scroll offset, sampled through rAF so parallax never reads scrollY per event. */
function useParallaxOffset() {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return y;
}

/**
 * Centred headline, caption and CTA, with image tiles scattered around them.
 *
 * The tiles are absolutely positioned at authored coordinates rather than laid
 * out on a grid, weighted to the outer edges so the centre column stays clear.
 * Each drifts at its own rate on scroll.
 *
 * Below 768px absolute positioning is abandoned entirely: the tiles become a
 * single horizontal scrolling strip under the CTA, which is the only way they
 * stay legible without crowding the text.
 */
export function Hero() {
  const scrollY = useParallaxOffset();

  return (
    <header id="top" className="relative">
      {/* Desktop: scattered floating tiles. Hidden on small screens. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {TILES.map((t) => (
          <img
            key={t.src}
            src={t.src}
            alt=""
            width={t.size}
            height={t.size}
            className="tile-shadow absolute rounded-[var(--radius-tile)]"
            style={{
              width: t.size,
              height: t.size,
              top: t.top,
              left: t.left,
              // translate3d keeps this on the compositor; rotation is authored.
              transform: `translate3d(0, ${(-scrollY * t.speed).toFixed(1)}px, 0) rotate(${t.rot}deg)`,
              willChange: "transform",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-28 pt-24 text-center md:pb-40 md:pt-32">
        <h1 className="max-w-[16ch] text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] md:text-[56px]">
          {HERO.headlineTop}
          <br />
          {HERO.headlineBottom}
        </h1>

        {/* ~34ch measure so this wraps to three short lines and reads as a caption. */}
        <p className="mt-6 max-w-[34ch] text-[13px] leading-[1.7] text-mute">{HERO.caption}</p>

        <a
          href="#get"
          className="mt-9 rounded-[var(--radius-pill)] bg-ink px-7 py-3.5 text-[13px] font-medium text-paper transition-opacity hover:opacity-85"
        >
          {HERO.cta}
        </a>

        {/* Mobile: the same tiles as one swipeable strip. */}
        <div className="mt-12 w-full md:hidden">
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
            {TILES.map((t) => (
              <img
                key={t.src}
                src={t.src}
                alt=""
                width={96}
                height={96}
                className="tile-shadow h-24 w-24 shrink-0 snap-start rounded-[var(--radius-tile)]"
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
