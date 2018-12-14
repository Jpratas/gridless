var gulp = require('gulp');
var less = require('gulp-less'); 
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
 
 
/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('./src/gridless.less')
    .pipe(less())
    .pipe(gulp.dest('./distro/css/'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./src/**/*.less' , gulp.parallel(['compile-less']));
});
 
gulp.task('serve', function () {
 
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./distro/"
        }
    }); 
    gulp.watch("./src/*.less").on("change", reload);
    gulp.watch("./src/**/*.less").on("change", reload);
    gulp.watch("./distro/*.html").on("change", reload);
});
 
/* Task when running `gulp` from terminal */
gulp.task('default', gulp.series(['watch-less', 'serve']));