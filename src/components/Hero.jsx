
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-topline animate-rise">
        <span className="section-label">
          Engineering, product, and the space between.
        </span>
        <span className="hero-location">CHENNAI, INDIA</span>
      </div>

      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow animate-rise delay-1">
            ENGINEERING × PRODUCT × EXPERIMENTS
          </p>

          <h1 className="hero-title animate-rise delay-1">
            I like building
            <br />
            <span className="serif hero-italic">things that work.</span>
          </h1>

          <div className="hero-bottom animate-rise delay-2">
            <p className="hero-description">
              From shipping software to exploring new interfaces, I work
              across engineering, product, and interactive experiences.
              I care about how things are built, why they matter, and
              what makes them useful.
            </p>

            <a href="#work" className="hero-cta">
              <span>Explore me</span>
              <span className="cta-icon">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
        </div>

        <div
          className="hero-art animate-rise delay-2"
          aria-label="Abstract geometric artwork"
        >
          <div className="art-grid" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />
          <div className="art-core">
            <span>D</span>
          </div>
          <div className="art-coordinate coordinate-top">
            12°48.97' N
          </div>
          <div className="art-coordinate coordinate-bottom">
            80°02.45' E
          </div>
          <div className="art-index">FIG. 001 — IN PROGRESS</div>
        </div>
      </div>

      <div className="hero-foot animate-rise delay-3">
        <span className="eyebrow">BUILD · EXPLORE · ITERATE</span>

        <a
          href="#work"
          className="scroll-cue"
          aria-label="Scroll to selected work"
        >
          <ArrowDown size={15} />
        </a>

        <span className="hero-foot-right">
          SOFTWARE · PRODUCT · EXPERIENCE
        </span>
      </div>
    </section>
  );
}
