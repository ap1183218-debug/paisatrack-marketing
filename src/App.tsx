import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SectionHeader } from "./components/SectionHeader";
import { CardRow } from "./components/CardRow";
import { Footer } from "./components/Footer";

/**
 * The page splits horizontally: everything above the fold on near-white,
 * everything below on near-black. The join is a hard edge — no gradient, no
 * fade, no transition section — and it is the only straight edge in the page.
 * Both halves carry the same dot grid, inked against their own background.
 */
export default function App() {
  return (
    <main>
      <section className="dot-grid-light">
        <Nav />
        <Hero />
      </section>

      {/* Hard edge. Everything below is the dark half. */}
      <section className="dot-grid-dark pt-24 md:pt-32">
        <SectionHeader />
        <div className="mt-10 md:mt-12">
          <CardRow />
        </div>
        <Footer />
      </section>
    </main>
  );
}
