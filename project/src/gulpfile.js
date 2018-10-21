
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var elixir = require('laravel-elixir');
gulp.task('webserver', function () {
  gulp.src('../build/')
    .pipe(webserver({
      port: 8080,
	     livereload: true,
      https: false,
      directoryListing: false,
      open: false,
    }));
});

elixir(function (mix) {
	mix.webpack("./app.js", "../build/app.min.js");
	mix.copy("./index.html", "../build/index.html");
  mix.copy("./views/**/*.html", "../build/views/");
  mix.copy("./services/**/*.js", "../build/services/");
  mix.copy('./assets/images/', '../build/assets/images/');
  mix.copy('./assets/common/', '../build/assets/common/');
  mix.copy('./assets/js/', '../build/assets/js/');
  mix.copy('./assets/sass/', '../build/assets/sass/');
  mix.sass("./assets/sass/**/*.scss", "../build/assets/app.min.css");
})
