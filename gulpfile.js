const { src, series, watch, task } = require('gulp');

const files = ['index.js', 'test/*.js', 'gulpfile.js'];

const lint = (done) => {
    var eslint = require('gulp-eslint');
    return src(files).pipe(eslint())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError()).on('error', done);
}

const test = (done) => {
    var mocha = require('gulp-mocha');
    return src('test/*.js', { read: false })
        .pipe(mocha())
        .on('error', done);
}

exports.test = test;
exports.lint = lint;
exports.default = series(lint, test);

watch(files, task('default'));
