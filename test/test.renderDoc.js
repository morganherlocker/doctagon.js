var should = require('should')
  ,fs = require('fs')
  ,cheerio = require('cheerio')
  ,doctagon = require('../')
  ,dir = './example/magic'
  ,out = './test/magic'
  ,name = 'magic'
  ,$;

describe('renderDoc', function() {
  before(function(done) {
    doctagon.createDoc(dir, function(result) {
      doc = result;
      doctagon.renderDoc(name, doc, function(html) {
        $ = cheerio.load(html);
        done();
      });
    });
  });
  it('should render some html', function() {
    $.html().should.exist;
  });
  it('should create a title tag with "magic"', function() {
    $('title').html().should.equal('magic');
  })
  it('should create an h1 tag with "magic"', function() {
    $('h1').html().should.equal('magic');
  });
  it('should create a div for the table of contents', function() {
    $('div#toc').length.should.equal(1);
  });
  it('should create a content div', function() {
    $('div#content').length.should.equal(1);
  });
  it('should create a "welcome" link in the toc', function(){
    $('a').attr('href', 'welcome').html().should.exist;
  });
  it('should create a paragraph in the welcome section', function() {
    $('div#welcome').html().should.exist
  });
});