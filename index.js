var util = require('util');

var less = require('less');
var fast = require('fast.js');

module.exports = function (text, content, callback) {
  var refrain = this;
  less.render(text, fast.assign({
    paths: [refrain.options.srcDir],
    filename: content.filePath
  }, refrain.options.less || {}, content), function (err, output) {
    if (err) err = util.format('Error: %s\n    at %s:%d:%d', err.message, err.filename, err.line, err.column);
    callback(err, output ? output.css : output);
  });
};
