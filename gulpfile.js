const { src, dest, watch, series, parallel }= require('gulp')
const sass = require('gulp-sass')(require('sass'))
const minify = require('gulp-minify')

const css = () => src('./src/scss/**/*.scss').pipe(sass()).pipe(dest('./docs/css'))

const js = () => src('./src/js/**/*.js').pipe(minify()).pipe(dest('./docs/js'))

const viewResult = () => watch('./src/scss/**/*.scss', css)

const buildJs = () => watch('./src/js/**/*.js', js)

exports.viewResult = viewResult;
exports.css = css;
exports.js = js;
exports.buildJs = buildJs;
exports.build = parallel(viewResult, buildJs)