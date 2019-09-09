module.exports = function () {

  const html = {
    src: $.path.src,
    build: $.path.build
  }
  $.task('html', function () {
    return $.src(html.src + '*.html')
      .pipe($.gp.plumber())
      .pipe($.gp.debug())
      .pipe($.gp.rigger())
      .pipe($.dest(html.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}