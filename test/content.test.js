var should = require('should')
  ,fs = require('fs')
  ,cheerio = require('cheerio')
  ,doctagon = require('../');

var dir = '../example/magic'
  ,out = './magic_help.html';

describe('content', function(){
  before(function(done){
    doctagon(dir, out, function(){
      fs.readFile(out, function (err, html) {
        if (err) throw err;
        $ = cheerio.load(html)
        done();
      });
    });
  });
  it('should have a paragraph in the welcome section', function(){
    $('div#1-welcometohugwartz').html().should.exist
  });
  after(function(done){
    fs.unlink(out, function(err){
      if(err) throw err;
      done();
    });
  });
});
