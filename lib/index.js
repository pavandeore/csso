var util = require('./util.js');
var gonzales = require('./gonzales.js');
var translate = require('./translator.js');
var compressor = require('./compressor.js');

var cleanInfo = util.cleanInfo;
var compress = compressor.compress;

var parse = function(s, rule, needInfo) {
    return gonzales.srcToCSSP(s, rule, needInfo);
};

var justDoIt = function(src, noStructureOptimizations, needInfo) {
    var ast = parse(src, 'stylesheet', needInfo);
    return translate(compress(ast, noStructureOptimizations), true);
};

module.exports = {
  parse: parse,
  cleanInfo: cleanInfo,
  treeToString: util.treeToString,
  printTree: util.printTree,
  translate: translate,
  compress: compress,
  justDoIt: justDoIt
};