import React from "react";

// PUBLIC_INTERFACE
export default function Header() {
  /** App header with brand and quick actions. */
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-logo" aria-hidden="true" />
          <div>
            <div className="brand-title">Ocean App</div>
            <div className="brand-sub">Modern • Minimal • Professional</div>
          </div>
        </div>
        <div>
          <button className="btn btn-outline" aria-label="View Docs">
            📘 Docs
          </button>
          <span style={{ display: "inline-block", width: 8 }} />
          <button className="btn btn-primary" aria-label="Get Started">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
