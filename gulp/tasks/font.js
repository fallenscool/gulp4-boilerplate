module.exports = function () {

  const font = {
    src: $.path.src + 'assets/fonts/**/*.*',
    build: $.path.build + 'assets/fonts/'
  }

  $.task('font', function () {
    return $.src(font.src)
      .pipe($.dest(font.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}
