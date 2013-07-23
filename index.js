var fs = require('fs')
  ,path = require('path')
  ,cheerio = require('cheerio');

module.exports = function(dir, out) {
  projectName = path.basename(dir);
  var $ = cheerio.load('<html></html>');
  $('html').append('<head></head>');
  $('html').append('<body></body>');
  $('head').append('<title>'+projectName+'</title>');
  $('body').append('<h1>'+ projectName +'</h1>');
  $('body').append('<div id="toc"></div>');
  $('body').append('<div id="content"></div>');
  var html = $.html();
  //console.log(html)
  fs.writeFile(out, html, function(err){
    if(err) throw err;
  });
}