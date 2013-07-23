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
  describe('html', function(){
    it('should have a title tag with "magic"', function(){
      $('title').html().should.equal('magic');
    })
    it('should contain and h1 tag with "magic"', function(){
      $('h1').html().should.equal('magic');
    });
    it('should contain a div for the table of contents', function(){
      $('div#toc').length.should.equal(1);
    });
    it('should contain a div with a content id', function(){
      $('div#content').length.should.equal(1);
    });
  });
});