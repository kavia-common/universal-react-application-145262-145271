import React, { useEffect } from "react";
import "../src/index.css";
import "../src/App.css";
import { applyThemeToRoot } from "../src/theme";

const withOceanTheme = (Story) => {
  useEffect(() => {
    try {
      applyThemeToRoot();
    } catch (e) {
      // ignore during SSR in some SB processes
    }
  }, []);
  return <Story />;
};

export const decorators = [withOceanTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Overview",
        ["Intro"],
        "Foundation",
        ["Buttons", "Dropdowns", "Tags", "Icons"],
        "Navigation",
        ["NavBar", "Breadcrumbs", "UserAvatarMenu"],
        "Data Display",
        ["EventCard", "EmptyState"],
        "Feedback",
        ["Spinner", "ModalDialog"],
        "Inputs",
        ["SearchBar"],
        "Navigation Aids",
        ["Pagination"],
        "Layout",
        ["Footer"],
      ],
    },
  },
};
