module.exports = function () {

  const img = {
    src: $.path.src + 'assets/img/**/*.*',
    build: $.path.build + 'assets/img'
  }

  $.task('img', function () {
    return $.src(img.src)
      .pipe($.gp.imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{
          removeViewBox: true
        }]

      }))
      .pipe($.dest(img.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}