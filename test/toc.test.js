var should = require('should')
  ,fs = require('fs')
  ,cheerio = require('cheerio')
  ,doctagon = require('../');

var dir = '../example/magic'
  ,out = './magic_help.html';


describe('table of contents', function(){
  before(function(done){
    doctagon(dir, out);
    fs.readFile(out, function (err, html) {
      if (err) throw err;
      $ = cheerio.load(html)
      done();
    });
  });
  it('should have a "welcome to hugwartz" section in the toc', function(){
    throw -1;
  });
  it('should have a "hello muggle" section in the toc', function(){
    throw -1;
  });
  after(function(done){
    fs.unlink(out, function(err){
      if(err) throw err;
      done();
    });
  });
});
