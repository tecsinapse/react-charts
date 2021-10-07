module.exports = function (api) {
  api.cache(true);
  if (process.env.BABEL_ENV !== "build") {
    return {
      presets: ["babel-preset-expo"],
    };
  }
  return {
    presets: [
      [
        "@babel/env",
        {
          useBuiltIns: "usage",
          corejs: 3,
          targets: {
            browsers: "Last 2 Chrome versions, Firefox ESR",
            node: "current",
          },
        },
      ],
      [
        "@babel/preset-react",
        {
          development: process.env.BABEL_ENV !== "build",
        },
      ],
      "@babel/preset-typescript",
    ],
    env: {
      build: {
        ignore: [".expo", ".expo-shared", "assets", "App.tsx"],
      },
    },
    ignore: ["node_modules"],
  };
};
