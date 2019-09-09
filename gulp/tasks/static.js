module.exports = function () {

  const static = {
    src: $.path.src + 'assets/static/**/*.*',
    build: $.path.build + 'assets/static'
  }

  $.task('static', function () {
    return $.src(static.src)
      .pipe($.dest(static.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}