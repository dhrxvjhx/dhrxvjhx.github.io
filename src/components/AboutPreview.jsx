
import { ArrowUpRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-intro">
          <span className="section-label">About</span>

          <h2 className="about-title serif">
            Software is
            <br />
            <span>just the start.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p className="about-description">
            I'm Dhruv, a computer science student at SRM, also pursuing
            a degree in Data Science from IIT Madras. I've worked across
            software development and product management, and I like
            understanding how an idea moves from a technical problem
            to something people can actually use.
          </p>

          <p className="about-description">
            Outside the code, I've spent time building student
            communities and organising large-scale events. Between
            engineering, product, and the occasional experiment in
            AR/VR or geospatial research, I tend to follow projects
            that give me something new to figure out.
          </p>

          <a
            className="arrow-link"
            href="https://www.linkedin.com/in/dhruv-jha"
            target="_blank"
            rel="noreferrer"
          >
            More about my experience <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
