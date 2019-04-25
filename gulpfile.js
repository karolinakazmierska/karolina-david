const gulp = require('gulp'); // zamiast var -> const
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const handleError = function(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            // notify: false,
            // open: false, // albo true, jeśli chcę, żeby przeglądarka się otwierała sama
            open: true,
            browser: "google chrome",
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(plumber({errorHandler: handleError}))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// obserwujemy zmiany w plikach
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel ('watch', gulp.parallel('sass', 'browser-sync'),
    function (done) {
        console.log('Here');
        done();
    }
));
