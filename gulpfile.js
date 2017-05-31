// gulpfile.js
var gulp = require('gulp'),
    connect = require('gulp-connect');
	
var open = require('gulp-open')

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create()
var reload = browserSync.reload

// 创建一个名为test的任务，任务内容只是简单地在控制台输出一段文本
gulp.task('test', function () {
  return console.log('this is a test')
})

gulp.task('copy', function () {
  return gulp.src('src/**/*')
  .pipe(gulp.dest('docs'))
})

gulp.task('sass:dev', function () {
  return gulp.src('static/sass/public/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('static/css'))
  .pipe(reload({stream: true}))
})

gulp.task('dev', ['sass:dev'], function () {
  browserSync.init({
    server: {
      baseDir: "."  // 设置服务器的根目录为dist目录
    },
    notify: false  // 开启静默模式
  })

  gulp.watch('static/sass/public/*.scss', ['sass:dev'])
})

gulp.task('webserver', function() {
    connect.server();
	gulp.src('').pipe(open({uri: 'http://localhost:8080/index.html'}));
});
 
gulp.task('default', ['dev']);