//
// Ocean Professional Theme Tokens and helpers
//

// PUBLIC_INTERFACE
export const oceanTheme = {
  name: "Ocean Professional",
  colors: {
    primary: "#2563EB",
    secondary: "#F59E0B",
    success: "#F59E0B",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    gradientStart: "rgba(59,130,246,0.1)", // blue-500/10
    gradientEnd: "#F9FAFB", // gray-50
  },
  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    pill: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.04)",
    md: "0 4px 10px rgba(0,0,0,0.06)",
    lg: "0 10px 25px rgba(0,0,0,0.08)",
    inset: "inset 0 1px 0 rgba(255,255,255,0.5)"
  },
  transitions: {
    base: "all .25s ease",
    slow: "all .4s ease",
  }
};

// PUBLIC_INTERFACE
export const applyThemeToRoot = (theme = oceanTheme) => {
  const r = document.documentElement;
  const c = theme.colors;
  r.style.setProperty("--oc-primary", c.primary);
  r.style.setProperty("--oc-secondary", c.secondary);
  r.style.setProperty("--oc-success", c.success);
  r.style.setProperty("--oc-error", c.error);
  r.style.setProperty("--oc-bg", c.background);
  r.style.setProperty("--oc-surface", c.surface);
  r.style.setProperty("--oc-text", c.text);
  r.style.setProperty("--oc-text-muted", c.textMuted);
  r.style.setProperty("--oc-border", c.border);
  r.style.setProperty("--oc-gradient-start", c.gradientStart);
  r.style.setProperty("--oc-gradient-end", c.gradientEnd);

  r.style.setProperty("--oc-radius-sm", theme.radii.sm);
  r.style.setProperty("--oc-radius-md", theme.radii.md);
  r.style.setProperty("--oc-radius-lg", theme.radii.lg);
  r.style.setProperty("--oc-radius-pill", theme.radii.pill);

  r.style.setProperty("--oc-shadow-sm", theme.shadows.sm);
  r.style.setProperty("--oc-shadow-md", theme.shadows.md);
  r.style.setProperty("--oc-shadow-lg", theme.shadows.lg);
  r.style.setProperty("--oc-shadow-inset", theme.shadows.inset);

  r.style.setProperty("--oc-transition", theme.transitions.base);
  r.style.setProperty("--oc-transition-slow", theme.transitions.slow);
};
