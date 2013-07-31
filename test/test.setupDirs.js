var should = require('should')
  ,fs = require('fs-extra')
  ,doctagon = require('../')
  ,dir = './example/magic'
  ,out = './test/magic';

describe('setupDirs', function() {
  before(function(done){
    doctagon.setupDirs(dir, out, function() {
      done();
    });
  });
  it('should create a root directory "magic"', function(done) {
    fs.exists(out, function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should create a directory "css"', function(done) {
    fs.exists(out + '/css', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should create a root directory "js"', function(done) {
    fs.exists(out + '/js', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should create a root directory "vid"', function(done) {
    fs.exists(out + '/vid', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should create a root directory "img"', function(done) {
    fs.exists(out + '/img', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should create a doctagon.css file', function(done){
    fs.exists(out + '/css/doctagon.css', function(exists){
      exists.should.be.true;
      done();
    });
  });
  it('should create a bootstrap.min.css file', function(done){
    fs.exists(out + '/css/bootstrap.min.css', function(exists){
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