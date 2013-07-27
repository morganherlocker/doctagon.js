var should = require('should')
  ,fs = require('fs')
  ,cheerio = require('cheerio')
  ,doctagon = require('../');

var dir = '../example/magic'
  ,out = './magic_help.html';


describe('table of contents', function(){
  before(function(done){
    doctagon(dir, out, function(){
      fs.readFile(out, function (err, html) {
        if (err) throw err;
        $ = cheerio.load(html)
        done();
      });
    });
  });
  it('should have a "welcome to hugwartz" section in the toc', function(){
    $('a').attr('href', 'welcometohugwartz').html().should.exist;
  });
  it('should have a "hello muggle" section in the toc', function(){
    throw 'not implemented';
  });
  after(function(done){
    fs.unlink(out, function(err){
      if(err) throw err;
      done();
    });
  });
});
