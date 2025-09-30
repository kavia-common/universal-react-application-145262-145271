# Ocean Professional React Frontend

A modern, lightweight React frontend implementing the Ocean Professional style guide with a standard multi-section layout (header, navigation, content, footer). Uses modular components and Figma-derived static assets.

## Features
- Ocean Professional theme tokens (primary blue + amber accent)
- Modular layout: Header • Navbar • Content • Footer
- Subtle gradients, rounded corners, and soft shadows
- Accessible buttons/links and semantic structure
- Static assets referenced from `/assets` (copied from `assets/figmaimages`)

## Getting Started
- `npm start` — development mode
- `npm test` — run tests
- `npm run build` — production build

## Project Structure
- `src/theme.js` — theme tokens and root variable application
- `src/components/` — modular UI components
- `src/App.js` — layout composition
- `src/App.css` + `src/index.css` — layout and global styles

## Assets
The app references images using `/assets/...`. Ensure figma images are available under `public/assets/` at runtime.

## Customization
Adjust the theme palette in `src/theme.js` or override CSS variables in `src/index.css`.

