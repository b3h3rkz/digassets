var gulp = require('gulp');
var gls = require('gulp-live-server');
gulp.task('serve', function () {
    //serve at custom port 
    gls.static("./", 9000).start();;

    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['app/**/*.css', 'app/**/*.html', 'app/**/*.js'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('default',['serve']);