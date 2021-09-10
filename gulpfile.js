const { src, dest, watch }= require('gulp')
const sass = require('gulp-sass')(require('sass'))

const css = () => src('./src/scss/**/*.scss').pipe(sass()).pipe(dest('./docs/css'))

const viewResult = () => watch('./src/scss/**/*.scss', css)

exports.viewResult = viewResult;