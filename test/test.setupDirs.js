var should = require('should')
  ,fs = require('fs-extra')
  ,doctagon = require('../')
  ,dir = '../example/magic'
  ,out = './magic';

describe('setupDirs', function() {
  before(function(done){
    doctagon.setupDirs(dir, out, function() {
      done();
    });
  });
  it('should have a root directory "magic"', function(done) {
    fs.exists(out, function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should have a directory "css"', function(done) {
    fs.exists(out + '/css', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should have a root directory "js"', function(done) {
    fs.exists(out + '/js', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should have a root directory "vid"', function(done) {
    fs.exists(out + '/vid', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should have a root directory "img"', function(done) {
    fs.exists(out + '/img', function(exists){
      exists.should.be.true;
      done();
    });
  });
  after(function(done) {
    fs.remove(out, function(err){
      if(err) throw err;
      done();
    });
  });
});