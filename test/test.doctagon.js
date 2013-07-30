var should = require('should')
  ,fs = require('fs-extra')
  ,cheerio = require('cheerio')
  ,doctagon = require('../')
  ,dir = './example/magic'
  ,out = './test/magic'
  ,name = 'magic';

describe('doctagon', function() {
  before(function(done) {
    doctagon.doctagon(dir, out, function(){
      done();
    });
  });
  it('should create a file called magic.html', function(done) {
    fs.exists(out + '/magic.html', function(exists) {
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