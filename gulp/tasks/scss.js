module.exports = function () {

  const scss = {
    src: $.path.src + 'styles/app.scss',
    build: $.path.build + 'css'
  }

  $.task('scss', function () {
    return $.src(scss.src)
      .pipe(env ? $.gp.util.noop() : $.gp.sourcemaps.init())
      .pipe($.gp.plumber())
      .pipe($.gp.sass())
      .pipe(
        $.gp.autoprefixer({
          overrideBrowserslist: ['> 0.1%'],
          cascade: false
        })
      )
      .pipe(
        $.gp.cleanCss({
          level: 2
        })
      )
      .pipe(env ? $.gp.util.noop() : $.gp.sourcemaps.write())
      .pipe($.dest(scss.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}