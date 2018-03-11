var gulp = require('gulp');
var gls = require('gulp-live-server');
gulp.task('serve', function () {
    //serve at custom port 
    var server = gls.static('./', 8888);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['app/**/*.css', 'app/**/*.html', 'app/**/*.js'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('default', serve);