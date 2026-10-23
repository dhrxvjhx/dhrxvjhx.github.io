
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    number: "01",
    organization: "Kotak 811",
    role: "Product Manager Intern",
    period: "JAN — MAR 2026",
    type: "PROFESSIONAL",
  },
  {
    number: "02",
    organization: "Cygnet",
    role: "Digital Transformation Intern",
    period: "JUN — OCT 2025",
    type: "PROFESSIONAL",
  },
  {
    number: "03",
    organization: "Aaruush · SRM",
    role: "Joint Secretary",
    period: "2026 — PRESENT",
    type: "LEADERSHIP",
  },
  {
    number: "04",
    organization: "SRMMUN Society",
    role: "President",
    period: "2025 — 2026",
    type: "LEADERSHIP",
  },
];

export default function ExperiencePreview() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading experience-heading">
          <div>
            <span className="section-label">Experience & leadership</span>
            <h2 className="section-title serif">
              Beyond the <span className="title-muted">build.</span>
            </h2>
          </div>

          <span className="section-counter">SELECTED ROLES / 04</span>
        </div>

        <div className="experience-list">
          {highlights.map((item) => (
            <article className="experience-row" key={item.number}>
              <span className="experience-number">{item.number}</span>

              <div className="experience-role">
                <h3>{item.organization}</h3>
                <p>{item.role}</p>
              </div>

              <span className="experience-type">{item.type}</span>
              <span className="experience-period">{item.period}</span>
            </article>
          ))}
        </div>

        <div className="experience-end">
          <span className="experience-end-line" />
          <Link className="arrow-link" to="/about">
            More about my experience
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
