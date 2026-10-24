import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const filters = [
  { label: "All work", value: "all" },
  { label: "Web Development", value: "web-development" },
  { label: "UI / UX Design", value: "ui-ux-design" },
  { label: "Immersive Experiments", value: "immersive-experiments" },
  { label: "Product Design", value: "product-design" },
  { label: "AI & Research", value: "ai-research" },
];

// Maps discipline-card URL hashes to the filter values used here.
const disciplineSlugMap = {
  "web-development": "web-development",
  "ui-ux": "ui-ux-design",
  "immersive": "immersive-experiments",
  "product-design": "product-design",
  "ai-research": "ai-research",
};

function ProjectArtwork({ project }) {
  return (
    <div
      className={`work-artwork artwork-${project.tone}`}
      aria-label={`${project.title} abstract artwork`}
      role="img"
    >
      <span className="artwork-index">
        {project.number} / SELECTED WORK
      </span>

      {project.type === "product" && (
        <div className="product-art">
          <div className="product-topline">
            <span>RESOURCE / REUSE</span>
            <span>01—26</span>
          </div>
          <div className="product-circle">
            <span className="product-symbol">↗</span>
          </div>
          <div className="product-bottomline">
            <span>DESIGNED FOR BETTER SYSTEMS</span>
            <span>01</span>
          </div>
        </div>
      )}

      {project.type === "systems" && (
        <div className="systems-art">
          <div className="systems-orbit orbit-a" />
          <div className="systems-orbit orbit-b" />
          <div className="systems-core">AI</div>
          <span className="systems-node node-a">RISK</span>
          <span className="systems-node node-b">CLOUD</span>
          <span className="systems-node node-c">SIGNAL</span>
        </div>
      )}

      {project.type === "research" && (
        <div className="terrain-art">
          <div className="terrain-ring ring-a" />
          <div className="terrain-ring ring-b" />
          <div className="terrain-ring ring-c" />
          <span className="terrain-point" />
          <span className="terrain-coordinate">
            29°23' N / 79°27' E
          </span>
        </div>
      )}

      {project.type === "experiments" && (
        <div className="immersive-art">
          <div className="immersive-shape shape-a" />
          <div className="immersive-shape shape-b" />
          <div className="immersive-shape shape-c" />
          <span className="immersive-caption">
            PERCEPTION / SPACE / SELF
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="work-project-card"
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.32, delay: index * 0.035 }}
    >
      <Link
        className="work-project-visual"
        to={project.href || "/work"}
        aria-label={`Explore ${project.title}`}
      >
        <ProjectArtwork project={project} />
        <span className="work-project-open">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      <div className="work-project-meta">
        <span className="eyebrow">{project.category}</span>
        <span className="work-project-year">{project.year}</span>
      </div>

      <h2 className="work-project-title">{project.title}</h2>
      <p className="work-project-description">
        {project.description}
      </p>

      <div className="work-project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Work() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");

  // Select the correct filter when arriving through a discipline card
  // or when the URL hash changes.
  useEffect(() => {
    const slug = decodeURIComponent(location.hash.replace(/^#/, ""));
    const matchingFilter = disciplineSlugMap[slug];

    setActiveFilter(matchingFilter ?? "all");

    if (location.hash) {
      requestAnimationFrame(() => {
        document.getElementById("project-index")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.hash]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) => {
      const disciplines = project.disciplines ?? [project.discipline];
      return disciplines.includes(activeFilter);
    });
  }, [activeFilter]);

  return (
    <main className="work-page">
      <section className="work-page-hero">
        <div className="container">
          <div className="work-page-topline">
            <span className="section-label">
              A selection of things made
            </span>
            <span className="eyebrow">INDEX / 2025—2026</span>
          </div>

          <h1 className="work-page-title serif">
            Work in
            <br />
            <span>progress,</span> and beyond.
          </h1>

          <div className="work-page-intro">
            <p>
              A collection of applications, research, interfaces and
              experiments shaped by curiosity and the process of making.
            </p>

            <a href="#project-index" className="work-page-jump">
              Browse the index <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="work-index section" id="project-index">
        <div className="container">
          <div className="work-index-heading">
            <div>
              <span className="section-label">Selected projects</span>
              <h2 className="section-title serif">
                The <span className="title-muted">index.</span>
              </h2>
            </div>

            <span className="section-counter">
              {String(filteredProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="work-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`work-filter ${
                  activeFilter === filter.value ? "is-active" : ""
                }`}
                aria-pressed={activeFilter === filter.value}
                onClick={() => {
                  setActiveFilter(filter.value);

                  // Keep the URL consistent with the selected filter.
                  const slug = Object.keys(disciplineSlugMap).find(
                    (key) => disciplineSlugMap[key] === filter.value
                  );

                  const nextHash = slug ? `#${slug}` : "";
                  window.history.replaceState(
                    window.history.state,
                    "",
                    `${location.pathname}${location.search}${nextHash}`
                  );
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div layout className="work-project-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.number}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="work-empty">
              Nothing in this category just yet. More work is taking shape.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
