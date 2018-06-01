var gulp = require('gulp');
var include = require('gulp-html-tag-include');


// Mueve archivos de assets
gulp.task('mover', ['moverReveal', 'moverAssets']);


gulp.task('html-include', function () {
    return gulp.src('src/slides/*.html')
        .pipe(include())
        .pipe(gulp.dest('build'));
});


gulp.task('watch', ['html-include', 'mover'], function () {
    return gulp.watch([
        './src/slides/*.html',
        './templates/*.html',
        './assets/**/*'
    ], ['html-include', 'mover']);
});


gulp.task('default', ['watch']);


// Mueve archivos de assets
gulp.task('moverAssets', function () {
    return gulp.src('assets/**')
        .pipe(gulp.dest('build'));
});

// Mueve archivos de revealjs
gulp.task('moverReveal', function () {
    return gulp.src(['node_modules/reveal.js/css/**/*.css',
            'node_modules/reveal.js/js/**/*.js',
            'node_modules/reveal.js/lib/**',
            'node_modules/reveal.js/plugin/**'],
        {base: './node_modules/reveal.js/'})
        .pipe(gulp.dest('build'));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['html-include', 'mover'], function () {
    return gulp.src("./build/**/*")
        .pipe(gulp.dest('build'))
});
