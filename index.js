var fs = require('fs')
  ,path = require('path')
  ,cheerio = require('cheerio')
  ,markdown = require('markdown').markdown
  ,walkdir = require('walkdir');

module.exports = function(dir, out) {
  projectName = path.basename(dir);
  var $ = setupDoc(projectName);
  buildSections(dir, $, function($){
    var html = $.html();
    fs.writeFile(out, html, function(err){
      if(err) throw err;
    });
  });
}

var setupDoc = function(name){
  var $ = cheerio.load('<html></html>');
  $('html').append('<head></head>');
  $('html').append('<body></body>');
  $('head').append('<title>'+name+'</title>');
  $('body').append('<h1>'+name+'</h1>');
  $('body').append('<div id="toc"></div>');
  $('body').append('<div id="content"></div>');

  return $;
}

var buildSections = function(root, $, done) {
  var paths = walkdir.sync(root);
  var dirs = [];
  var files = [];
  for(var p in paths){
    var basename = path.basename(paths[p]);
    var id = basename.split(' ').join('');
    if(fs.lstatSync(paths[p]).isDirectory()){
      $('div#content').append('<div id="'+basename+'"><h2>'+basename+'</h2></div>')
    }
    else{
      var fileName = path.basename(basename, '.markdown')
      id = fileName.split(' ').join('');
      $('div#content').append('<div id="'+id+'"><h3>'+fileName+'</h3></div>')
      var markdownContent = fs.readFileSync(paths[p], 'utf8');
      $('div#'+id).append('<p>'+markdown.toHTML(markdownContent)+'</p>')
    }
  }
  done($);
}

