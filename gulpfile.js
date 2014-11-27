var gulp = require('gulp');
var path = require('path');
var vulcanize = require('gulp-vulcanize');
var polymports = require('gulp-polymports');

var configs = {
  elements: 'app/elements/'
};

gulp.task('vulcanize:components', function() {
  return polymports.src(require('./components.json'))
  .pipe(vulcanize({
    dest: path.join(__dirname, configs.elements),
    csp: true,
    excludes: {
      imports: [
        "polymer.html$"
      ]
    }
  }))
  .pipe(gulp.dest(configs.elements));
});
