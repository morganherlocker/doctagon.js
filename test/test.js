var should = require('should')
  ,fs = require('fs')
  ,doctagon = require('../');

var dir = './example/magic'
  ,out = './magic_help.html';

doctagon(dir, out);

describe('output file', function(){
  it('should exist', function(done){
    fs.exists(out, function(exists) {
      exists.should.be.true;
      fs.unlink(out, function(err){
        if(err) throw err;
        done();
      });
    });
  });
});

