
import { ArrowUpRight } from "lucide-react";
import Link from "react-router-dom";

const categories = [
  {
    number: "01",
    label: "ENGINEERING",
    title: "Web Development",
    description: "Interfaces, applications and the systems behind them.",
    slug: "web-development",
    artwork: "web",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "UI / UX Design",
    description: "Interfaces, design systems and considered interactions.",
    slug: "ui-ux",
    artwork: "ui",
  },
  {
    number: "03",
    label: "IMMERSIVE",
    title: "Immersive Experiments",
    description: "Spatial computing, interactive environments and new perspectives.",
    slug: "immersive",
    artwork: "immersive",
  },
  {
    number: "04",
    label: "STRATEGY",
    title: "Product Design",
    description: "Ideas translated into useful products and experiences.",
    slug: "product-design",
    artwork: "product",
  },
  {
    number: "05",
    label: "RESEARCH",
    title: "AI & Research",
    description: "Intelligent systems, geospatial work and technical experiments.",
    slug: "ai-research",
    artwork: "research",
  },
];

function CategoryArtwork({ artwork }) {
  return (
    <div className={`category-artwork category-artwork-${artwork}`}>
      <div className="category-artwork-grid" />

      {artwork === "web" && (
        <div className="category-browser">
          <div className="category-browser-bar">
            <i />
            <i />
            <i />
            <span>INTERFACE / 001</span>
          </div>
          <div className="category-browser-body">
            <div className="category-code-lines">
              <i /><i /><i /><i /><i />
            </div>
            <div className="category-code-visual">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="category-code-baseline">
                BUILDING FOR THE WEB
          </div>
        </div>
      )}

      {artwork === "ui" && (
        <div className="category-ui-canvas">
          <div className="category-ui-sidebar">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="category-ui-main">
            <div className="category-ui-heading" />
            <div className="category-ui-subheading" />
            <div className="category-ui-panel">
              <span />
              <span />
              <span />
            </div>
            <div className="category-ui-footer">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      )}

      {artwork === "immersive" && (
        <div className="category-immersive-scene">
          <div className="category-orbit orbit-one" />
          <div className="category-orbit orbit-two" />
          <div className="category-orbit orbit-three" />
          <div className="category-immersive-object" />
          <span>SPATIAL STUDY / 003</span>
        </div>
      )}

      {artwork === "product" && (
        <div className="category-product-scene">
          <div className="category-product-plane plane-back" />
          <div className="category-product-plane plane-middle" />
          <div className="category-product-plane plane-front" />
          <span>IDEA → EXPERIENCE</span>
        </div>
      )}

      {artwork === "research" && (
        <div className="category-research-scene">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              className="category-contour"
              key={index}
              style={{ "--contour-index": index }}
            />
          ))}
          <div className="category-research-point" />
          <span>DATA / TERRAIN / SYSTEMS</span>
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category }) {
  return (
    <Link
      className="category-card"
      href={`/work#${category.slug}`}
      aria-label={`Explore ${category.title}`}
    >
      <div className="category-card-visual">
        <CategoryArtwork artwork={category.artwork} />
        <span className="category-card-index">{category.number}</span>
        <span className="category-card-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="category-card-meta">
        <span className="eyebrow">{category.label}</span>
      </div>

      <h3>{category.title}</h3>
      <p>{category.description}</p>
    </Link>
  );
}

function ExploreCard() {
  return (
    <Link className="category-card explore-card" to="/work">
      <div className="explore-card-visual">
        <span className="eyebrow">THE COMPLETE INDEX / 2026</span>

        <div className="explore-card-message">
          <span className="serif">
            Curiosity,
            <br />
            <em>in practice.</em>
          </span>
          <p>
            Five disciplines. One evolving body of work.
          </p>
        </div>

        <div className="explore-card-footer">
          <span>Explore all work</span>
          <ArrowUpRight size={19} />
        </div>
      </div>

      <div className="category-card-meta">
        <span className="eyebrow">ALL PROJECTS</span>
      </div>

      <h3>Explore all work</h3>
      <p>Projects, experiments and ideas in progress.</p>
    </Link>
  );
}

export default function Disciplines() {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-label">
              A practice across disciplines
            </span>
            <h2 className="section-title serif">
              Ideas <span className="title-muted">into form.</span>
            </h2>
          </div>

          <span className="section-counter">
            2025 — 2026 / 05 DISCIPLINES
          </span>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
          <ExploreCard />
        </div>

        <div className="work-end">
          <span className="eyebrow">ALWAYS EXPLORING</span>
          <span className="work-end-line" />
          <span className="eyebrow">MORE TO COME</span>
        </div>
      </div>
    </section>
  );
}
