module.exports = function () {

  const watch = {
    html: $.path.src + '*.html',
    scss: $.path.src + 'styles/**/*.scss',
    js: $.path.src + 'js/**/*.js',
    img: $.path.src + 'assets/img/**/*.*',
    sprite: $.path.src + 'assets/svg/**/*.*',
    font: $.path.src + 'assets/fonts/**/*.*',
    static: $.path.src + 'assets/static/**/*.*',
  }

  $.task("watch", () => {
    $.watch([watch.html], $.parallel("html"));
    $.watch([watch.scss], $.parallel("scss"));
    $.watch([watch.js], $.parallel("js"));
    $.watch([watch.img], $.parallel("img"));
    $.watch([watch.sprite], $.parallel("sprite"));
    $.watch([watch.font], $.parallel("font"));
    $.watch([watch.static], $.parallel("static"));
  });
}