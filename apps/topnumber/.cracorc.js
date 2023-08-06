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
          name: "topnumber",
          filename: "remoteEntry.js",
          exposes: {
            "./TopNumber": "./src/components/TopNumber",
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
