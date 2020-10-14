const gulp = require('gulp');

// Работа со скриптами

module.exports = function script() {
    return gulp.src('app/js/*.js')
      pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulpif(argv.prod, uglify()))
 	.pipe(gulp.dest('dist/js/'))	
};
