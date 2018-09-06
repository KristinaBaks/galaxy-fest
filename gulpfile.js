var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', ['watch', 'style']);

gulp.task('watch', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
    gulp.watch('docs/index.html', function(){
        browserSync.reload();
    });
    gulp.watch('docs/dist/js/main.js', function(){
        browserSync.reload();
    });
    gulp.watch('docs/assets/scss/*.scss', ['style']);
})

gulp.task('style', function(){
    return gulp.src('docs/assets/scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('docs/dist/css'))
        .pipe(browserSync.stream());
});