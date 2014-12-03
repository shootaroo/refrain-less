var less = require('less');
var fast = require('fast.js');

module.exports = function (text, content, callback) {
  var refrain = this;
  less.render(text, fast.assign(content, {
    paths: [refrain.options.srcDir],
    filename: content.filePath
  }), function (err, output) {
    callback(err, output ? output.css : output)
  });
};
