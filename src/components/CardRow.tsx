import { CARDS } from "../content";

/**
 * Three equal image-first cards.
 *
 * No shadows here — on the dark half separation comes from the hairline border,
 * which brightens on hover. Shadows belong to the floating hero tiles only.
 * Nothing is overlaid on the artwork; the title and metadata sit beneath it.
 */
export function CardRow() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-3">
      {CARDS.map((c) => (
        <article
          key={c.title}
          className="group rounded-[var(--radius-tile)] border border-hairline bg-panel p-3 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-[#3d3d3d]"
        >
          {/* Image occupies the top ~70% of the card. */}
          <img
            src={c.src}
            alt=""
            width={480}
            height={600}
            className="aspect-[4/5] w-full rounded-[var(--radius-tile)] object-cover"
          />

          <div className="px-2 pb-3 pt-5 text-center">
            <h3 className="text-[17px] font-bold leading-tight tracking-[-0.01em] text-paper">
              {c.title}
            </h3>
            {/* Metadata uses the mono utility system, with its leading glyph. */}
            <p className="util mt-2 text-mute-dark">
              <span aria-hidden className="mr-1.5">
                {c.glyph}
              </span>
              {c.meta}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
