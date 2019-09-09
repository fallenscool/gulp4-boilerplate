module.exports = function () {
  const del = {
    build: $.path.build
  }
  $.task("del", function () {
    return $.del([del.build]);
  });
}
