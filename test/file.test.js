var should = require('should')
  ,fs = require('fs')
  ,doctagon = require('../')
  ,dir = '../example/magic'
  ,out = './magic_help.html';

describe('output file', function(){
  before(function(done){
    doctagon(dir, out, function(){
      fs.readFile(out, function (err, html) {
        if (err) throw err;
        done();
      });
    });
  });
  it('should exist', function(done){
    fs.exists(out, function(exists) {
      exists.should.be.true;
      done();
    });
  });
  after(function(done){
    fs.unlink(out, function(err){
      if(err) throw err;
      done();
    });
  });
});