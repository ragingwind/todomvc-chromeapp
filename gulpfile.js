var gulp = require('gulp');
var path = require('path');
var vulcanize = require('gulp-vulcanize');
var polymports = require('gulp-polymports');

var configs = {
  bundles: 'app/elements/bundles'
};

// Make elements bundles that can be elements included frequency, polymer sets
// or set of static elements for yours
gulp.task('vulcanize:bundles', function() {
  return polymports.src(require('./vulcanize.json').bundles)
    .pipe(vulcanize({
      dest: path.join(__dirname, configs.bundles),
      csp: true,
      inline: true
    }))
    .pipe(gulp.dest(configs.bundles));
});

// Build your Chrome App
gulp.task('build', ['vulcanize:bundles'], function() {
});
