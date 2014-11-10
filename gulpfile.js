var gulp = require('gulp');
var path = require('path');
var vulcanize = require('gulp-vulcanize');
var bowercfg = require('bower-config').read();
var through = require('through2');
var File = require('vinyl');

var configs = {
  libs: 'app/elements/',
  output: {
    debug: 'src',
    release: 'release'
  }
};

var htmlimport = {
  src: function(imports, basepath) {
    if (!imports) {
      throw new Error('Unknown imports list');
    }

    if (!basepath) {
      basepath = bowercfg.directory;
    }

    var stream = through.obj();
    var output = ['<!doctype html>', '<html>', '<head>'];

    Object.keys(imports).forEach(function(filename) {
      console.log('imports', filename, imports[filename]);
      imports[filename].forEach(function(link) {
        output.push('<link rel="import" href="' +
            path.join(basepath, link, link + '.html') + '">');
      });

      output.push(['</head>', '</html>']);
      stream.write(new File({
        path: filename,
        contents: new Buffer(output.join('\n'))
      }));
    });

    return stream;
  }
};

gulp.task('vulcanize:components', function() {
  return htmlimport.src({
    'components.html': [
      'core-scaffold', 'core-toolbar', 'core-header-panel',
      'core-menu', 'core-item', 'core-iconset-svg',
    ]},
    bowercfg.directory
  )
  .pipe(vulcanize({
    dest: path.join(__dirname, 'app/elements'),
    csp: true,
    excludes: {
      imports: [
        "polymer.html$"
      ]
    }
  }))
  .pipe(gulp.dest(configs.libs));
});
