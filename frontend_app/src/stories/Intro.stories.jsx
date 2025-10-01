import React from "react";

/**
 * Ocean UI Component Library
 *
 * This Storybook showcases the reusable components derived from the Figma Search Results page.
 * All components are styled using the Ocean Professional theme tokens (CSS variables).
 */
export default {
  title: "Overview/Intro",
};

export const Intro = {
  render: () => (
    <div style={{ lineHeight: 1.6 }}>
      <h2 style={{ marginTop: 0 }}>Ocean UI Components</h2>
      <p>
        Components include: SearchBar, EventCard, Pagination, Buttons, Dropdowns, Tags/Chips,
        NavBar, UserAvatarMenu, Spinner/Loader, EmptyState, Breadcrumbs, Modal/Dialog, Footer, and an Icon set.
      </p>
      <p>
        Use CSS variables in src/theme.js to adjust branding colors and tokens across all components.
      </p>
    </div>
  ),
};
