var gulp = require('gulp');
var sass = require('gulp-compass');
gulp.task('compass',function () {
  gulp.src('./scss/**')
      .pipe(sass({
         comments: false,
         css: 'css',
         sass: 'scss',
         image: 'img'
       }))
      .pipe(gulp.dest('css'));
})
gulp.task('default',['compass'],function () {
  //我的默认任务
  gulp.src(['./bower_components/jquery/dist/jquery.min.js',
          './bower_components/pagePiling.js/jquery.pagepiling.css',
          './bower_components/pagePiling.js/jquery.pagepiling.min.js'])
      .pipe(gulp.dest('./vendor'));
})
