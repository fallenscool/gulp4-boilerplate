module.exports = function () {

  const js = {
    src: $.path.src + 'js/*.js',
    build: $.path.build + 'js'
  }

  $.task('js', function () {
    return $.src(js.src)
      .pipe($.gp.plumber())
      .pipe($.gp.rigger())
      .pipe(env ? $.gp.util.noop() : $.gp.sourcemaps.init())
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.uglify({
        toplevel: true
      }))
      .pipe(env ? $.gp.util.noop() : $.gp.sourcemaps.write())
      .pipe($.dest(js.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}
