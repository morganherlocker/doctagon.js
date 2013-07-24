var should = require('should')
  ,fs = require('fs')
  ,doctagon = require('../');

var dir = '../example/magic'
  ,out = '../magic_help2.html';

describe('output file', function(){
  before(function(done){
    doctagon(dir, out);
    done();
  });
  it('should exist', function(done){
    fs.exists(out, function(exists) {
      exists.should.be.true;
      console.log(out)
      console.log(exists)
      fs.unlink(out, function(err){
        if(err) throw err;
        done();
      });
    });
  });
  after(function(done){
    fs.unlink(out, function(err){
      if(err) throw err;
      done();
    });
  });
});