var gulp = require("gulp"); 
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    open:true,
    directoryListing: {
  enable: true,
  path: 'site/prod/'
}
  });
});

  
gulp.task('scripts', function() {
	return gulp.src('**/*.js')
	.pipe(connect.reload());

});
gulp.task('html', function() {
	return gulp.src('**/*.html')
	.pipe(connect.reload());

});
gulp.task('watch', function() {
	gulp.watch('**/*.js', ['scripts']);
	gulp.watch('**/*.html', ['html']);
	
});

gulp.task("default", [ 'scripts','html','watch','connect'])