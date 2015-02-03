var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var vulcanize = require('gulp-vulcanize');
var polymports = require('gulp-polymports');
var bowercfg = require('bower-config').read();
var livereload = require('gulp-livereload');
var reload = function(c) {
  gutil.log('Reloading ChromeApp', gutil.colors.cyan(c.type), ':', path.basename(c.path));
  livereload.reload();
}
var pkg = require('./package.json');

// Add a new element to `app/elements/<element-name>/`
gulp.task('el', function() {

});

// Make elements bundles that can be elements included frequency, polymer sets
// or set of static elements for yours
gulp.task('vulcanize:common', function() {
  var dest = path.join(bowercfg.directory, pkg.name)
  polymports.src(require('./vulcanize.json').bundles)
    .pipe(vulcanize({
      dest: path.join(dest),
      csp: true,
      inline: true
    }))
    .pipe(gulp.dest(dest));
});

// Run the Chrome Apps as debug mode
gulp.task('run:debug', function() {
  livereload.listen({
    port: 9000,
    quiet: true
  });

  gulp.watch([
    'app/style/*.css',
    'app/**/*.html',
    'app/scripts/**/*.js']
  ).on('change', reload);

  gulp.watch('vulcanize.json', ['vulcanize:common', reload]);
});

// Build your Chrome App
gulp.task('build', ['vulcanize:common'], function() {
});
