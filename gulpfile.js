var gulp = require('gulp');
var sass = require('gulp-sass');

var exefile = 'some/bin/path/MyNiceProgram.exe';

gulp.task('build', function(){
    gulp.src(exefile).pipe(gulp.dest('../../Binaries/'));
});
gulp.task('default', ['build'], function(){
    gulp.watch(exefile, ['build']);
}); 

gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('sass-watch', function(){
    gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass-watch']);