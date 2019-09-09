'use strict';
const { series, parallel, task, src, dest, watch } = require('gulp');


global.$ = {
  series,
  parallel,
  task,
  src,
  dest,
  watch,
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  bs: require('browser-sync').create()
};

global.env = $.gp.util.env.env;
env = env ? env : false;

global.$.path = {
  tasks: require('./gulp/config/tasks.js'),
  src: './src/',
  build: env ? './public/' : './build/'
}


$.path.tasks.forEach(function (tasksPath) {
  require(tasksPath)();
});


$.task("default", $.series("build", $.parallel("server", "watch")));