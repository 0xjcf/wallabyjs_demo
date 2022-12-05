module.exports = () => {
  return {
    files: ["style/styles.css", "src/*.js"],
    tests: ["test/*.spec.js", "test/*.test.js"],
    env: {
      kind: "chrome",
    },
    debug: true,
  };
};
