var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

gulp.task('lint', function() {
  gulp.src('./**/*.js')
    .pipe(plugins.jshint());
});

gulp.task('browserify', function() {
  gulp.src('assets/js/app.js')
  .pipe(plugins.browserify({
    debug: !gulp.env.production
  }))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('node-sass', function() {
  gulp.src('assets/sass/*.scss')
  .pipe(plugins.sass())
  .pipe(gulp.dest('./public/css'));
});

gulp.task('jade', function() {
  gulp.src('assets/**/*.jade')
  .pipe(plugins.jade())
  .pipe(gulp.dest('./public'));
});

function watch() {
  plugins.watch({glob: 'assets/js/**/*.js'}, function() {
    gulp.start('browserify');
  });
  plugins.watch({glob: 'assets/sass/**/*.scss'}, function() {
    gulp.start('node-sass');
  });
  plugins.watch({glob: 'assets/**/*.jade' }, function() {
    gulp.start('jade');
  });
}

gulp.task('develop', function() {
  watch();
});

gulp.task('default', [ 'develop' ]);
