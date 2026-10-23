
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-copy-block">
            <span className="eyebrow">CONTACT</span>

            <h2 className="footer-title serif">
              Have something
              <br />
              <span>to talk about?</span>
            </h2>
          </div>

          <a
            href="mailto:dhruv.jha13217@gmail.com"
            className="footer-contact"
          >
            Get in touch
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Dhruv Jha
          </span>

          <div className="footer-socials">
            <a
              href="https://github.com/dhrxvjhx"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-jha"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="mailto:dhruv.jha13217@gmail.com"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <a className="back-top" href="#top">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
