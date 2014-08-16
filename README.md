# gulp-semiflat

> Amend the base path of gulp vinyl files based on a <code>glob</code> to produce a somewhat flatter file tree at the
destination.

## Install

Install with [npm](https://npmjs.org/package/gulp-semiflat).

```
npm install --save-dev gulp-semiflat
```

## Usage

```js
var gulp = require('gulp');
var gulpSemiFlat = require('gulp-semiflat');

gulp.task('default', function () {
  return gulp.src('js/**/lib/**/*.js')  // base will be '/js'
    .pipe(gulpSemiFlat('js/**/lib'))    // base is now '/js/.../lib'
    .pipe(gulp.dest('build/js');
});
```

Note that trailing ** in the glob will match the full path to the file. This will give the limiting case of
[gulp-flatten](https://www.npmjs.org/package/gulp-flatten).