
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectGallery from "../components/ProjectGallery.jsx";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.number === String(id).padStart(2, "0")
  );

  if (!project) {
    return (
      <main className="container section">
        <h1 className="serif">Project not found.</h1>
        <Link to="/work">Back to selected work</Link>
      </main>
    );
  }

  const currentIndex = projects.findIndex(
    (item) => item.number === project.number
  );

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <main className="project-detail">
      {/* Project introduction */}
      <section className="project-detail-hero container">
        <Link to="/work" className="project-back">
          <ArrowLeft size={16} />
          <span>Back to selected work</span>
        </Link>

        <div className="project-detail-topline">
          <span className="section-label">
            PROJECT / {project.number}
          </span>
          <span className="eyebrow">{project.year}</span>
        </div>

        <p className="eyebrow">{project.category}</p>

        <h1 className="project-detail-title serif">
          {project.title}
        </h1>

        <p className="project-detail-description">
          {project.description}
        </p>

        <div className="project-detail-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      {/* Signature artwork — independent of gallery */}
      <section className="container project-detail-content">
        <div
          className={`project-detail-art artwork-${project.tone}`}
          role="img"
          aria-label={`Signature artwork for ${project.title}`}
        >
          <span className="artwork-index">
            {project.number} / SELECTED WORK
          </span>

          <div className="project-detail-art-title serif">
            {project.title}
          </div>

          <span className="project-detail-art-caption">
            AN EXPLORATION IN {project.category}
          </span>
        </div>
      </section>

      {/* Horizontal image and video gallery */}
      {project.gallery?.length > 0 && (
        <ProjectGallery
          items={project.gallery}
          projectTitle={project.title}
        />
      )}

      {/* Project overview */}
      <section className="container project-detail-content">
        <div className="project-detail-overview">
          <div>
            <span className="section-label">Overview</span>
            <h2 className="serif">The idea behind it.</h2>
          </div>

          <p>{project.description}</p>
        </div>

        <div className="project-detail-overview">
          <div>
            <span className="section-label">
              Technologies & disciplines
            </span>
            <h2 className="serif">How it comes together.</h2>
          </div>

          <div className="project-detail-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Project navigation */}
        <div className="project-detail-next">
          <span className="section-label">Continue exploring</span>

          {previousProject && (
            <Link to={previousProject.href}>
              <ArrowLeft size={16} />
              Previous: {previousProject.title}
            </Link>
          )}

          {nextProject && (
            <Link to={nextProject.href}>
              Next: {nextProject.title}
              <ArrowUpRight size={16} />
            </Link>
          )}

          <Link to="/work">
            Browse all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
