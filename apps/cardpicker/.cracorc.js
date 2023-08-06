const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "cardpicker",
          filename: "remoteEntry.js",
          exposes: {
            "./CardPicker": "./src/components/CardPicker",
          },
          shared: {
            ...deps,
            ui: {
              singleton: true, // The shared module will be loaded only once in the entire application
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});
