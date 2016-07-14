var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');




// Scripts
gulp.task('scripts', function(){
    gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

//styles
gulp.task('styles', function(){
    gulp.src('css/app/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('css/'));

});



//Watch Task
gulp.task('watch', function(){


    gulp.watch('js/*.js', ['scripts']),
    gulp.watch('css/**/*.scss', ['styles']);

});

gulp.task('default', ['scripts', 'styles', 'watch']);
