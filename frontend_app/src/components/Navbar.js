import React, { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About" },
];

// PUBLIC_INTERFACE
export default function Navbar({ onNavigate }) {
  /** Top navigation bar with simple stateful active link. */
  const [active, setActive] = useState("home");

  const onClick = (id) => {
    setActive(id);
    if (onNavigate) onNavigate(id);
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {links.map((l) => (
          <button
            key={l.id}
            className={`nav-link ${active === l.id ? "active" : ""}`}
            onClick={() => onClick(l.id)}
            aria-current={active === l.id ? "page" : undefined}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
