module.exports = {
  loadPlugin: function () {
    module.exports = Object.assign(module.exports, {
      "migrator:migration:hook:require": function () {
        /**
         * Return value of this hook can be either a pure value or a Promise.
         */
        return {
          extensions: "ts",
        };
      },
    });

    delete module.exports.loadPlugin;
  },
  name: "typescript",
  hooks: ["migrator:migration:hook:require"],
};
