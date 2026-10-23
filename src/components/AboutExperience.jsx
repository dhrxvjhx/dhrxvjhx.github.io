
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const experience = [
  {
    number: "01",
    organization: "Kotak 811",
    role: "Product Manager Intern",
    type: "PROFESSIONAL",
    period: "JAN — MAR 2026",
    description:
      "Worked across design, engineering, and QA on digital banking features and product requirements.",
  },
  {
    number: "02",
    organization: "Cygnet",
    role: "Digital Transformation Intern",
    type: "PROFESSIONAL",
    period: "JUN — OCT 2025",
    description:
      "Contributed to enterprise software development using the MERN stack, with a focus on reliability.",
  },
  {
    number: "03",
    organization: "Aaruush · SRM",
    role: "Joint Secretary",
    type: "LEADERSHIP",
    period: "2026 — PRESENT",
    description:
      "Helping coordinate teams, operations, and planning for SRM's annual technical festival.",
  },
  {
    number: "04",
    organization: "SRMMUN Society",
    role: "President",
    type: "LEADERSHIP",
    period: "2025 — 2026",
    description:
      "Led the society's activities and helped organize its Model United Nations conference.",
  },
];

const interests = [
  "Engineering",
  "Product thinking",
  "Creative technology",
  "Geospatial research",
];

export default function AboutExperience() {
  return (
    <section
      className="section about-experience-section"
      id="about"
    >
      <div className="container about-experience-layout">
        <div className="profile-column">
          <span className="section-label">About & experience</span>

          <h2 className="profile-title serif">
            Software is
            <br />
            <span>just the start.</span>
          </h2>

          <div className="profile-copy">
            <p>
              I'm a computer science student at SRM, also pursuing a
              degree in Data Science from IIT Madras. I like building
              things, understanding how they work, and exploring what
              makes a technical idea useful in the real world.
            </p>

            <p>
              My work has taken me across software engineering,
              product management, AI, and geospatial research.
              Outside the technical side, I've spent time leading
              student communities and coordinating large-scale
              events—experiences that have shaped how I approach
              teams, decisions, and getting things done.
            </p>

            <p>
              I'm interested in the space between making something
              work and figuring out why it should exist, who it
              serves, and what would make it better.
            </p>
          </div>

          <div className="profile-interests">
            <span className="eyebrow">
              AREAS I KEEP EXPLORING
            </span>

            <div className="profile-interest-list">
              {interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-experience">
          <div className="profile-experience-heading">
            <span className="eyebrow">SELECTED ROLES / 04</span>
            <span className="experience-heading-note">
              Work & leadership
            </span>
          </div>

          <div className="experience-card-grid">
            {experience.map((item) => (
              <article
                className="experience-card"
                key={item.number}
              >
                <div className="experience-card-top">
                  <span className="experience-card-number">
                    {item.number}
                  </span>
                  <span className="experience-card-type">
                    {item.type}
                  </span>
                </div>

                <div className="experience-card-content">
                  <h3>{item.organization}</h3>
                  <p className="experience-card-role">
                    {item.role}
                  </p>
                  <p className="experience-card-description">
                    {item.description}
                  </p>
                </div>

                <span className="experience-card-period">
                  {item.period}
                </span>
              </article>
            ))}
          </div>

          <Link
            to="/about"
            className="experience-more-link"
          >
            <span>More about my experience</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
