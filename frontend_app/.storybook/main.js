module.exports = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  staticDirs: ["../public"],
  core: {
    builder: "@storybook/builder-webpack5"
  }
};
