
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const links = [
  { label: "Work", href: "/work", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Contact", href: "/#contact", type: "anchor" },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link
          className="brand"
          to="/"
          aria-label="Dhruv Jha — home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            D<span>.</span>
          </span>
          <span className="brand-name">Dhruv Jha</span>
        </Link>

        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active =
              link.type === "route" &&
              location.pathname === link.href;

            return link.type === "route" ? (
              <Link
                key={link.label}
                to={link.href}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            );
          })}

        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
