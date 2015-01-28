var gulp = require('gulp');
var path = require('path');
var vulcanize = require('gulp-vulcanize');
var polymports = require('gulp-polymports');
var bowercfg = require('bower-config').read();
var pkg = require('./package.json');

// Make elements bundles that can be elements included frequency, polymer sets
// or set of static elements for yours
gulp.task('vulcanize:common', function() {
  var dest = path.join(bowercfg.directory, pkg.name)
  return polymports.src(require('./vulcanize.json').bundles)
    .pipe(vulcanize({
      dest: path.join(dest),
      csp: true,
      inline: true
    }))
    .pipe(gulp.dest(dest));
});

// Run the Chrome Apps as debug mode
gulp.task('run:debug', function() {
  gulp.watch('vulcanize.json', ['vulcanize:common']);
});

// Build your Chrome App
gulp.task('build', ['vulcanize:common'], function() {
});
