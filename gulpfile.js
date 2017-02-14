// Définition des dépendances dont on a besoin pour exécuter les tâches

var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    image = require( 'gulp-image' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    csso = require( 'gulp-csso' );


// Définition de quelques variable générales pour notre gulpfile

var
    source = 'sources/',
    dest = 'assets/';


// Définition de quelques variables liées à nos tâches (options de tâches)

// Définition des tâches

// --- Tasks for images

gulp.task( 'images', function() {
    gulp.src( 'sources/images/**' )
        .pipe( image({
            mozjpeg: false,
            jpegoptim: false
        }) )
        .pipe( gulp.dest( 'assets/images' ) )

} );

// --- Tasks for styles

gulp.task('css', function() {
    gulp.src( 'sources/scss/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( csso() )
        .pipe( gulp.dest( 'assets/css' ) );
});

// --- Watch tasks
gulp.task( 'watch', function(){
    gulp.watch( 'sources/images/**', [ 'images' ] );
    gulp.watch( 'sources/scss/**/*.scss', [ 'css' ] );
} );

// --- Aliases

gulp.task( 'default', [ 'images', 'css' ] );
gulp.task( 'work', [ 'default', 'watch' ] );
