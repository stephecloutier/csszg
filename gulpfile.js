// Définition des dépendances dont on a besoin pour exécuter les tâches

var
    gulp = require('gulp'),
    sass = require('gulp-sass');


// Définition de quelques variable générales pour notre gulpfile

var
    source = 'sources/',
    dest = 'build/';


// Définition de quelques variables liées à nos tâches (options de tâches)

var
    css = {
        in: source + 'scss/main.scss',
        watch: [source + 'scss/**/*'],
        out: dest + 'css/',
        sassOpts: {
            outputStyle: 'nested',
            precision: 3,
            errLogToConsole: true
        }
    };

// Définition des tâches

gulp.task('sass', function() {
    return gulp.src(css.in)
        .pipe(sass(css.sassOpts))
        .pipe(gulp.dest(css.out));
});

// Tâche par défaut

gulp.task('default', function(){
    gulp.watch(css.watch, ['sass']);
});
