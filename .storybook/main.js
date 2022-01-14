module.exports = {
  "stories": [
    "../projects/ui-kit-lib/src/**/*.stories.mdx",
    "../projects/ui-kit-lib/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}
