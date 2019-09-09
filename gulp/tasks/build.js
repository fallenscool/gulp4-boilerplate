module.exports = function () {
  $.task(
    'build',
    $.parallel(
      'html',
      'js',
      'scss',
      'img',
      'sprite',
      'font',
      'static'
    )
  );
}