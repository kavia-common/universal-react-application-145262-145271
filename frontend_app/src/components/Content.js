import React from "react";

// Images will be provided via public assets path as instructed by runtime.
// We reference them directly as /assets/... after they are copied by the system.

// PUBLIC_INTERFACE
export default function Content() {
  /** Main content area with hero, stats, and a secondary sidebar list. */
  return (
    <main className="main">
      <div className="container grid">
        <section className="card hero">
          <div className="content">
            <span className="badge badge-secondary">Ocean Professional</span>
            <h1>Design-forward React Template</h1>
            <p>
              A clean, modern starter with blue and amber accents, subtle
              shadows, rounded corners, and smooth transitions. Built for
              professional dashboards and product sites.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Create Project</button>
              <button className="btn btn-outline">Explore Components</button>
            </div>
          </div>
          {/* Decorative image area - reference any one Figma-derived image */}
          <img
            src="/assets/figma_image_2218_5205.png"
            alt="Decorative ocean themed graphic"
            className="hero-visual"
          />
          <hr className="divider" />
          <div className="content">
            <h3 style={{ marginTop: 0 }}>Quick Stats</h3>
            <div className="stats">
              <div className="card stat">
                <div className="k">24k+</div>
                <div className="d">Active Sessions</div>
              </div>
              <div className="card stat">
                <div className="k">99.9%</div>
                <div className="d">Uptime</div>
              </div>
              <div className="card stat">
                <div className="k">1.2s</div>
                <div className="d">TTI Avg</div>
              </div>
            </div>
          </div>
        </section>

        <aside className="sidebar">
          <div className="card">
            <h3>What’s included</h3>
            <ul className="list">
              <li>
                <span className="dot" />
                Ocean tokens (colors, radii, shadows)
              </li>
              <li>
                <span className="dot" />
                Modular layout (header, nav, content, footer)
              </li>
              <li>
                <span className="dot" />
                Accessible buttons and links
              </li>
              <li>
                <span className="dot" />
                Smooth transitions and subtle gradients
              </li>
              <li>
                <span className="dot" />
                Figma-derived assets ready in /assets
              </li>
            </ul>
            <div style={{ marginTop: 16 }}>
              <img
                src="/assets/figma_image_2218_5335.png"
                alt="Preview element"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid var(--oc-border)",
                  boxShadow: "var(--oc-shadow-sm)",
                }}
              />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
