export default configure(() => {
  return {
    boot: ["configurations"],
    supportTS: true,
    extras: ["mdi-v7", "roboto-font", "material-icons"],
    build: {
      target: {
        browser: ["es2022", "firefox115", "chrome115", "safari14"],
        node: "node20"
      },
      vueRouterMode: "hash"
    },
    sourceFiles: {
      router: "src/plugins/router",
      store: "src/plugins/pinia"
    },
    devServer: {
      open: true,
      port: 9000
    },
    framework: {
      cssAddon: true,
      config: {
        ripple: {}
      },
      plugins: ["Loading", "Dialog"]
    },
    electron: {
      bundler: "packager",
      packager: {
        asar: true,
        overwrite: true,
        platform: "linux",
        name: "versioning"
      }
    }
  };
});
