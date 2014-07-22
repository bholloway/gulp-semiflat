var through = require('through2');
var minimatch = require('minimatch');
var path = require('path');

/**
 * Amend the base path of gulp vinyl files based on a <code>glob</code> to produce a somewhat flatter file tree at the
 * destination.
 * @param {string} [glob] A glob that will match the leading portion of a file <code>path</code>
 * @returns {Transform} A transform stream for gulp
 */
module.exports = function(glob) {
  'use strict';
  var source  = minimatch.makeRe(path.resolve(glob)).source.replace('$', '').replace(/\\\//g, '[\\\\\\/]');
  var pattern = new RegExp(source);
  return through.obj(function(file, encoding, done) {
    var analysis = pattern.exec(file.path);
    if (analysis) {
      file.base = analysis[0];
    }
    this.push(file);
    done();
  });
};