require("dotenv").config({ path: "./.env" });

module.exports = {
  env: {},
  target: "serverless",
  webpack: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: config.module.rules.concat([
          {
            test: /\.md$/,
            loader: "raw-loader"
          }
        ])
      }
    };
  }
};
