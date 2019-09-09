module.exports = function () {

  const config = {
    server: {
      baseDir: env ? "./public/" : "./build/",
      // directory: true
    },
    // tunnel: true
  }

  $.task("server", function () {
    $.bs.init(config);
  });
}