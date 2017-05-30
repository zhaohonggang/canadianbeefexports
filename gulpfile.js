// gulpfile.js
var gulp = require('gulp'),
    connect = require('gulp-connect');
	
var open = require('gulp-open')

// 创建一个名为test的任务，任务内容只是简单地在控制台输出一段文本
gulp.task('test', function () {
  return console.log('this is a test')
})

gulp.task('copy', function () {
  return gulp.src('src/**/*')
  .pipe(gulp.dest('docs'))
})

gulp.task('webserver', function() {
    connect.server();
	gulp.src('').pipe(open({uri: 'http://localhost:8080/index.html'}));
});
 
gulp.task('default', ['webserver']);