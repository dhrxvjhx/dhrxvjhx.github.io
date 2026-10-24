
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

function getEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      const id = parsed.searchParams.get("v") ||
        parsed.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1];

      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = parsed.pathname.match(/\/(?:video\/)?(\d+)/)?.[1];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

function GalleryMedia({ item }) {
  if (item.type === "video") {
    const embedUrl = item.provider
      ? getEmbedUrl(item.src)
      : getEmbedUrl(item.src);

    if (embedUrl) {
      return (
        <iframe
          className="project-gallery-embed"
          src={embedUrl}
          title={item.alt || item.caption || "Project video"}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }

    return (
      <video
        className="project-gallery-video"
        src={item.src}
        poster={item.poster}
        controls
        playsInline
        preload="metadata"
        aria-label={item.alt || item.caption || "Project video"}
      >
        Your browser does not support embedded video.
      </video>
    );
  }

  return (
    <img
      className="project-gallery-image"
      src={item.src}
      alt={item.alt || item.caption || "Project image"}
      loading="lazy"
      draggable="false"
    />
  );
}

export default function ProjectGallery({ items = [], projectTitle = "Project" }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  function updateIndex() {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children);
    if (!slides.length) return;

    const trackCenter =
      track.getBoundingClientRect().left + track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(trackCenter - center);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }

  function goTo(index) {
    const track = trackRef.current;
    if (!track) return;

    const slides = track.children;
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));

    slides[safeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(safeIndex);
  }

  return (
    <section
      className="project-gallery container"
      aria-label={`${projectTitle} media gallery`}
    >
      <div className="project-gallery-heading">
        <div>
          <span className="section-label">Inside the project</span>
          <h2 className="project-gallery-title serif">
            Selected <span>frames.</span>
          </h2>
        </div>

        <div className="project-gallery-controls">
          <span className="project-gallery-counter" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")}
            <span> / </span>
            {String(items.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            className="project-gallery-arrow"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous media"
          >
            <ArrowLeft size={17} />
          </button>

          <button
            type="button"
            className="project-gallery-arrow"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === items.length - 1}
            aria-label="Next media"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <div
        className="project-gallery-track"
        ref={trackRef}
        onScroll={updateIndex}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") goTo(activeIndex + 1);
          if (event.key === "ArrowLeft") goTo(activeIndex - 1);
        }}
        tabIndex={0}
        aria-label="Scrollable project media. Use arrow keys to navigate."
      >
        {items.map((item, index) => (
          <figure className="project-gallery-slide" key={`${item.src}-${index}`}>
            <div className={`project-gallery-frame ${item.type === "video" ? "is-video" : ""}`}>
              <GalleryMedia item={item} />

              {item.type === "video" && (
                <span className="project-gallery-media-label">
                  <Play size={12} />
                  VIDEO
                </span>
              )}
            </div>

            <figcaption className="project-gallery-caption">
              <span className="project-gallery-caption-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.caption || item.alt || `${projectTitle} — frame ${index + 1}`}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="project-gallery-progress" aria-hidden="true">
        {items.map((item, index) => (
          <button
            type="button"
            key={`${item.src}-dot-${index}`}
            className={`project-gallery-dot ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => goTo(index)}
            tabIndex={-1}
            aria-label={`Go to media ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
