# Storybook Setup and Theme Tokens

This project uses CSS variables for theming, defined in `src/styles/tokens.css` and loaded through `src/index.css`.

## Global CSS in Storybook

To ensure all stories have access to the required CSS variables, the global stylesheet is imported via Storybook's preview file:

- `.storybook/preview.js` imports `../src/index.css`
- `src/index.css` itself `@import`s `./styles/tokens.css`

This makes all `--oc-*` CSS variables available at the root (`:root`) of the Storybook preview document, so any component using `var(--oc-...)` will resolve correctly.

## Why colors were missing

Initially, Storybook wasn't importing the project's global CSS. As a result, CSS variables like `--oc-primary` were undefined in the Storybook environment, causing components to render without the intended theme colors. Importing `index.css` at the Storybook preview level resolves this by making tokens available globally.

## Changing theme tokens

- Static defaults: Update `src/styles/tokens.css`.
- App runtime overrides: `src/theme.js` offers `applyThemeToRoot()` for programmatic overrides in the main app. If you need the same behavior in Storybook, add a decorator in `.storybook/preview.js` that calls `applyThemeToRoot()` before rendering stories.

Example decorator (optional):
```js
// In .storybook/preview.js
import React from "react";
import { applyThemeToRoot } from "../src/theme";
export const decorators = [
  (Story) => {
    applyThemeToRoot();
    return <Story />;
  },
];
```

## Static assets
Storybook serves static assets from `public` via `staticDirs` in `.storybook/main.js`. Ensure Figma images are available in `frontend_app/public/assets/` if your stories reference `/assets/...`. See `ASSETS_SETUP.md` for details.
