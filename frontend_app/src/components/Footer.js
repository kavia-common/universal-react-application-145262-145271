import React from "react";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Application footer with lightweight links and copyright. */
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ color: "var(--oc-text-muted)" }}>
          © {year} Ocean App • Built with React
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#status">Status</a>
        </div>
      </div>
    </footer>
  );
}
