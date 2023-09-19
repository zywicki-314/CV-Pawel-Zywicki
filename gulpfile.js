const gulp = require("gulp");
const less = require("gulp-less");
const browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./LESS/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("style.css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./LESS/**/*.less", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;

/* npm i --save-dev gulp gulp-less browser-sync */
