var through = require('through2');
var minimatch = require('minimatch');

/**
 * Amend the base path of gulp vinyl files based on a <code>glob</code> to produce a somewhat flatter file tree at the
 * destination.
 * @param {string} [glob] A glob that will match the relative path of a file
 * @returns {Transform} A transform stream for gulp
 */
module.exports = function(glob) {
  'use strict';
  return through.obj(function(file, encoding, done) {
    var source   = minimatch.makeRe(file.cwd + glob.replace(/^\.?\//, '')).source.replace('$', '');
    var pattern  = new RegExp(source);
    var analysis = pattern.exec(file.path);
    if (analysis) {
      file.base = analysis[0];
    }
    this.push(file);
    done();
  });
};