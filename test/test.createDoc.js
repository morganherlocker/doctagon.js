var should = require('should')
  ,doctagon = require('../')
  ,dir = '../example/magic'; 

var doc;

describe('createDoc', function(){
  before(function(done){
    doctagon.createDoc(dir, function(result){
      doc = result;
      done();
    });
  });
  it('should have one or more dirs', function(){
    doc.dirs.length.should.be.above(0);
  });
  it('should have more than one dir', function(){
    doc.dirs.length.should.be.above(1);
  });
  it('should have one or more files', function(){
    doc.files.length.should.be.above(0);
  });
  it('should have a name for the first file', function(){
    doc.files[0].name.should.exist;
  });
  it('should have a path for the first file', function(){
    doc.files[0].path.should.exist;
  });
  it('should have content in the first file', function(){
    doc.files[0].content.should.exist;
  });
  it('should have a "intro" attribute under dirs', function(){
    doc.dirs[0].name.should.equal('intro');
  });
  it('should have a "welcome" section under files', function(){
    doc.files[0].name.should.equal('welcome')    
  });
});