var should = require('should')
  ,fs = require('fs')
  ,cheerio = require('cheerio')
  ,doctagon = require('../');

var dir = './example/magic'
  ,out = './magic_help.html';

doctagon(dir, out);
fs.readFile(out, function (err, html) {
  if (err) throw err;
  var $ = cheerio.load(html)
  describe('table of contents', function(){
    it('should have a "welcome to hugwartz" section in the toc', function(){
      throw -1;
    });
    it('should have a "hello muggle" section in the toc', function(){
      throw -1;
    });
  });
  describe('content', function(){
    it('should have a paragraph in the welcome section', function(){
      throw -1;    
    });
  });
});