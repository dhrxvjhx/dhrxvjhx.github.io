
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const experience = [
  {
    organization: "Kotak 811",
    role: "Product Manager Intern",
    period: "Jan 2026 — Mar 2026",
    description:
      "Worked across design, engineering and QA to support feature delivery, product requirements and user stories for digital banking.",
  },
  {
    organization: "Cygnet",
    role: "Digital Transformation Intern",
    period: "Jun 2025 — Oct 2025",
    description:
      "Developed enterprise software features using the MERN stack and collaborated with QA to improve reliability and delivery workflows.",
  },
  {
    organization: "Codsoft",
    role: "Web Development Intern",
    period: "Jan 2024 — Feb 2024",
    description:
      "Built responsive web interfaces and worked on backend APIs and database design for a blog management system.",
  },
];

const leadership = [
  {
    organization: "Aaruush, SRM",
    role: "Joint Secretary",
    period: "Apr 2026 — Present",
  },
  {
    organization: "SRMMUN Society",
    role: "President",
    period: "May 2025 — Apr 2026",
  },
  {
    organization: "ACM SIGCHI, SRM",
    role: "Webmaster",
    period: "Oct 2024 — Mar 2026",
  },
  {
    organization: "Newton School Coding Club, SRM",
    role: "Associate Director",
    period: "Jun 2025 — Dec 2025",
  },
  {
    organization: "SRM Hackathon",
    role: "Member",
    period: "Oct 2024 — Jul 2025",
  },
];

const education = [
  {
    institution: "SRM Institute of Science and Technology",
    qualification: "B.Tech, Computer Science and Engineering",
    period: "Aug 2023 — Present",
  },
  {
    institution: "IIT Madras",
    qualification: "B.S., Data Science and Applications",
    period: "Jan 2024 — Present",
  },
  {
    institution: "Delhi Public School, Ahmedabad",
    qualification: "High School",
    period: "Apr 2021 — May 2023",
  },
];

const skills = [
  "C / C++",
  "C#",
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Unity",
  "Firebase",
  "SQL",
  "Figma",
  "Git",
  "UI/UX",
  "Product Thinking",
  "AR/VR",
  "OpenXR",
  "APIs",
];

function SectionHeading({ index, label, title }) {
  return (
    <div className="about-page-heading">
      <span className="eyebrow">{index} / {label}</span>
      <h2 className="serif">{title}</h2>
    </div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <section className="about-page-hero">
        <div className="container">
          <span className="section-label">A little more context</span>

          <h1 className="about-page-title serif">
            Not just one
            <br />
            <span>kind of builder.</span>
          </h1>

          <div className="about-page-intro">
            <p>
              I'm Dhruv, a computer science student interested in how
              technology becomes something people can actually use.
              I enjoy moving between engineering, product thinking,
              design and experiments that don't fit neatly into one box.
            </p>
            <span className="eyebrow">CHENNAI, INDIA</span>
          </div>
        </div>
      </section>

      <section className="about-page-section">
        <div className="container">
          <SectionHeading
            index="01"
            label="Education"
            title="Where I'm learning."
          />

          <div className="about-timeline">
            {education.map((item) => (
              <article className="about-timeline-row" key={item.institution}>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.qualification}</p>
                </div>
                <span className="about-period">{item.period}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-section alternate">
        <div className="container">
          <SectionHeading
            index="02"
            label="Professional experience"
            title="Work in practice."
          />

          <div className="about-experience-list">
            {experience.map((item) => (
              <article className="about-experience-row" key={item.organization}>
                <div className="about-experience-top">
                  <h3>{item.organization}</h3>
                  <span className="about-period">{item.period}</span>
                </div>
                <p className="about-role">{item.role}</p>
                <p className="about-detail">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-section">
        <div className="container">
          <SectionHeading
            index="03"
            label="Leadership"
            title="Working with people."
          />

          <div className="about-timeline">
            {leadership.map((item) => (
              <article className="about-timeline-row" key={item.organization}>
                <div>
                  <h3>{item.organization}</h3>
                  <p>{item.role}</p>
                </div>
                <span className="about-period">{item.period}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-section alternate">
        <div className="container skills-layout">
          <div>
            <SectionHeading
              index="04"
              label="Toolkit"
              title="Things I work with."
            />
            <p className="about-detail skills-description">
              A practical mix of software engineering, product development
              and creative technology. The tools change; the curiosity stays.
            </p>
          </div>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-resume">
        <div className="container resume-row">
          <div>
            <span className="section-label">Want the concise version?</span>
            <h2 className="serif">The full résumé.</h2>
          </div>

          <a
            className="arrow-link"
            href="https://drive.google.com/file/d/1MYwUPEeLQr-YFtUCCiOd1XbygoSwOJdK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé <ArrowDownToLine size={15} />
          </a>
        </div>
      </section>
    </main>
  );
}
